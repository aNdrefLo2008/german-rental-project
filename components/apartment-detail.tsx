/** @format */
"use client"

import {useState} from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {ArrowLeft, ArrowRight, Users, Bed, Bath, MapPin, X} from "lucide-react"
import {BookingIframe} from "./BookingIframe"
import Image from "next/image"
import {motion, Variants} from "framer-motion"

interface ApartmentDetailProps {
  apartment: {
    _id: string
    title: string
    preisProNacht: number
    guests: number
    bedrooms: number
    bathrooms: number
    size: number
    beschreibung: string
    images: {asset: {url: string}}[]
    ausstattung: string[]
    verfuegbarkeitIframe: string
    lageKarte?: string
    metaDescription?: string
    features?: string[]
  }
}

// Animations
const fadeInUp: Variants = {
  hidden: {opacity: 0, y: 40},
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {duration: 0.6, ease: "easeOut", delay: i * 0.2}
  })
}

const scaleFade: Variants = {
  hidden: {opacity: 0, scale: 0.95},
  show: {
    opacity: 1,
    scale: 1,
    transition: {duration: 0.6, ease: "easeOut"}
  }
}

export function ApartmentDetail({apartment}: ApartmentDetailProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const prevImage = () => {
    if (selectedImage === null) return
    setSelectedImage(
      selectedImage === 0 ? apartment.images.length - 1 : selectedImage - 1
    )
  }

  const nextImage = () => {
    if (selectedImage === null) return
    setSelectedImage(
      selectedImage === apartment.images.length - 1 ? 0 : selectedImage + 1
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Back Button and Header */}
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        animate='show'
        custom={0}
        className='mb-6'>
        <Button variant='ghost' asChild className='mb-4'>
          <Link href='/apartments'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Zurück zu den Wohnungen
          </Link>
        </Button>

        <motion.div
          variants={fadeInUp}
          initial='hidden'
          animate='show'
          custom={1}
          className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>
              {apartment.title}
            </h1>
            <div className='flex flex-wrap gap-4 text-muted-foreground'>
              <div className='flex items-center space-x-1 w-auto'>
                <MapPin className='h-4 w-4' />
                <span>Gera, Deutschland</span>
              </div>
              <div className='flex items-center space-x-1 w-auto'>
                <Users className='h-4 w-4' />
                <span>{apartment.guests} Gäste</span>
              </div>
              <div className='flex items-center space-x-1 w-auto'>
                <Bed className='h-4 w-4' />
                <span>{apartment.bedrooms} Schlafzimmer</span>
              </div>
              <div className='flex items-center space-x-1 w-auto'>
                <Bath className='h-4 w-4' />
                <span>{apartment.bathrooms} Badezimmer</span>
              </div>
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial='hidden'
            animate='show'
            custom={2}
            className='text-right'>
            <div className='flex gap-2 justify-end items-center'>
              <div className='text-3xl font-bold text-primary'>
                Ab €{apartment.preisProNacht}
              </div>
            </div>
            <div className='text-sm text-muted-foreground'>pro Nacht</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Left: Content */}
        <div className='md:col-span-2'>
          {/* Large Image */}
          <motion.div
            variants={scaleFade}
            initial='hidden'
            animate='show'
            className='mb-8'>
            <div className='aspect-[16/10] rounded-lg overflow-hidden mb-4'>
              <Image
                width={728}
                height={408}
                src={
                  apartment.images?.[currentImage]?.asset?.url ||
                  "/placeholder.svg"
                }
                alt={`${apartment.title} - Bild ${currentImage + 1}`}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Thumbnails */}
            <div className='grid grid-cols-4 gap-2 mb-8'>
              {apartment.images?.slice(0, 4).map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  variants={fadeInUp}
                  initial='hidden'
                  animate='show'
                  custom={index}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    currentImage === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}>
                  <Image
                    width={728}
                    height={408}
                    src={image.asset.url}
                    alt={`Vorschaubild ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </motion.button>
              ))}
            </div>

            {/* Description */}
            <motion.div
              variants={fadeInUp}
              initial='hidden'
              animate='show'
              custom={1}
              className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>Beschreibung</h2>
              <p className='text-muted-foreground leading-relaxed'>
                {apartment.beschreibung}
              </p>
            </motion.div>

            {/* Ausstattung */}
            <motion.div
              variants={fadeInUp}
              initial='hidden'
              animate='show'
              custom={2}
              className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>Ausstattung</h2>
              <div className='flex flex-wrap gap-2'>
                {(apartment.ausstattung ?? []).map((item, idx) => (
                  <span
                    key={idx}
                    className='inline-block bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground'>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Galerie */}
          <motion.div
            variants={fadeInUp}
            initial='hidden'
            animate='show'
            custom={3}>
            <h2 className='text-2xl font-semibold mb-4 mt-6'>Galerie</h2>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-4 justify-center'>
              {apartment.images?.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  variants={fadeInUp}
                  initial='hidden'
                  animate='show'
                  custom={index}
                  className='max-w-60 aspect-square rounded-md overflow-hidden border border-gray-300 hover:border-primary transition-colors'>
                  <Image
                    width={728}
                    height={408}
                    src={image.asset.url}
                    alt={`Galerie Bild ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0}}
              className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
              <button
                className='absolute top-4 right-4 text-white p-2 cursor-pointer'
                onClick={() => setSelectedImage(null)}>
                <X className='w-8 h-8' />
              </button>

              <button
                className='absolute left-4 text-white p-2 cursor-pointer'
                onClick={prevImage}>
                <ArrowLeft className='w-10 h-10' />
              </button>

              <Image
                width={728}
                height={408}
                src={apartment.images[selectedImage].asset.url}
                alt={`Galerie Bild ${selectedImage + 1}`}
                className='max-h-full max-w-full object-contain rounded-2xl'
              />

              <button
                className='absolute right-4 text-white p-2 cursor-pointer'
                onClick={nextImage}>
                <ArrowRight className='w-10 h-10' />
              </button>
            </motion.div>
          )}

          {/* Lagekarte */}
          {apartment.lageKarte && (
            <motion.div
              variants={fadeInUp}
              initial='hidden'
              animate='show'
              custom={4}
              className='mt-12'>
              <h2 className='text-2xl font-semibold mb-4'>Lage</h2>
              <div className='rounded-xl overflow-hidden shadow border aspect-[16/9]'>
                <iframe
                  src={apartment.lageKarte}
                  width='100%'
                  height='100%'
                  style={{border: 0}}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'></iframe>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right: Booking */}
        <motion.div
          variants={fadeInUp}
          initial='hidden'
          animate='show'
          custom={5}
          className='flex flex-col gap-6'>
          <div className='rounded-xl overflow-hidden shadow-sm border'>
            <BookingIframe
              id={apartment._id}
              url={apartment.verfuegbarkeitIframe}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
