export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

type HashnodePostEdge = {
  node: {
    coverImage: { url: string | null } | null;
    title: string | null;
    brief: string | null;
    url: string | null;
    updatedAt: string | null;
    publishedAt: string | null;
  };
};

type HashnodeResponse = {
  data?: {
    publication?: {
      posts?: {
        edges?: HashnodePostEdge[];
      };
    } | null;
  };
  errors?: {
    message?: string;
    extensions?: {
      code?: string;
    };
  }[];
};

const HASHNODE_ENDPOINT = "https://gql.hashnode.com";
const HASHNODE_PUBLICATION_HOST =
  process.env.HASHNODE_PUBLICATION_HOST ?? "harold-mesa.hashnode.dev";

export async function GET() {
  const query = `
    query Publication($host: String!) {
      publication(host: $host) {
        posts(first: 10) {
          edges {
            node {
              coverImage { url }
              title
              brief
              url
              updatedAt
              publishedAt
            }
          }
        }
      }
    }
  `;

  try {
    const headers: HeadersInit = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };

    if (process.env.HASHNODE_TOKEN) {
      headers.Authorization = process.env.HASHNODE_TOKEN;
    }

    const res = await fetch(HASHNODE_ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables: { host: HASHNODE_PUBLICATION_HOST },
      }),
      cache: "no-store",
      redirect: "follow",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from Hashnode." },
        { status: res.status }
      );
    }

    const contentType = res.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          error:
            "Hashnode did not return JSON. GraphQL API reads now require Hashnode Pro access for the publication.",
          redirectUrl: res.url,
        },
        { status: 403 }
      );
    }

    const json = (await res.json()) as HashnodeResponse;

    if (json.errors?.length) {
      return NextResponse.json(
        {
          error: json.errors
            .map((error) => error.message)
            .filter(Boolean)
            .join(" "),
          errors: json.errors,
        },
        { status: 502 }
      );
    }

    const articles = json.data?.publication?.posts?.edges;

    if (!articles) {
      return NextResponse.json(
        {
          error: `No posts were returned for ${HASHNODE_PUBLICATION_HOST}. Check the publication host and API access.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ posts: articles });
  } catch (error) {
    console.error("Error in /api/hashnode:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
