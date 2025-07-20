import { getLastPlayed } from '@/lib/spotify';

export default async function LastPlayed() {
  const item = await getLastPlayed();
  if (!item) return <p>No history yet</p>;

  
  const { track, played_at } = item;

  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-4 items-center whitespace-nowrap">
        <img
          src={track.album.images[1].url}
          alt=""
          width={64}
          height={64}
          className="rounded"
        />
        <div>
          <p className="font-semibold">{track.name}</p>
          <p className="text-sm text-gray-600">
            {track.artists.map((a: any) => a.name).join(', ')}
          </p>
          <p className="text-xs text-gray-500">
            Played {new Date(played_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
