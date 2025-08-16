/** @format */

import Link from "next/link"
import {BookingIframe} from "@/components/BookingIframe"
import Reviews from "@/components/reviews"
import {client} from "@/sanity/lib/client"
import {reviewsQuery} from "@/sanity/lib/queries"

export default async function BookingPage() {
  const reviews = await client.fetch(reviewsQuery)

  return (
    <main className='container mx-auto px-4 py-12'>
      {/* Back Button */}
      <div className='mb-6'>
        <Link
          href='/'
          className='inline-block rounded-lg border text-black p-3 shadow text-sm hover:bg-gray-50 transition duration-200'>
          Zurück zur Startseite
        </Link>
      </div>

      <h1 className='text-3xl font-bold mb-6'>Jetzt buchen</h1>
      <p className='mb-8 text-gray-600'>
        Nutzen Sie unser Buchungstool, um Ihre Ferienwohnung in Gera direkt
        online zu reservieren.
      </p>

      {/* Layout: Booking left, Reviews right */}
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='w-full lg:flex-[2] border rounded-2xl shadow-lg overflow-hidden inline-block'>
          <BookingIframe
            id='booking-iframe'
            url='https://login.smoobu.com/de/booking-tool/iframe/324000'
          />
        </div>

        {/* Reviews (compact sidebar variant) */}
        <aside className='w-full lg:flex-[1] lg:max-w-xl'>
          <div className='border rounded-2xl shadow-md p-4'>
            <Reviews reviews={reviews} variant='sidebar' limit={18} />
          </div>
        </aside>
      </div>
    </main>
  )
}
