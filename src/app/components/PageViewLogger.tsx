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
      const search = window.location?.search || '';
      const params = new URLSearchParams(search);
      const utm_source = params.get('utm_source') || undefined;
      const utm_medium = params.get('utm_medium') || undefined;
      const utm_campaign = params.get('utm_campaign') || undefined;
      const trk = params.get('trk') || undefined; // LinkedIn sometimes appends `trk`

      // Fallback detection when Referer is stripped
      let detected_source: string | undefined = undefined;
      const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
      if (utm_source) {
        detected_source = utm_source.toLowerCase();
      } else if (referrer && /linkedin\.com/i.test(referrer)) {
        detected_source = 'linkedin';
      } else if (/LinkedInApp|LinkedIn/i.test(ua)) {
        detected_source = 'linkedin';
      }

      sendLog({
        event: 'page_view',
        source: 'client',
        label: path,
        meta: { referrer, utm_source, utm_medium, utm_campaign, trk, detected_source },
      });

      sessionStorage.setItem(key, 'true');
    } catch {
      // no-op
    }
  }, []);

  return null;
}
