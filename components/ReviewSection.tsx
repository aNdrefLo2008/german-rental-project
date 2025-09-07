/** @format */
"use client"

import {useState, useMemo} from "react"
import {Button} from "./ui/button"
import {FaGoogle, FaAirbnb} from "react-icons/fa"
import {TbBrandBooking} from "react-icons/tb"
import {motion, AnimatePresence} from "framer-motion"
import Image from "next/image"
import {Check} from "lucide-react"

type Review = {
  _id: string
  name: string
  bewertung: string
  sterne: number
  quelle?: string
  bildUrl?: string
  date?: string
}

type ReviewsSectionProps = {
  reviews: Review[]
  variant?: "full" | "sidebar"
  limit?: number
}

const reviewSources = [
  {
    key: "Airbnb",
    label: "Airbnb Bewertungen",
    icon: FaAirbnb,
    color: "text-pink-500"
  },
  {
    key: "Booking",
    label: "Booking Bewertungen",
    icon: TbBrandBooking,
    color: "text-blue-600"
  },
  {
    key: "Google",
    label: "Google Bewertungen",
    icon: FaGoogle,
    color: "text-red-500"
  }
]

export default function ReviewsSection({
  reviews,
  variant = "full",
  limit
}: ReviewsSectionProps) {
  const [activeSource, setActiveSource] = useState("Airbnb")

  const filteredReviews = useMemo(() => {
    const base = reviews.filter(
      (r) => r.quelle?.toLowerCase() === activeSource.toLowerCase()
    )
    return typeof limit === "number" ? base.slice(0, limit) : base
  }, [reviews, activeSource, limit])

  /*const formatDate = (date?: string) => {
    if (!date) return new Date().toLocaleDateString("de-DE")
    return new Date(date).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }*/

  return (
    <div className='mb-16'>
      {variant === "full" ? (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          {/* Sidebar */}
          <div className='flex flex-col gap-3 md:col-span-1'>
            <h3 className='md:text-3xl text-2xl font-bold md:text-left text-center md:mb-4 mb-0'>
              Bewertungen
            </h3>
            {reviewSources.map((source) => {
              const isActive = activeSource === source.key
              return (
                <Button
                  key={source.key}
                  variant={isActive ? "secondary" : "ghost"}
                  className={`flex items-center justify-start gap-3 px-4 py-3 w-full rounded-lg border ${
                    isActive ? "bg-muted font-semibold" : ""
                  }`}
                  onClick={() => setActiveSource(source.key)}>
                  <source.icon className={`w-5 h-5 ${source.color}`} />
                  <span>{source.label}</span>
                </Button>
              )
            })}
          </div>

          {/* Reviews */}
          <div className='md:col-span-3'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeSource}
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.95}}
                transition={{duration: 0.3}}
                className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                {filteredReviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        // Sidebar-Variante
        <div className='space-y-4 max-h-[70vh] overflow-auto pr-1 scrollbar'>
          {filteredReviews.length === 0 && (
            <p className='text-gray-500 text-sm text-center'>
              Keine Bewertungen gefunden.
            </p>
          )}
          {filteredReviews.map((review) => (
            <ReviewCard key={review._id} review={review} compact />
          ))}
        </div>
      )}
    </div>
  )
}

function ReviewCard({review, compact}: {review: Review; compact?: boolean}) {
  const formatDate = (date?: string) => {
    const d = date ? new Date(date) : new Date()

    const day = d.toLocaleDateString("de-DE", {day: "numeric"})
    const month = d.toLocaleDateString("de-DE", {month: "long"})
    const year = d.toLocaleDateString("de-DE", {year: "numeric"})

    return `${day}. ${month}, ${year}`
  }

  return (
    <div
      className={`p-6 border rounded-2xl shadow-sm bg-white flex flex-col justify-between ${
        compact ? "w-full" : "h-full"
      }`}>
      {/* Datum */}
      <p className='text-sm font-semibold bg-gradient-to-r from-[#5378d6] to-[#ff9500] bg-clip-text text-transparent mb-2'>
        {formatDate(review.date)}
      </p>

      {/* Review Text */}
      <p className='mb-6 leading-relaxed flex-1 font-medium italic'>
        “{review.bewertung}”
      </p>

      {/* Footer */}
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
          <div>
            <p className='font-semibold'>{review.name}</p>
            <p className='text-xs text-gray-500'>{review.quelle}</p>
          </div>
        </div>

        {/* Sterne */}
        <div className='flex items-center gap-1 mb-2'>
          {Array.from({length: 5}, (_, i) => (
            <span
              key={i}
              className={
                i < review.sterne ? "text-yellow-400" : "text-gray-300"
              }>
              ★
            </span>
          ))}
        </div>

        {/* Verifiziert */}
        <span className='inline-flex px-3 py-2 rounded-full bg-emerald-50 items-center gap-2'>
          <div className='bg-emerald-600 rounded-full p-1'>
            <Check className='font-bold h-3 w-3 text-white' />
          </div>
          <span className='text-xs text-emerald-500'>
            Verifizierte {review.quelle} Bewertung
          </span>
        </span>
      </div>
    </div>
  )
}
