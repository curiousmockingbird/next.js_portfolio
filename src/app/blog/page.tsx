import type { Metadata } from "next";
import BlogClient from "./BlogClient";
// import HeaderClient from "@/app/components/HeaderClient";
import HomeButton from "../components/HomeButton";

export const metadata: Metadata = {
  title: "Blog | HarolDeveloper",
  description: "Read my latest articles and tutorials.",
  openGraph: {
    title: "Blog | HarolDeveloper",
    description: "Read my latest articles and tutorials.",
  },
};

export default function BlogPage() {
  return (
    <>
      <HomeButton/>
      <BlogClient />
    </>
  );
}
