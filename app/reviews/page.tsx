/** @format */

import ReviewsSection from "@/components/ReviewSection"
import {Button} from "@/components/ui/button"
import {client} from "@/sanity/lib/client"
import {reviewsQuery} from "@/sanity/lib/queries"
import {ArrowLeft} from "lucide-react"
import Link from "next/link"

export default async function ReviewsPage() {
  const reviews = await client.fetch(reviewsQuery)

  return (
    <main className='container mx-auto px-4 py-8'>
      <Button variant='ghost' asChild className='mb-10'>
        <Link href='/'>
          <ArrowLeft className='h-4 w-4 mr-2' />
          Zurück zur Startseite
        </Link>
      </Button>

      <ReviewsSection reviews={reviews} />
    </main>
  )
}
