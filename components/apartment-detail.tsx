/** @format */

"use client"

import {useState} from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {
  ArrowLeft,
  Users,
  Bed,
  Bath,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Tv,
  Utensils
} from "lucide-react"
import {BookingIframe} from "./BookingIframe"

interface ApartmentDetailProps {
  apartment: {
    _id: string
    title: string
    preisProNacht: string
    guests: number
    bedrooms: number
    bathrooms: number
    size: string
    beschreibung: string
    images: {asset: {url: string}}[]
    ausstattung: string[]
    features: string[]
  }
}

const iconMap: Record<string, any> = {
  "Free WiFi": Wifi,
  "Free Parking": Car,
  "Coffee Machine": Coffee,
  "Smart TV": Tv,
  "Full Kitchen": Utensils
}

// Optional: You can move this into its own `lib/smoobu.ts`
const bookingIframes: Record<string, {id: string; url: string}> = {
  "1": {
    id: "apartmentIframe1948151",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/1948151"
  },
  "2": {
    id: "apartmentIframe2063383",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/2063383"
  },
  "3": {
    id: "apartmentIframeAll",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000"
  },
  "4": {
    id: "apartmentIframeAll",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000"
  },
  "5": {
    id: "apartmentIframe1032568",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/1032568"
  },
  "6": {
    id: "apartmentIframe2355838",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/2355838"
  },
  "7": {
    id: "apartmentIframe2750553",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/2750553"
  },
  any: {
    id: "apartmentIframeAll",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000"
  }
}

export function ApartmentDetail({apartment}: ApartmentDetailProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const iframe = bookingIframes[apartment._id] ?? bookingIframes["any"]

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-6'>
        <Button variant='ghost' asChild className='mb-4'>
          <Link href='/apartments'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Back to Apartments
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
                <span>Gera, Germany</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Users className='h-4 w-4' />
                <span>{apartment.guests} guests</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Bed className='h-4 w-4' />
                <span>{apartment.bedrooms} bedroom</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Bath className='h-4 w-4' />
                <span>{apartment.bathrooms} bathroom</span>
              </div>
            </div>
          </div>

          <div className='text-right'>
            <div className='text-3xl font-bold text-primary'>
              {apartment.preisProNacht}
            </div>
            <div className='text-sm text-muted-foreground'>per night</div>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          {/* Image Gallery */}
          <div className='mb-8'>
            <div className='aspect-[16/10] rounded-lg overflow-hidden mb-4'>
              <img
                src={
                  apartment.images?.[currentImage]?.asset?.url ||
                  "/placeholder.svg"
                }
                alt={`${apartment.title} - Image ${currentImage + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='grid grid-cols-4 gap-2'>
              {apartment.images.map((image, index) => (
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
                    alt={`Thumbnail ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              About this apartment
            </h2>
            <p className='text-muted-foreground leading-relaxed'>
              {apartment.beschreibung}
            </p>
          </div>

          {/* Amenities */}
          <div className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>Amenities</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {(apartment.ausstattung ?? []).map((amenity, index) => {
                const Icon = iconMap[amenity] || Wifi
                return (
                  <div key={index} className='flex items-center space-x-3'>
                    <Icon className='h-5 w-5 text-primary' />
                    <span>{amenity}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className='text-2xl font-semibold mb-4'>
              What this place offers
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              {(apartment.features || []).map((feature, index) => (
                <div key={index} className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-primary rounded-full' />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking iframe */}
        <div className='lg:col-span-1 flex flex-col gap-6'>
          <div className='rounded-xl overflow-hidden shadow-sm border'>
            <BookingIframe id={iframe.id} url={iframe.url} />
          </div>
        </div>
      </div>
    </div>
  )
}
