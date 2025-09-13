import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";
import ProjectsClient from "./ProjectsClient";
import data from "@/content/landings.json" assert { type: "json" };

type Params = { params: { landing: string } };

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || (data as any).site?.baseUrl || "https://haroldeveloper.tech";

export function generateStaticParams() {
  const pages = (data as any).pages || {};
  return Object.keys(pages)
    .filter((slug) => Array.isArray(pages[slug]?.projects))
    .map((landing) => ({ landing }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = (data as any).pages?.[params.landing];
  if (!page) return {};
  const url = `${SITE_URL}/${params.landing}/projects`;
  return {
    title: `${page.title} — Projects`,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} — Projects`,
      description: page.description,
      url,
      siteName: (data as any).site?.brand || "Harol Developer",
      images: page.ogImage ? [{ url: page.ogImage }] : undefined,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

export function generateViewport({ params }: Params): Viewport {
  const page = (data as any).pages?.[params.landing];
  if (!page) return {};
  return {
    themeColor: page.themeColor || "#03082e",
  };
}

export default function LandingProjectsPage({ params }: Params) {
  const page = (data as any).pages?.[params.landing];
  if (!page || !Array.isArray(page.projects)) return notFound();
  return <ProjectsClient landing={params.landing} />;
}
