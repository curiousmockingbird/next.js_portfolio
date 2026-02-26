# Features Tracker

This document tracks notable features and operational changes in the portfolio project, with a focus on analytics and logging.

## Overview

- Client analytics: Vercel Analytics and Speed Insights in the App Router.
- Structured logging: Better Stack (Logtail) integration with correlation across events.
- Noise control: Middleware blocks common bot/probe routes.

## Current Analytics

- Vercel Analytics: `@vercel/analytics/react` mounted in `src/app/layout.tsx` via `<Analytics />`.
- Vercel Speed Insights: `@vercel/speed-insights/next` via `<SpeedInsights />`.

## Structured Logging (Better Stack / Logtail)

Purpose: Provide end‑to‑end, queryable logs that correlate button clicks, API calls, and errors via `sessionId` (per visitor) and `requestId` (per API request).

### What Was Added

- Logger utility: `src/lib/logger.ts`
  - Exposes `logInfo(event, ctx, meta?)`, `logError(event, ctx, meta?)`, `headerContext(request)`, `errorToJSON(err)`.
  - Uses `@logtail/node` when `LOGTAIL_SOURCE_TOKEN` is set; otherwise falls back to `console`.
  - Adds `referer` from request headers to `headerContext` so all API-enriched events include the HTTP Referer when present.

- Session correlation: `middleware.ts`
  - Ensures an `httpOnly` `sessionId` cookie for all requests (30 days, `SameSite=Lax`, `Secure`).
  - Keeps existing bot/probe blocking logic.

- API routes instrumentation:
  - `src/app/api/logs/route.ts`
    - Generates `requestId` per request and reads `sessionId` cookie.
    - Extracts `ip`, `country`, `region`, `userAgent`, `path` via `headerContext`.
    - Logs structured events (default `event: 'button_click'`) with `{ source, label, meta }`.
    - Returns `{ requestId, duration_ms }` for correlation.
    - On failure logs `event: 'api_error'` with serialized error.
  - `src/app/api/location/route.ts`
    - Same enrichment; logs `event: 'visitor_location'` with correlation IDs.

- Client event tagging:
  - `src/app/components/framesx-web-blocks/utils/logger.ts`
    - Sends `{ event: 'button_click', source, label, meta, path }` to `/api/logs`.
  - `src/app/components/PageViewLogger.tsx` (new)
    - One-time per session, posts `{ event: 'page_view', source: 'client', label: <path>, meta: { referrer: document.referrer, utm_* , detected_source, rid, trk } }`.
    - Mounted in `src/app/layout.tsx` so it runs on every page. Uses `navigator.sendBeacon` with a JSON blob, falls back to `fetch`.
    - Cleans tracking params from the URL after logging (or if already logged): removes `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `trk`, `rid` via `history.replaceState`.

- Client error capture:
  - `src/app/components/ClientErrorReporter.tsx`
    - Attaches `window` listeners for `error` and `unhandledrejection` and posts `{ event: 'client_error', ... }` to `/api/logs`.
    - Includes `label` (message) and `meta` fields (`stack`, filename/line/col, `pagePath`).

### Event Model (standard fields)

- Core: `event`, `requestId`, `sessionId`, `route`, `method`, `path`, `ip`, `country`, `region`, `userAgent`, `referer`.
- Button clicks: `event='button_click'`, plus `source`, `label`, optional `meta`.
- Visitor location: `event='visitor_location'`.
- Page view: `event='page_view'`, with `label=<path>` and `meta` fields:
  - `referrer=document.referrer`.
  - `utm_source`, `utm_medium`, `utm_campaign` parsed from querystring.
  - `detected_source` heuristic (prefers `utm_source`; otherwise detects LinkedIn via referrer or in-app browser UA).
- API errors: `event='api_error'`, includes serialized `error`.
- Timing: `duration_ms` currently added in `/api/logs` responses; can be incorporated into logs where useful.

### Environment & Dependencies

- Env var: `LOGTAIL_SOURCE_TOKEN` (Better Stack Logs source token).
- Package: `@logtail/node` installed and used server‑side.

### How To Verify

- Local:
  - Without `LOGTAIL_SOURCE_TOKEN`, logs fall back to console output in the terminal.
  - With the token set, trigger button clicks or first‑visit location beacons and confirm ingestion in Better Stack.

- Better Stack (Logtail):
  - Filter by `event = 'button_click'` or `event = 'visitor_location'`.
  - Correlate by `sessionId`; pivot by `path`, `country`, or `source`.
  - For page views, filter `event = 'page_view'` and inspect `meta.referrer` to see sources like LinkedIn or PDF viewers.
  - For errors, filter `event = 'api_error'` and group by `route`.

### Privacy & Quality Controls

- Do not send PII by default; use `meta` sparingly and scrub secrets if present.
- Sampling can be introduced for high‑volume events (e.g., sample a percentage of `button_click`).
- `page_view` is de-duplicated per session via `sessionStorage` to limit noise.
 - After logging, UTMs are removed from the URL to avoid leaking tracking parameters while preserving attribution in logs.

## Future Enhancements

- Broader API coverage:
  - Wrap additional API routes (e.g., contact form) with the same `requestId`/`sessionId` enrichment and `api_error` logging.

- Metrics & dashboards:
  - Create saved views in Better Stack: user journeys by `sessionId`, errors by route, geo breakdowns, and button clicks by page.

- Status and duration:
  - Standardize inclusion of `status` and `duration_ms` across all routes for latency tracking.

## Files Changed (reference)

- `src/lib/logger.ts` (new)
- `middleware.ts` (sets `sessionId` cookie)
- `src/app/api/logs/route.ts` (structured logging and correlation)
- `src/app/api/location/route.ts` (structured logging and correlation)
- `src/app/components/framesx-web-blocks/utils/logger.ts` (adds `event` field)
- `src/app/components/PageViewLogger.tsx` (new; client page_view logging)
- `src/app/layout.tsx` (mounts PageViewLogger)
