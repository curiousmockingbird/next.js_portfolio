import { getLastPlayed } from '@/lib/spotify';
import Image from 'next/image';

export default async function LastPlayed() {
  const item = await getLastPlayed();
  if (!item) return <p>No history yet</p>;

  
  const { track, played_at } = item;

  return (
      <div className="flex gap-4 items-center whitespace-nowrap">
          <p className="text-xs text-gray-500">
            Last song I played on Spotify:   {new Date(played_at).toLocaleString()}
          </p>
        <Image
          src={track.album.images[1].url}
          alt=""
          width={64}
          height={64}
          className="rounded"
        />
          <p className="font-semibold">{track.name}</p>
          <p className="text-sm text-gray-600">
            {track.artists.map((a: any) => a.name).join(', ')}
          </p>
      </div>
  );
}
