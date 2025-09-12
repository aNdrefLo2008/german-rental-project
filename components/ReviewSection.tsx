/** @format */
"use client"

import {useState, useMemo} from "react"
import {Button} from "./ui/button"
import {FaGoogle, FaAirbnb} from "react-icons/fa"
import {TbBrandBooking} from "react-icons/tb"
import {motion, AnimatePresence, Variants} from "framer-motion"
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

// Animation variants
const fadeInUp: Variants = {
  hidden: {opacity: 0, y: 30},
  show: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}}
}

const staggerChildren: Variants = {
  hidden: {},
  show: {transition: {staggerChildren: 0.15}}
}

export default function ReviewsSection({
  reviews,
  variant = "full",
  limit
}: ReviewsSectionProps) {
  const [activeSource, setActiveSource] = useState("Airbnb")

  const filteredReviews = useMemo(() => {
    return reviews
      .filter((r) => r.quelle?.toLowerCase() === activeSource.toLowerCase())
      .slice(0, limit ?? reviews.length)
  }, [reviews, activeSource, limit])

  return (
    <div className='mb-16'>
      {variant === "full" ? (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          {/* Sidebar */}
          <motion.div
            className='flex flex-col gap-3 md:col-span-1'
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount: 0.2}}
            variants={staggerChildren}>
            <motion.h3
              variants={fadeInUp}
              className='md:text-3xl text-2xl font-bold md:text-left text-center md:mb-4 mb-0'>
              Bewertungen
            </motion.h3>

            {reviewSources.map((source) => {
              const isActive = activeSource === source.key
              return (
                <motion.div key={source.key} variants={fadeInUp}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={`flex items-center justify-start gap-3 px-4 py-3 w-full rounded-lg border ${
                      isActive ? "bg-muted font-semibold" : ""
                    }`}
                    onClick={() => setActiveSource(source.key)}>
                    <source.icon className={`w-5 h-5 ${source.color}`} />
                    <span>{source.label}</span>
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Reviews */}
          <div className='md:col-span-3'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeSource} // important for remount on filter change
                initial='hidden'
                animate='show'
                exit='hidden'
                variants={staggerChildren}
                className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                {filteredReviews.map((review) => (
                  <motion.div key={review._id} variants={fadeInUp}>
                    <ReviewCard review={review} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        // Sidebar variant
        <div className='space-y-4 max-h-[70vh] overflow-auto pr-1 scrollbar'>
          {filteredReviews.length === 0 && (
            <p className='text-gray-500 text-sm text-center'>
              Keine Bewertungen gefunden.
            </p>
          )}
          {filteredReviews.map((review) => (
            <motion.div
              key={review._id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{duration: 0.5}}>
              <ReviewCard review={review} compact />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

function ReviewCard({review, compact}: {review: Review; compact?: boolean}) {
  const formatDate = (date?: string) => {
    if (!date) return ""
    const d = new Date(date)
    const day = d.toLocaleDateString("de-DE", {day: "numeric"})
    const month = d.toLocaleDateString("de-DE", {month: "long"})
    const year = d.toLocaleDateString("de-DE", {year: "numeric"})
    return `${day}. ${month}, ${year}`
  }

  return (
    <div
      className={`p-6 border rounded-2xl shadow-sm bg-white flex flex-col justify-between ${compact ? "w-full" : "h-full"}`}>
      <p className='text-sm font-semibold bg-gradient-to-r from-[#5378d6] to-[#ff9500] bg-clip-text text-transparent mb-2'>
        {formatDate(review.date)}
      </p>
      <p className='mb-6 leading-relaxed flex-1 font-medium italic'>
        “{review.bewertung}”
      </p>

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
