import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import HeaderClient from "@/app/components/HeaderClient";

export const metadata: Metadata = {
  title: "About Me | HarolDeveloper",
  description: "Learn more about Harold, a full-stack developer.",
};

export default function AboutPage() {
  return (
    <>
      <HeaderClient />
      <AboutClient />
    </>
  );
}
