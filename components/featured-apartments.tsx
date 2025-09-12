/** @format */

import {client} from "@/sanity/lib/client"
import {allApartmentsQuery} from "@/sanity/lib/queries"
import FeaturedApartmentsClient from "./FeaturedApartmentsClient"

export default async function FeaturedApartments() {
  const order = [
    "ferienwohnung-jasmin",
    "ferienwohnung-maria",
    "ferienwohnung-vivien"
  ]

  const featuredApartments = await client.fetch(allApartmentsQuery)

  const sorted = featuredApartments
    .filter((apartment: any) => order.includes(apartment.slug?.toLowerCase()))
    .sort(
      (a: any, b: any) =>
        order.indexOf(a.slug?.toLowerCase()) -
        order.indexOf(b.slug?.toLowerCase())
    )

  return <FeaturedApartmentsClient apartments={sorted} />
}
