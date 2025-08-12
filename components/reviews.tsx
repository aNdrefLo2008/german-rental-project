/** @format */

"use client" // needed in Next.js 13+ if inside app directory

import React, {useState} from "react"

type Review = {
  _id: string
  name: string
  bewertung: string
  sterne: number
  quelle?: string
  bildUrl?: string
}

type ReviewsProps = {
  reviews: Review[]
}

const SOURCES = ["all", "booking", "airbnb", "google"] as const

export default function Reviews({reviews}: ReviewsProps) {
  const [filter, setFilter] = useState<(typeof SOURCES)[number]>("all")

  // Filter reviews by selected source, ignoring case for robustness
  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((r) => r.quelle?.toLowerCase() === filter.toLowerCase())

  return (
    <>
      <div className='flex justify-center space-x-4 mb-8'>
        {SOURCES.map((source) => (
          <button
            key={source}
            onClick={() => setFilter(source)}
            className={`px-4 py-2 rounded-lg font-semibold
              ${
                filter === source
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}>
            {source === "all"
              ? "Alle"
              : source.charAt(0).toUpperCase() + source.slice(1)}
          </button>
        ))}
      </div>

      <div
        className='
        grid gap-6 m-6
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center
      '>
        {filteredReviews.length === 0 && (
          <p className='col-span-full text-center text-gray-500'>
            Keine Bewertungen gefunden.
          </p>
        )}

        {filteredReviews.map((review) => (
          <div
            key={review._id}
            className='p-4 border rounded-lg shadow-sm bg-white max-w-80 mx-auto'>
            <div className='flex items-center mb-2'>
              {review.bildUrl ? (
                <img
                  src={review.bildUrl}
                  alt={review.name}
                  width={40}
                  height={40}
                  className='rounded-full mr-3'
                />
              ) : (
                <div className='w-10 h-10 rounded-full bg-gray-300 mr-3' />
              )}
              <div>
                <p className='font-semibold'>{review.name}</p>
                <p className='text-sm text-gray-500'>{review.quelle}</p>
              </div>
            </div>

            <div className='flex mb-2 text-yellow-400'>
              {"★".repeat(review.sterne)}
              <span className='text-gray-300'>
                {"☆".repeat(5 - review.sterne)}
              </span>
            </div>

            <p className='text-gray-700'>{review.bewertung}</p>
          </div>
        ))}
      </div>
    </>
  )
}
