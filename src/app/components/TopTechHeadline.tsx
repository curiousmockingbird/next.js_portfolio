import { getTopTech } from '@/lib/nyt';

export default async function TopTechHeadline() {
  const item = await getTopTech();
  if (!item) return <p>No NYT tech headline right now.</p>;

  const img = item.multimedia?.[0];

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700"
    >
      {img && (
        <img
          src={img.url}
          alt={item.title}
          width={64}
          height={64}
          className="mb-3 rounded"
        />
      )}

      <p className="text-sm text-gray-400">NYT • Technology</p>
      <h2 className="font-semibold">{item.title}</h2>
      <p className="text-xs text-gray-500">
        {new Date(item.published_date).toLocaleString()}
      </p>
    </a>
  );
}
