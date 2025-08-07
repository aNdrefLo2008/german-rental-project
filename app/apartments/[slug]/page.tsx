/** @format */

import {client} from "../../../sanity/lib/client"
import {apartmentQuery} from "../../../sanity/lib/queries"
import {ApartmentDetail} from "@/components/apartment-detail"
import type {Metadata} from "next"

interface Props {
  params: {slug: string}
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const apartment = await client.fetch(apartmentQuery, {slug: params.slug})

  return {
    title: apartment?.title ?? "Apartment Detail"
  }
}

export default async function ApartmentPage({params}: Props) {
  if (!params.slug) throw new Error("Missing slug param!")

  console.log(params)
  const apartment = await client.fetch(apartmentQuery, {slug: params.slug})

  if (!apartment) {
    return <div>Apartment not found</div>
  }

  return <ApartmentDetail apartment={apartment} />
}
