/** @format */

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Users, Bed, Bath} from "lucide-react"
import {client} from "@/sanity/lib/client"
import {allApartmentsQuery} from "@/sanity/lib/queries"
import Image from "next/image"

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

function shortenDescription(desc: string, maxLength = 150): string {
  if (!desc) return ""
  const firstPeriodIndex = desc.indexOf(".")
  if (firstPeriodIndex !== -1 && firstPeriodIndex < maxLength) {
    return desc.slice(0, firstPeriodIndex + 1)
  }
  // fallback: trim to maxLength
  return desc.length > maxLength ? desc.slice(0, maxLength) + "…" : desc
}

export async function ApartmentGrid() {
  const apartments: ApartmentDetailProps[] =
    await client.fetch(allApartmentsQuery)

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {apartments.map((apartment: ApartmentDetailProps) => (
        <Card
          key={apartment._id}
          className='overflow-hidden hover:shadow-lg transition-shadow'>
          <CardHeader className='p-0'>
            <div className='aspect-[2/1] relative'>
              <Image
                fill
                src={apartment.images?.[0]?.asset?.url ?? "/placeholder.svg"}
                alt={apartment.title}
                className='w-full h-full object-cover'
              />
              <Badge className='absolute top-4 left-4 bg-background/90 text-foreground'>
                Ab €{apartment.preisProNacht}/night
              </Badge>
            </div>
          </CardHeader>

          <CardContent className='px-6'>
            <h3 className='text-xl font-semibold mb-2'>{apartment.title}</h3>
            <p className='text-muted-foreground mb-4'>
              {shortenDescription(apartment.beschreibung)}
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
              {apartment.ausstattung?.slice(0, 3).map((item: string) => (
                <Badge key={item} variant='secondary' className='text-xs'>
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className='p-6 pt-0'>
            <Button asChild className='w-full'>
              <Link href={`/apartments/${apartment.slug}`}>
                Verfügbarkeit prüfen
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
