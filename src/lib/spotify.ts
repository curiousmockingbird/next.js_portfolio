// lib/spotify.ts   (server-only helper)
let cache: { token: string; exp: number } | null =
  (global as any).spotifyTokenCache ?? null;          // survives Vercel cold-starts

export async function getAccess() {
  if (cache && Date.now() < cache.exp) return cache.token;

  const r = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      client_id:      process.env.SPOTIFY_CLIENT_ID!,
      client_secret:  process.env.SPOTIFY_CLIENT_SECRET!,
    }),
  });

  const raw = await r.text();                        // <-- always read body
  if (!r.ok) {
    console.error('[SPOTIFY_REFRESH_HTTP]', r.status, raw);
    throw new Error('HTTP error refreshing token');
  }

  const j = JSON.parse(raw);
  if (j.error || !j.access_token) {                  // 200 but logical failure
    console.error('[SPOTIFY_REFRESH_LOGIC]', j.error ?? 'no-token', raw);
    throw new Error(`Spotify refresh logic error: ${j.error ?? 'no-token'}`);
  }

  cache = {
    token: j.access_token,
    exp:   Date.now() + j.expires_in * 1000 - 60_000, // renew 1 min early
  };
  (global as any).spotifyTokenCache = cache;          // persist across invocations
  return cache.token;
}

export async function getLastPlayed() {
  const token = await getAccess();
  const r = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!r.ok) {
    console.error('[SPOTIFY_RECENTLY_PLAYED]', r.status, await r.text());
    return null;
  }

  const j = await r.json();
  if (!j.items || j.items.length === 0) return null;

  return j.items[0]; // return the most recent played item
}