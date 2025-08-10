/** @format */

import {client} from "@/sanity/lib/client"
import {legalPageQuery} from "@/sanity/lib/queries"
import {PortableText} from "@portabletext/react"
import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "Legal info, imprint, privacy policy, terms and conditions for Gera Apartments"
}

export default async function LegalPage() {
  const legal = await client.fetch(legalPageQuery)

  if (!legal) {
    return <div>Legal information not found</div>
  }

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-6'>{legal.title}</h1>
      <section className='prose max-w-none'>
        <PortableText value={legal.inhalt} />
      </section>
    </main>
  )
}
