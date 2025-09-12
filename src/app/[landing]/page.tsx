import { notFound } from "next/navigation";
import type { Metadata } from "next";
import data from "@/content/landings.json" assert { type: "json" };
import { SectionRenderer } from "@/app/components/landing/SectionRenderer";

type Params = { params: { landing: string } };

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || data.site?.baseUrl || "https://haroldeveloper.tech";

export function generateStaticParams() {
  const slugs = Object.keys((data as any).pages || {});
  return slugs.map((landing) => ({ landing }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = (data as any).pages?.[params.landing];
  if (!page) return {};
  const url = `${SITE_URL}/${params.landing}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: data.site?.brand || "Harol Developer",
      images: page.ogImage ? [{ url: page.ogImage }] : undefined,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
    themeColor: page.themeColor || "#03082e",
    robots: { index: true, follow: true },
  };
}

export default function LandingPage({ params }: Params) {
  const page = (data as any).pages?.[params.landing];
  if (!page) return notFound();
  return <SectionRenderer sections={page.sections || []} />;
}

