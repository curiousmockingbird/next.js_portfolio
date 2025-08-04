import { getTopTech } from '@/lib/nyt';
import Image from 'next/image';

export default async function TopTechHeadline() {
  const item = await getTopTech();
  if (!item) return <p>No NYT tech headline right now.</p>;

  const img = item.multimedia?.[0];

  return (
    <div className='flex gap-4 items-center whitespace-nowrap'>
      {img && (
        <Image
          src={img.url}
          alt={item.title}
          width={64}
          height={64}
          className="rounded"
        />
      )}
      <p className="text-sm text-gray-400">Last article read on the NYT:</p>

      <h2 className="font-semibold">{item.title}</h2>
      <p className="text-xs text-gray-500">
        {new Date(item.published_date).toLocaleString()}
      </p>
    </div>
  );
}
