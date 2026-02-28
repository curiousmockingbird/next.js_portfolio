import type { Metadata } from "next";
import AboutClient from "./AboutClient";
export const metadata: Metadata = {
  title: "About Me | HarolDeveloper",
  description: "Learn more about Harold, a full-stack developer.",
  openGraph: {
    title: "About Me | HarolDeveloper",
    description: "Learn more about Harold, a full-stack developer.",
  },
};

export default function AboutPage() {
  return (
    <div className="mt-8 md:mt-12 lg:mt-16">
      <AboutClient />
    </div>
  );
}
