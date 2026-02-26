'use client'

export type LogSource = 'blocks' | 'app';

async function postLog(payload: Record<string, any>) {
  try {
    if (typeof window !== 'undefined') {
      payload.path = window.location.pathname;
    }
    await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error logging button click:', error);
  }
}

export async function logButtonClick(source: LogSource, label: string, meta?: Record<string, any>) {
  // Local console for quick dev feedback
  // eslint-disable-next-line no-console
  console.log(`[${source}] ${label}`, meta ?? '');
  return postLog({ event: 'button_click', source, label, meta });
}

// Convenience wrappers for callers
export const logBlockClick = (label: string, meta?: Record<string, any>) => logButtonClick('blocks', label, meta);
export const logFromApp = (label: string, meta?: Record<string, any>) => logButtonClick('app', label, meta);
