"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Typography from '@mui/joy/Typography';
// import ArrowBack from '@mui/icons-material/ArrowBack';
import Link from '@mui/joy/Link';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Toggle from './../components/Toggle';


export default function Home() {
    // Added schema of Api querry to get the data from hashnode.
    const [post, setPosts] = useState<{ node: { coverImage: { url: string | null }; title: string | null; brief: string | null; url: string | null; updatedAt: string | null; publishedAt: string | null } }[]>([]);
    const [loading, setLoading] = useState(true);
    // just change the username to yours and you are good to go
    const query = `query Publication {
    publication(host:"harold-mesa.hashnode.dev") {
      posts (first:10){
        edges{
          node {
            coverImage {
              url
            },
            title,
            brief,
            url,
            updatedAt,
            publishedAt,
          }
        }
      }
    }
  }
  `;
    useEffect(() => {
        fetchPosts();
    }, []);
    const fetchPosts = async () => {
        const response = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
        });
        const result = await response.json();
        let articles = result.data.publication.posts.edges;
        articles.sort((a: any, b: any) => {
            return (new Date(a.node.publishedAt ?? 0).getTime() - new Date(b.node.publishedAt ?? 0).getTime());
        });
        setPosts(articles);
        // console.log(JSON.stringify(a));
        setLoading(false);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString()}`;
    };
    return (
        <>
            <div>
            <Toggle />
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <h1 className="text-center items-center justify-center p-10 top-36 text-3xl lg:text-4xl font-bold">My blog on Hashnode</h1>
                {loading && (<div className="p-10 mt-10">
                    <Skeleton height={500} count={1} />
                </div>)}
                <section className="text-gray-300 body-font">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap justify-center whitespace-break-spaces">
                            {post.map((c, index) => (
                                <div className="p-4 w-full lg:w-1/2" key={index}>
                                    <a href={c.node.url || ''} className="block" target="_blank">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all hover:scale-105 ">
                                            <Image
                                                className="lg:h-52 w-full object-cover object-center"
                                                src={c.node.coverImage.url || ''}
                                                alt={c.node.title || ''}
                                                width={450}
                                                height={350}
                                            />
                                            {loading && <Skeleton width={350} height={250} />}
                                            <div className="p-6">
                                                <h1 className="title-font text-lg font-medium text-gray-300 mb-3 leading-5">
                                                    {c.node.title || ''}{loading && <Skeleton count={1} />}
                                                </h1>
                                                <h1 className="title-font text-sm font-regular text-gray-600 leading-5">
                                                    Updated on {c.node.updatedAt ? formatDate(c.node.updatedAt) : ''}{loading && <Skeleton count={1} />}
                                                </h1>
                                                <h1 className="title-font text-sm font-regular text-gray-600 mb-3 leading-5">
                                                    Published on {c.node.publishedAt ? formatDate(c.node.publishedAt) : ''}{loading && <Skeleton count={1} />}
                                                </h1>
                                                <p className="leading-tight text-gray-400 mb-3 sm:leading-4">{c.node.brief ? `${c.node.brief.substring(0, 100)}${c.node.brief.length > 100 ? '...' : ''}` : ''} <br /><br /><span className="text-cyan-500">Read article</span>
                                                    {loading && <Skeleton count={3} />}
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
        </>
    )
};