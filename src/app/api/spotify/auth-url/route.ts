// One GET request → copies an authorize URL to your clipboard.
// Run *once*, visit it, log in, capture the ?code=… query param.
import { NextResponse } from 'next/server';

export async function GET() {
  const params = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    response_type: 'code',
    redirect_uri: process.env.SPOTIFY_REDIRECT!, // 127.0.0.1 loopback
    scope: 'user-read-recently-played user-read-currently-playing',
    state: crypto.randomUUID(),
  });
  const url =
    'https://accounts.spotify.com/authorize?' + params.toString();
  console.log('\nVisit:\n' + url + '\n');
  return NextResponse.json({ url });
}
