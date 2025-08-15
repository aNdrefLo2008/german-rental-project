/** @format */
import {client} from "@/sanity/lib/client"
import {PortableText, PortableTextComponents} from "@portabletext/react"
import {Metadata} from "next"
import Link from "next/link"

interface Props {
  params: {slug: string}
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const data = await client.fetch(
    `*[_type == "legalPage" && slug.current == $slug][0]`,
    {slug: params.slug}
  )

  return {
    title: data?.title ?? "Rechtliche Seite",
    description:
      data?.metaDescription ??
      "Informationen zu unseren rechtlichen Richtlinien."
  }
}

const components: PortableTextComponents = {
  block: {
    h1: ({children}) => (
      <h1 className='text-3xl font-bold mt-6 mb-4'>{children}</h1>
    ),
    h2: ({children}) => (
      <h2 className='text-2xl font-semibold mt-5 mb-3'>{children}</h2>
    ),
    normal: ({children}) => <p className='mb-4 leading-relaxed'>{children}</p>
  },
  list: {
    bullet: ({children}) => (
      <ul className='list-disc list-inside mb-4'>{children}</ul>
    ),
    number: ({children}) => (
      <ol className='list-decimal list-inside mb-4'>{children}</ol>
    )
  },
  marks: {
    link: ({children, value}) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined
      return (
        <Link
          href={value?.href || "#"}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className='text-blue-600 underline hover:text-blue-800'>
          {children}
        </Link>
      )
    }
  }
}

export default async function LegalPage({params}: {params: {slug: string}}) {
  const query = `*[_type == "legalPage" && slug.current == $slug][0]`
  const data = await client.fetch(query, {slug: params.slug})

  if (!data) {
    return <div>Seite nicht gefunden</div>
  }

  return (
    <main className='prose prose-lg mx-5 sm:mx-20 p-6 max-w-7xl'>
      <PortableText value={data.content} components={components} />
      <p className='text-sm mt-8'>
        Zuletzt aktualisiert: {new Date(data.lastUpdated).toLocaleDateString()}
      </p>
    </main>
  )
}
