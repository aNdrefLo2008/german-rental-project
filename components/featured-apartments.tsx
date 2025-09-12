/** @format */

import {client} from "@/sanity/lib/client"
import {allApartmentsQuery} from "@/sanity/lib/queries"
import FeaturedApartmentsClient from "./FeaturedApartmentsClient"

interface ApartmentDetailProps {
  _id: string
  title: string
  preisProNacht: string
  guests: number
  bedrooms: number
  bathrooms: number
  size: string
  slug: string
  beschreibung: string
  images: {asset: {url: string}}[]
  ausstattung: string[]
  features: string[]
}

export default async function FeaturedApartments() {
  const order = [
    "ferienwohnung-jasmin",
    "ferienwohnung-maria",
    "ferienwohnung-vivien"
  ]

  const featuredApartments = await client.fetch(allApartmentsQuery)

  const sorted = featuredApartments
    .filter((apartment: ApartmentDetailProps) =>
      order.includes(apartment.slug?.toLowerCase())
    )
    .sort(
      (a: ApartmentDetailProps, b: ApartmentDetailProps) =>
        order.indexOf(a.slug?.toLowerCase()) -
        order.indexOf(b.slug?.toLowerCase())
    )

  return <FeaturedApartmentsClient apartments={sorted} />
}
