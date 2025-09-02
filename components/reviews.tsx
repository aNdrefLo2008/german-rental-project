/** @format */

"use client"

import Image from "next/image"
import React, {useMemo, useState} from "react"

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
  variant?: "full" | "sidebar"
  limit?: number
}

const SOURCES = ["all", "booking", "airbnb", "google"] as const

export default function Reviews({
  reviews,
  variant = "full",
  limit
}: ReviewsProps) {
  const [filter, setFilter] = useState<(typeof SOURCES)[number]>("all")

  const filtered = useMemo(() => {
    const base =
      filter === "all"
        ? reviews
        : reviews.filter(
            (r) => r.quelle?.toLowerCase() === filter.toLowerCase()
          )
    return typeof limit === "number" ? base.slice(0, limit) : base
  }, [reviews, filter, limit])

  const total = reviews.length

  return (
    <>
      {/* Header (compact for sidebar) */}
      {variant === "sidebar" ? (
        <div className='mb-4 flex items-center justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'></h2>
            <p className='text-sm text-gray-500'>{total} Bewertungen</p>
          </div>
        </div>
      ) : (
        <div className='mb-6'>
          <div className='mb-2'>
            <p className='text-sm text-gray-500'>{total} Bewertungen</p>
          </div>
          {/* Filters only on full variant */}
          <div className='flex flex-wrap justify-center gap-3'>
            {SOURCES.map((source) => (
              <button
                key={source}
                onClick={() => setFilter(source)}
                className={`px-4 py-2 rounded-lg font-semibold transition
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
        </div>
      )}

      {/* Grid/list */}
      {variant === "sidebar" ? (
        // Sidebar: one column, scrollable if tall
        <div className='space-y-4 max-h-[70vh] overflow-auto pr-1 scrollbar'>
          {filtered.length === 0 && (
            <p className='col-span-full text-center text-gray-500'>
              Keine Bewertungen gefunden.
            </p>
          )}
          {filtered.map((review) => (
            <div
              key={review._id}
              className='p-6 border rounded-2xl shadow-sm bg-white w-full flex flex-col justify-between'>
              {/* Datum (optional: falls du ein Feld für Datum hast) */}
              {/* review.datum && (
                <p className='text-xs text-indigo-600 font-medium mb-3'>
                  {new Date(review.datum).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </p>
              )*/}

              {/* Text */}
              <p className='text-gray-700 italic mb-6 leading-relaxed'>
                “{review.bewertung}”
              </p>

              {/* Footer mit Avatar + Info */}
              <div className='mt-auto'>
                <div className='flex items-center mb-3'>
                  {review.bildUrl ? (
                    <Image
                      src={review.bildUrl}
                      alt={review.name}
                      width={40}
                      height={40}
                      className='rounded-full mr-3'
                    />
                  ) : (
                    <div className='w-10 h-10 rounded-full bg-gray-300 mr-3' />
                  )}
                  <div className='flex flex-col justify-between items-start gap-1'>
                    <p className='font-semibold leading-tight'>{review.name}</p>
                    <p className='text-xs text-gray-500'>{review.quelle}</p>
                  </div>
                </div>

                {/* Sterne */}
                <div className='flex items-center gap-1 text-yellow-400 text-sm mb-1'>
                  {"★".repeat(review.sterne)}
                  <span className='text-gray-300'>
                    {"☆".repeat(5 - review.sterne)}
                  </span>
                </div>

                {/* Verifiziert Label */}
                <p className='text-xs text-emerald-600 font-medium'>
                  ✅ Verifizierte {review.quelle} Bewertung
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Full-width page: responsive grid that scales nicely
        <div
          className='
            grid gap-6 mt-6
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
          '>
          {filtered.length === 0 && (
            <p className='col-span-full text-center text-gray-500'>
              Keine Bewertungen gefunden.
            </p>
          )}
          {filtered.map((review) => (
            <div
              key={review._id}
              className='p-6 border rounded-2xl shadow-sm bg-white w-full flex flex-col justify-between'>
              {/* Datum (optional: falls du ein Feld für Datum hast) */}
              {/*review.datum && (
                <p className='text-xs text-indigo-600 font-medium mb-3'>
                  {new Date(review.datum).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </p>
              )*/}

              {/* Text */}
              <p className='text-gray-700 italic mb-6 leading-relaxed'>
                “{review.bewertung}”
              </p>

              {/* Footer mit Avatar + Info */}
              <div className='mt-auto'>
                <div className='flex items-center mb-3'>
                  {review.bildUrl ? (
                    <Image
                      src={review.bildUrl}
                      alt={review.name}
                      width={40}
                      height={40}
                      className='rounded-full mr-3'
                    />
                  ) : (
                    <div className='w-10 h-10 rounded-full bg-gray-300 mr-3' />
                  )}
                  <div className='flex flex-col justify-between items-start gap-1'>
                    <p className='font-semibold leading-tight'>{review.name}</p>
                    <p className='text-xs text-gray-500'>{review.quelle}</p>
                  </div>
                </div>

                {/* Sterne */}
                <div className='flex items-center gap-1 text-yellow-400 text-sm mb-1'>
                  {"★".repeat(review.sterne)}
                  <span className='text-gray-300'>
                    {"☆".repeat(5 - review.sterne)}
                  </span>
                </div>

                {/* Verifiziert Label */}
                <p className='bg-emerald-50 p-2 rounded-full text-xs text-emerald-600 font-medium'>
                  ✅ Verifizierte {review.quelle} Bewertung
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
