import { Logtail } from '@logtail/node';

type Ctx = Record<string, any>;

const token = process.env.LOGTAIL_SOURCE_TOKEN;
export const logtail = token ? new Logtail(token) : null;

function fallbackLog(level: 'info' | 'error', message: string, data?: any) {
  // eslint-disable-next-line no-console
  const fn = level === 'error' ? console.error : console.log;
  try {
    fn(`[${level.toUpperCase()}] ${message}`, data ?? '');
  } catch {
    // ignore
  }
}

export function errorToJSON(err: unknown) {
  if (!err) return {};
  if (err instanceof Error) {
    return {
      name: err.name,
      message: err.message,
      stack: err.stack,
    };
  }
  try {
    return JSON.parse(JSON.stringify(err));
  } catch {
    return { value: String(err) };
  }
}

export function headerContext(request: Request) {
  const headers = request.headers;
  const ip = (headers.get('x-forwarded-for') || '').split(',')[0] || undefined;
  const country = headers.get('x-vercel-ip-country') || undefined;
  const region = headers.get('x-vercel-ip-country-region') || undefined;
  const userAgent = headers.get('user-agent') || undefined;
  const referer = headers.get('referer') || undefined;
  const url = new URL(request.url);
  const path = url.pathname;
  return { ip, country, region, userAgent, path, referer };
}

export async function logInfo(event: string, ctx: Ctx = {}, meta?: Ctx) {
  const payload = { event, ...ctx, ...(meta || {}) };
  if (logtail) {
    try {
      await logtail.info(event, payload);
      return;
    } catch (e) {
      fallbackLog('error', 'Logtail info failed', { error: errorToJSON(e) });
    }
  }
  fallbackLog('info', event, payload);
}

export async function logError(event: string, ctx: Ctx = {}, meta?: Ctx) {
  const payload = { event, ...ctx, ...(meta || {}) };
  if (logtail) {
    try {
      await logtail.error(event, payload);
      return;
    } catch (e) {
      fallbackLog('error', 'Logtail error failed', { error: errorToJSON(e) });
    }
  }
  fallbackLog('error', event, payload);
}
