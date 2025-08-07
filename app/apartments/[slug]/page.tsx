/** @format */

import {client} from "../../../sanity/lib/client"
import {apartmentQuery} from "../../../sanity/lib/queries"
import {ApartmentDetail} from "@/components/apartment-detail"
import type {Metadata} from "next"

interface Props {
  params: Promise<{slug: string}>
  searchParams?: Promise<{[key: string]: string | string[] | undefined}>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const resolvedParams = await params
  const apartment = await client.fetch(apartmentQuery, {
    slug: resolvedParams.slug
  })

  return {
    title: apartment?.title ?? "Apartment Detail"
  }
}

export default async function ApartmentPage({params}: Props) {
  const resolvedParams = await params

  if (!resolvedParams.slug) throw new Error("Missing slug param!")

  const apartment = await client.fetch(apartmentQuery, {
    slug: resolvedParams.slug
  })

  if (!apartment) {
    return <div>Apartment not found</div>
  }

  return <ApartmentDetail apartment={apartment} />
}
