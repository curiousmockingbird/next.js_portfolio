import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import HeaderClient from "@/app/components/HeaderClient";

export const metadata: Metadata = {
  title: "Blog | HarolDeveloper",
  description: "Read my latest articles and tutorials.",
};

export default function BlogPage() {
  return (
    <>
      <HeaderClient />
      <BlogClient />
    </>
  );
}
