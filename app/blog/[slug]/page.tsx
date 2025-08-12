/** @format */

import {client} from "@/sanity/lib/client"
import {singleBlogPostQuery} from "@/sanity/lib/queries"
import {PortableText} from "@portabletext/react"
import type {Metadata} from "next"
import Link from "next/link"
import {ArrowLeft} from "lucide-react"

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

interface Props {
  params: Promise<{slug: string}>
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params
  const post: BlogPost | null = await client.fetch(singleBlogPostQuery, {slug})

  return {
    title: post?.title ?? "Blog Post"
  }
}

export default async function BlogPostPage({params}: Props) {
  const {slug} = await params

  if (!slug) throw new Error("Missing slug param!")

  const post: BlogPost | null = await client.fetch(singleBlogPostQuery, {slug})

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='flex lg:flex-row flex-col'>
        <article>
          <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
          <p className='text-gray-500 mb-6'>
            {new Date(post.veroeffentlichtAm).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "long",
              year: "numeric"
            })}
          </p>
          <section className='prose max-w-none mb-12'>
            <PortableText value={post.inhalt} />
          </section>
        </article>

        {post.bild && (
          <img
            src={post.bild}
            alt={post.title}
            className='aspect-[5/4] object-cover rounded mb-6'
          />
        )}
      </div>

      <div className='mt-8'>
        <Link
          href='/blog'
          className='text-gray-900 flex justify-start items-center gap-3 hover:text-gray-500 transition-colors duration-300'>
          <ArrowLeft className='w-4 h-4' />
          <span>Back to blog</span>
        </Link>
      </div>
    </main>
  )
}
