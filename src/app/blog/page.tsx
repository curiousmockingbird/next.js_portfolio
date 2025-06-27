"use client";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Toggle from "./../components/Toggle";

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

  const query = `query Publication {
    publication(host:"harold-mesa.hashnode.dev") {
      
           posts(first: 10) {
            edges {
                node {
                    title
                    brief
                    url
                    coverImage {
                      url
                    }
                    updatedAt
                  	publishedAt  
                }
            }
        }
         
    }
  }`;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://gql.hashnode.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const result = await response.json();
      const articles = result.data.publication.posts.edges;
      articles.sort(
        (a: any, b: any) =>
          new Date(b.node.publishedAt ?? 0).getTime() -
          new Date(a.node.publishedAt ?? 0).getTime()
      );
      setPosts(articles);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()}`;
  };

  return (
    <div>
      <Toggle />
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
                <div className="p-4 w-full lg:w-1/2" key={index}>
                  <a
                    href={c.node.url || "#"}
                    className="block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all hover:scale-105">
                      {c.node.coverImage.url ? (
                        <Image
                          className="lg:h-52 w-full object-cover object-center"
                          src={c.node.coverImage.url}
                          alt={c.node.title || "Article cover"}
                          width={450}
                          height={350}
                        />
                      ) : (
                        <Skeleton height={208} />
                      )}
                      <div className="p-6">
                        <h1 className="text-lg font-medium text-gray-300 mb-3">
                          {c.node.title || <Skeleton width={200} />}
                        </h1>
                        <p className="text-sm text-gray-600">
                          Updated: {c.node.updatedAt ? formatDate(c.node.updatedAt) : 'Not updated yet'} 
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          Published: {c.node.publishedAt ? formatDate(c.node.publishedAt) : <Skeleton width={100} />}
                        </p>
                        <p className="text-gray-400 leading-tight">
                          {c.node.brief
                            ? `${c.node.brief.substring(0, 100)}${c.node.brief.length > 100 ? "..." : ""}`
                            : <Skeleton count={2} />}
                          <br />
                          <span className="text-cyan-500">Read article</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SkeletonTheme>
    </div>
  );
}
