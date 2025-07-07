// lib/spotify.ts  – reuse everywhere (server only)

// let cache: { token: string; exp: number } | null = null;

// export async function getAccess() {
//   if (cache && Date.now() < cache.exp) return cache.token;           // < 1 h old

//   const body = new URLSearchParams({
//     grant_type: 'refresh_token',
//     refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
//     client_id:      process.env.SPOTIFY_CLIENT_ID!,
//     client_secret:  process.env.SPOTIFY_CLIENT_SECRET!,
//   });

//   const r = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body,
//   });

//   const raw = await r.text();           // << always read the body
// if (!r.ok) {
//   console.error('[SPOTIFY_REFRESH_HTTP_ERROR]', r.status, raw);     // network fail
//   throw new Error('Refresh HTTP error');
// }

// const j = JSON.parse(raw);
// if (j.error) {                        // Spotify sent logical error inside a 200
//   console.error('[SPOTIFY_REFRESH_LOGIC_ERROR]', j.error, j.error_description);
//   throw new Error(`Refresh logic error: ${j.error}`);
// }

//   cache = { token: j.access_token, exp: Date.now() + j.expires_in * 1000 - 60_000 };
//   return cache.token;
// }


export async function getLastPlayed() {
  const token = await getAccess();
  const res = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played?limit=1',
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    },
  );
  return (await res.json()).items?.[0] ?? null;
}

let cache: { token: string; exp: number } | null = null;

export async function getAccess() {
  if (cache && Date.now() < cache.exp) return cache.token;

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    client_id:      process.env.SPOTIFY_CLIENT_ID!,
    client_secret:  process.env.SPOTIFY_CLIENT_SECRET!,
  });

  const r = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  const raw = await r.text();
  if (!r.ok) {
    console.error('[REFRESH_HTTP]', r.status, raw);
    throw new Error('HTTP error refreshing token');
  }
  const j = JSON.parse(raw);
  if (j.error) {
    console.error('[REFRESH_LOGIC]', j.error, j.error_description);
    throw new Error(`Spotify refresh error: ${j.error}`);
  }

  cache = { token: j.access_token, exp: Date.now() + j.expires_in*1000 - 60_000 };
  return cache.token;
}
