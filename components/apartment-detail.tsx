/** @format */

"use client"

import {useState} from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"
/*import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Separator} from "@/components/ui/separator"*/
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
  apartmentId: string
}

const bookingIframes: Record<string, {id: string; url: string}> = {
  // Celine
  "1": {
    id: "apartmentIframe1948151",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/1948151"
  },

  // Denisa
  "2": {
    id: "apartmentIframe2063383",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/2063383"
  },

  // Jasmin
  "3": {
    id: "apartmentIframeAll",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000"
  },

  // Laura
  "4": {
    id: "apartmentIframeAll",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000"
  },

  // Maria
  "5": {
    id: "apartmentIframe1032568",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/1032568"
  },

  // Vivien
  "6": {
    id: "apartmentIframe2355838",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/2355838"
  },

  // Lisa
  "7": {
    id: "apartmentIframe2750553",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000/2750553"
  },

  // Fallback or general apartment (optional, for any others)
  any: {
    id: "apartmentIframeAll",
    url: "https://login.smoobu.com/de/booking-tool/iframe/324000"
  }
}

const apartmentData = {
  "1": {
    name: "Modern City Center Apartment",
    price: "€65",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    size: "45m²",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ],
    description:
      "This stylish 1-bedroom apartment is located in the heart of Gera, offering modern amenities and easy access to the city's main attractions. Perfect for couples or business travelers.",
    amenities: [
      {icon: Wifi, label: "Free WiFi"},
      {icon: Car, label: "Free Parking"},
      {icon: Coffee, label: "Coffee Machine"},
      {icon: Tv, label: "Smart TV"},
      {icon: Utensils, label: "Full Kitchen"}
    ],
    features: [
      "Air conditioning",
      "Heating",
      "Washing machine",
      "Dishwasher",
      "Hair dryer",
      "Iron & ironing board",
      "Bed linen & towels",
      "City center location"
    ]
  }
}

export function ApartmentDetail({apartmentId}: ApartmentDetailProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const apartment =
    apartmentData[apartmentId as keyof typeof apartmentData] ||
    apartmentData["1"]

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
              {apartment.name}
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
              {apartment.price}
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
                src={apartment.images[currentImage] || "/placeholder.svg"}
                alt={`${apartment.name} - Image ${currentImage + 1}`}
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
                    src={image || "/placeholder.svg"}
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
              {apartment.description}
            </p>
          </div>

          {/* Amenities */}
          <div className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>Amenities</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {apartment.amenities.map((amenity, index) => (
                <div key={index} className='flex items-center space-x-3'>
                  <amenity.icon className='h-5 w-5 text-primary' />
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className='text-2xl font-semibold mb-4'>
              What this place offers
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              {apartment.features.map((feature, index) => (
                <div key={index} className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-primary rounded-full' />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='lg:col-span-1 flex flex-col gap-6'>
          {/* Booking Iframe (Smoobu) */}
          {bookingIframes[apartmentId] && (
            <div className='rounded-xl overflow-hidden shadow-sm border'>
              <BookingIframe
                id={bookingIframes[apartmentId].id}
                url={bookingIframes[apartmentId].url}
              />
            </div>
          )}

          {/* Booking Summary Card */}
          {/*<Card className='sticky top-8 py-6'>
            <CardHeader>
              <CardTitle className='flex items-center justify-between'>
                <span>{apartment.price} per night</span>
                <Badge variant='secondary'>{apartment.size}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div>
                  <div className='font-medium'>Guests</div>
                  <div className='text-muted-foreground'>
                    {apartment.guests} maximum
                  </div>
                </div>
                <div>
                  <div className='font-medium'>Bedrooms</div>
                  <div className='text-muted-foreground'>
                    {apartment.bedrooms} bedroom
                  </div>
                </div>
                <div>
                  <div className='font-medium'>Bathrooms</div>
                  <div className='text-muted-foreground'>
                    {apartment.bathrooms} bathroom
                  </div>
                </div>
                <div>
                  <div className='font-medium'>Size</div>
                  <div className='text-muted-foreground'>{apartment.size}</div>
                </div>
              </div>

              <Separator />

              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span>{apartment.price} × 3 nights</span>
                  <span>€195</span>
                </div>
                <div className='flex justify-between'>
                  <span>Cleaning fee</span>
                  <span>€25</span>
                </div>
                <div className='flex justify-between'>
                  <span>Service fee</span>
                  <span>€15</span>
                </div>
                <Separator />
                <div className='flex justify-between font-semibold'>
                  <span>Total</span>
                  <span>€235</span>
                </div>
              </div>

              <Button className='w-full' size='lg' asChild>
                <Link href='/contact'>Book Now</Link>
              </Button>

              <p className='text-xs text-muted-foreground text-center'>
                You won't be charged yet
              </p>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  )
}
