/** @format */

import {client} from "@/sanity/lib/client"
import {blogQuery} from "@/sanity/lib/queries"
import Link from "next/link"

export type PortableTextSpan = {
  _key: string
  _type: "span"
  text: string
  marks?: string[]
}

export type PortableTextBlock = {
  _key: string
  _type: "block"
  children: PortableTextSpan[]
  markDefs?: unknown[]
  style?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: string
  bild: string
  inhalt: PortableTextBlock[]
  veroeffentlichtAm: string
}

export default async function BlogPage() {
  const blogPosts: BlogPost[] = await client.fetch(blogQuery)

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8'>Blog</h1>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {blogPosts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className='block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
            {post.bild && (
              <img
                src={post.bild}
                alt={post.title}
                className='aspect-[5/3] object-cover'
              />
            )}
            <div className='p-4'>
              <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
              <p className='text-gray-500'>
                {new Date(post.veroeffentlichtAm).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
