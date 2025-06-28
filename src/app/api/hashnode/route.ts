// // app/api/hashnode/route.ts
// export async function GET() {
//   const query = `
//     query Publication {
//       publication(host: "harold-mesa.hashnode.dev") {
//         posts(first: 10) {
//           edges {
//             node {
//               coverImage { url }
//               title
//               brief
//               url
//               updatedAt
//               publishedAt
//             }
//           }
//         }
//       }
//     }
//   `;

//   try {
//     const res = await fetch("https://gql.hashnode.com", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ query }),
//     });

//     const json = await res.json();
//     const articles = json.data.publication.posts.edges;

//     return Response.json(articles);
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
//       status: 500,
//     });
//   }
// }
export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const query = `
    query Publication {
      publication(host: "harold-mesa.hashnode.dev") {
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
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });

    if (!res.ok) {
      return new NextResponse("Failed to fetch from Hashnode", { status: res.status });
    }

    const json = await res.json();
    const articles = json.data.publication.posts.edges;

    return NextResponse.json(articles);
  } catch (error: any) {
    console.error("Error in /api/hashnode:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

