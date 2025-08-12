/** @format */

import Reviews from "@/components/reviews"
import {client} from "@/sanity/lib/client"
import {reviewsQuery} from "@/sanity/lib/queries"

export default async function ReviewsPage() {
  const reviews = await client.fetch(reviewsQuery)

  return (
    <main className='container mx-auto px-4 py-8 '>
      <h1 className='text-3xl font-bold mb-8'>Kundenbewertungen</h1>
      <Reviews reviews={reviews} />
    </main>
  )
}
