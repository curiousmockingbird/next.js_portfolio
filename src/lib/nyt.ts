interface TopStory {
  title: string;
  url: string;
  published_date: string;
  multimedia?: { url: string; format: string; width: number; height: number }[];
}

export async function getTopTech(): Promise<TopStory | null> {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${process.env.NYT_API_KEY}`,
    { next: { revalidate: 30 } }      // 30‑second ISR window
  );
  if (!res.ok) throw new Error(`NYT ${res.status}`);
  const json = await res.json();

  const first = json.results?.[0] as TopStory | undefined;
  if (!first) return null;

  // Pick the biggest landscape image if available, else any
  const img =
    first.multimedia?.find(m => m.format === 'superJumbo') ??
    first.multimedia?.[0];
  return img ? { ...first, multimedia: [img] } : first;
}
