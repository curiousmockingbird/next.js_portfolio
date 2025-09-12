import data from "@/content/landings.json" assert { type: "json" };

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || data.site?.baseUrl || "https://haroldeveloper.tech";
  const routes = ["", ...Object.keys((data as any).pages || {}).map((s) => `/${s}`)];
  const lastModified = new Date();
  return routes.map((path) => ({ url: `${base}${path}`, lastModified }));
}

