'use client';

import { useEffect } from 'react';

function sendLog(payload: Record<string, any>) {
  try {
    const body = JSON.stringify(payload);
    if (typeof navigator !== 'undefined' && 'sendBeacon' in navigator) {
      const blob = new Blob([body], { type: 'application/json' });
      const ok = navigator.sendBeacon('/api/logs', blob);
      if (ok) return;
    }
  } catch {
    // fall through to fetch
  }
  try {
    fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

export default function ClientErrorReporter() {
  useEffect(() => {
    const seen = new Set<string>();

    const makeKey = (message?: string, stack?: string) => `${message || ''}|${stack || ''}`.slice(0, 2000);

    const onError = (event: ErrorEvent) => {
      const message = event.message || 'Unhandled error';
      const stack = event.error?.stack;
      const key = makeKey(message, stack);
      if (seen.has(key)) return; // de-duplicate noisy repeats
      seen.add(key);
      sendLog({
        event: 'client_error',
        source: 'client',
        label: message,
        meta: {
          stack,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
        },
      });
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      // Normalize reason to message/stack when possible
      const reason: any = event.reason;
      const message = (reason && (reason.message || String(reason))) || 'Unhandled promise rejection';
      const stack = reason && reason.stack ? String(reason.stack) : undefined;
      const key = makeKey(message, stack);
      if (seen.has(key)) return;
      seen.add(key);
      sendLog({
        event: 'client_error',
        source: 'client',
        label: message,
        meta: {
          stack,
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
          kind: 'unhandledrejection',
        },
      });
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    };
  }, []);

  return null;
}

