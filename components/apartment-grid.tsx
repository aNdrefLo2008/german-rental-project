/** @format */

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Users, Bed, Bath} from "lucide-react"
import {client} from "@/sanity/lib/client"
import {allApartmentsQuery} from "@/sanity/lib/queries"

/* const apartments = [
  {
    id: "1",
    name: "Modern City Center Apartment",
    image: "/placeholder.svg?height=300&width=400",
    price: "€65",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    features: ["WiFi", "Parking", "Kitchen", "City Center"],
    description: "Stylish 1-bedroom apartment in the heart of Gera."
  },
  {
    id: "2",
    name: "Spacious Family Suite",
    image: "/placeholder.svg?height=300&width=400",
    price: "€95",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    features: ["WiFi", "Parking", "Full Kitchen", "Balcony"],
    description: "Perfect for families with 2 bedrooms and balcony."
  },
  {
    id: "3",
    name: "Business Traveler Studio",
    image: "/placeholder.svg?height=300&width=400",
    price: "€55",
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    features: ["WiFi", "Workspace", "Kitchen", "Quiet"],
    description: "Ideal for business travelers with workspace."
  },
  {
    id: "4",
    name: "Cozy Garden Apartment",
    image: "/placeholder.svg?height=300&width=400",
    price: "€70",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    features: ["WiFi", "Garden View", "Kitchen", "Parking"],
    description: "Peaceful apartment with beautiful garden view."
  },
  {
    id: "5",
    name: "Executive Penthouse",
    image: "/placeholder.svg?height=300&width=400",
    price: "€120",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    features: ["WiFi", "City View", "Luxury", "Parking"],
    description: "Luxury penthouse with stunning city views."
  },
  {
    id: "6",
    name: "Historic District Loft",
    image: "/placeholder.svg?height=300&width=400",
    price: "€80",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    features: ["WiFi", "Historic", "Kitchen", "Character"],
    description: "Charming loft in Gera's historic district."
  },
  {
    id: "7",
    name: "Modern Minimalist Studio",
    image: "/placeholder.svg?height=300&width=400",
    price: "€50",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    features: ["WiFi", "Minimalist", "Kitchen", "Central"],
    description: "Clean, modern studio with minimalist design."
  },
  {
    id: "8",
    name: "Family Comfort Suite",
    image: "/placeholder.svg?height=300&width=400",
    price: "€100",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    features: ["WiFi", "Family-Friendly", "Kitchen", "Parking"],
    description: "Spacious family suite with all amenities."
  }
]
*/

interface ApartmentDetailProps {
  _id: string
  title: string
  preisProNacht: string
  guests: number
  bedrooms: number
  bathrooms: number
  size: string
  slug: string
  beschreibung: string
  images: {asset: {url: string}}[]
  ausstattung: string[]
  features: string[]
}

export async function ApartmentGrid() {
  const apartments = await client.fetch(allApartmentsQuery)

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {apartments.map((apartment: ApartmentDetailProps) => (
        <Card
          key={apartment._id}
          className='overflow-hidden hover:shadow-lg transition-shadow'>
          <CardHeader className='p-0'>
            <div className='aspect-[20/10] relative'>
              <img
                src={apartment.images?.[0]?.asset?.url || "/placeholder.svg"}
                alt={apartment.title}
                className='w-full h-full object-cover'
              />
              <Badge className='absolute top-4 left-4 bg-background/90 text-foreground'>
                €{apartment.preisProNacht}/night
              </Badge>
            </div>
          </CardHeader>

          <CardContent className='px-6'>
            <h3 className='text-xl font-semibold mb-2'>{apartment.title}</h3>
            <p className='text-muted-foreground mb-4'>
              {apartment.beschreibung}
            </p>

            <div className='flex items-center space-x-4 mb-4 text-sm text-muted-foreground'>
              <div className='flex items-center space-x-1'>
                <Users className='h-4 w-4' />
                <span>{apartment.guests}</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Bed className='h-4 w-4' />
                <span>{apartment.bedrooms}</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Bath className='h-4 w-4' />
                <span>{apartment.bathrooms}</span>
              </div>
            </div>

            <div className='flex flex-wrap gap-2'>
              {apartment.features?.slice(0, 3).map((feature: string) => (
                <Badge key={feature} variant='secondary' className='text-xs'>
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className='p-6 pt-0'>
            <Button asChild className='w-full'>
              <Link href={`/apartments/${apartment.slug}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
