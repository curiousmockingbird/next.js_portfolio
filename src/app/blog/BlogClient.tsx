"use client";
import React, { useEffect, useState, useCallback } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
// import Toggle from "./../components/Toggle";

export default function Home() {
  const [post, setPosts] = useState<
    {
      node: {
        coverImage: { url: string | null };
        title: string | null;
        brief: string | null;
        url: string | null;
        updatedAt: string | null;
        publishedAt: string | null;
      };
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/hashnode", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const result = await response.json();
        result.sort(
          (a: any, b: any) =>
            new Date(a.node.publishedAt ?? 0).getTime() -
            new Date(b.node.publishedAt ?? 0).getTime()
        );
        setPosts(result);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()}`;
  }, []);

  const PostCard = ({ post }: { post: any }) => (
    <div className="p-4 w-full ">
      <a
        href={post.url || "#"}
        className="block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all hover:scale-105">
          {post.coverImage.url ? (
            <Image
              className="lg:h-52 w-full object-cover object-center"
              src={post.coverImage.url}
              alt={post.title || "Article cover"}
              width={950}
              height={850}
            />
          ) : (
            <Skeleton height={208} />
          )}
          <div className="p-6">
            <h1 className="text-lg font-medium text-gray-300 mb-3">
              {post.title || <Skeleton width={200} />}
            </h1>
            <p className="text-sm text-gray-600">
              Updated: {post.updatedAt ? formatDate(post.updatedAt) : "No update yet"}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              Published: {post.publishedAt ? formatDate(post.publishedAt) : <Skeleton width={100} />}
            </p>
            <p className="text-gray-400 leading-tight">
              {post.brief
                ? `${post.brief.substring(0, 100)}${post.brief.length > 100 ? "..." : ""}`
                : <Skeleton count={2} />}
              <br />
              <span className="text-cyan-500">Read article</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );

  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <h1 className="text-center p-10 text-lg lg:text-lg font-bold">
          I enjoy writing about what I learn and about my journey as a developer on
          <a
            href="https://hashnode.com/"
            className="underline underline-offset-8 ml-1"
            target="_blank"
          >
            Hashnode
          </a>
        </h1>
        {loading && (
          <div className="p-10 mt-10">
            <Skeleton height={500} count={1} />
          </div>
        )}
        <section className="text-gray-300 body-font">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
              {post.map((c, index) => (
                <PostCard key={index} post={c.node} />
              ))}
            </div>
          </div>
        </section>
      </SkeletonTheme>
    </div>
  );
}
