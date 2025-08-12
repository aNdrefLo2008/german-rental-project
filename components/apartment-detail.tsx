/** @format */

"use client"

import {useState} from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {ArrowLeft, Users, Bed, Bath, MapPin} from "lucide-react"
import {BookingIframe} from "./BookingIframe"

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

export function ApartmentDetail({apartment}: ApartmentDetailProps) {
  const [currentImage, setCurrentImage] = useState(0)

  console.log(apartment.verfuegbarkeitIframe)

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-6'>
        <Button variant='ghost' asChild className='mb-4'>
          <Link href='/apartments'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Zurück zu den Wohnungen
          </Link>
        </Button>

        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold mb-2'>
              {apartment.title}
            </h1>
            <div className='flex items-center space-x-4 text-muted-foreground'>
              <div className='flex items-center space-x-1'>
                <MapPin className='h-4 w-4' />
                <span>Gera, Deutschland</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Users className='h-4 w-4' />
                <span>{apartment.guests} Gäste</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Bed className='h-4 w-4' />
                <span>{apartment.bedrooms} Schlafzimmer</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Bath className='h-4 w-4' />
                <span>{apartment.bathrooms} Badezimmer</span>
              </div>
            </div>
          </div>

          <div className='text-right'>
            <div className='text-3xl font-bold text-primary'>
              €{apartment.preisProNacht}
            </div>
            <div className='text-sm text-muted-foreground'>pro Nacht</div>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          {/* Große Bildvorschau */}
          <div className='mb-8'>
            <div className='aspect-[16/10] rounded-lg overflow-hidden mb-4'>
              <img
                src={
                  apartment.images?.[currentImage]?.asset?.url ||
                  "/placeholder.svg"
                }
                alt={`${apartment.title} - Bild ${currentImage + 1}`}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Kleine Thumbnails mit slice(0,4) */}
            <div className='grid grid-cols-4 gap-2 mb-8'>
              {apartment.images?.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    currentImage === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}>
                  <img
                    src={image.asset.url}
                    alt={`Vorschaubild ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </button>
              ))}
            </div>

            {/* Beschreibung */}
            <div className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>Beschreibung</h2>
              <p className='text-muted-foreground leading-relaxed'>
                {apartment.beschreibung}
              </p>
            </div>

            {/* Ausstattung */}
            <div className='mb-8'>
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
            </div>
          </div>

          {/* Buchungsiframe */}
          <div className='lg:col-span-1 flex flex-col gap-6'>
            <div className='rounded-xl overflow-hidden shadow-sm border'>
              <BookingIframe
                id={apartment._id}
                url={apartment.verfuegbarkeitIframe}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Galerie mit allen Bildern */}
      <div>
        <h2 className='text-2xl font-semibold mb-4'>Galerie</h2>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
          {apartment.images?.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className='aspect-square rounded-md overflow-hidden border border-gray-300 hover:border-primary transition-colors'>
              <img
                src={image.asset.url}
                alt={`Galerie Bild ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
