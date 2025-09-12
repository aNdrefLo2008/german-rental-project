/** @format */

import {client} from "@/sanity/lib/client"
import {upsellQuery, reviewsQuery} from "@/sanity/lib/queries"
import AboutClient from "./AboutClient"

export default async function About() {
  const upsell = await client.fetch(upsellQuery)
  const reviews = await client.fetch(reviewsQuery)

  return <AboutClient upsell={upsell} reviews={reviews} />
}
