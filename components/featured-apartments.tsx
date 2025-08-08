/** @format */

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {MapPin, Users} from "lucide-react"
import {client} from "@/sanity/lib/client"
import {allApartmentsQuery} from "@/sanity/lib/queries"

/* const featuredApartments = [
  {
    id: "1",
    name: "Modern City Center Apartment",
    image: "/placeholder.svg?height=300&width=400",
    price: "€65",
    guests: 2,
    features: ["WiFi", "Parking", "Kitchen", "City Center"],
    description:
      "Stylish 1-bedroom apartment in the heart of Gera with modern amenities."
  },
  {
    id: "2",
    name: "Spacious Family Suite",
    image: "/placeholder.svg?height=300&width=400",
    price: "€95",
    guests: 4,
    features: ["WiFi", "Parking", "Full Kitchen", "2 Bedrooms"],
    description:
      "Perfect for families with 2 bedrooms and a fully equipped kitchen."
  },
  {
    id: "3",
    name: "Business Traveler Studio",
    image: "/placeholder.svg?height=300&width=400",
    price: "€55",
    guests: 1,
    features: ["WiFi", "Workspace", "Kitchen", "Quiet Area"],
    description:
      "Ideal for business travelers with dedicated workspace and quiet location."
  }
] */

export async function FeaturedApartments() {
  const featuredApartments = await client.fetch(allApartmentsQuery)

  return (
    <section className='py-16 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Featured Apartments
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Discover our most popular apartments, each carefully designed for
            comfort and convenience
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {featuredApartments.slice(0, 3).map((apartment: any) => (
            <Card
              key={apartment._id}
              className='overflow-hidden hover:shadow-lg transition-shadow'>
              <CardHeader className='p-0'>
                <div className='aspect-[20/10] relative'>
                  <img
                    src={
                      apartment.images?.[0]?.asset?.url || "/placeholder.svg"
                    }
                    alt={apartment.title}
                    className='w-full h-full object-cover'
                  />
                  <Badge className='absolute top-4 left-4 bg-background/90 text-foreground'>
                    €{apartment.preisProNacht}/night
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className='px-6'>
                <h3 className='text-xl font-semibold mb-2'>
                  {apartment.title}
                </h3>
                <p className='text-muted-foreground mb-4'>
                  {apartment.beschreibung}
                </p>

                <div className='flex items-center space-x-4 mb-4'>
                  <div className='flex items-center space-x-1'>
                    <Users className='h-4 w-4 text-muted-foreground' />
                    <span className='text-sm'>{apartment.guests} guests</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <MapPin className='h-4 w-4 text-muted-foreground' />
                    <span className='text-sm'>Gera</span>
                  </div>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {apartment.features.slice(0, 3).map((feature: any) => (
                    <Badge
                      key={feature}
                      variant='secondary'
                      className='text-xs'>
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className='p-6 pt-0'>
                <Button asChild className='w-full'>
                  <Link href={`/apartments/${apartment.slug}`}>
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className='text-center'>
          <Button size='lg' variant='outline' asChild>
            <Link href='/apartments'>View All Apartments</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
