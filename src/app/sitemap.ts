import data from "@/content/landings.json" assert { type: "json" };

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || (data as any).site?.baseUrl || "https://haroldeveloper.tech";
  const pages = (data as any).pages || {};
  const slugs = Object.keys(pages);
  const routes = [
    "/",
    ...slugs.map((s) => `/${s}`),
    ...slugs.filter((s) => Array.isArray(pages[s]?.projects)).map((s) => `/${s}/projects`),
  ];
  const lastModified = new Date();
  return routes.map((path) => ({ url: `${base}${path}`, lastModified }));
}
