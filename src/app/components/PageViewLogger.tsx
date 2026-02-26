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

export default function PageViewLogger() {
  useEffect(() => {
    try {
      // One-time per session to capture original referrer (e.g., LinkedIn, PDF)
      const key = 'hasLoggedPageView';
      if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') return;
      if (sessionStorage.getItem(key)) return;

      const referrer = typeof document !== 'undefined' ? document.referrer : undefined;
      const path = window.location?.pathname || '/';

      sendLog({
        event: 'page_view',
        source: 'client',
        label: path,
        meta: { referrer },
      });

      sessionStorage.setItem(key, 'true');
    } catch {
      // no-op
    }
  }, []);

  return null;
}

