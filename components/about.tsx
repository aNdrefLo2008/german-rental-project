/** @format */

import {client} from "@/sanity/lib/client"
import {reviewsQuery} from "@/sanity/lib/queries"
import AboutClient from "./AboutClient"

export default async function About() {
  const reviews = await client.fetch(reviewsQuery)

  return <AboutClient reviews={reviews} />
}
