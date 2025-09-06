/** @format */

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {MapPin, Users} from "lucide-react"
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

// Hilfsfunktion: Beschreibung nach erstem Punkt trimmen
function trimDescription(text: string) {
  if (!text) return ""
  const firstPeriodIndex = text.indexOf(".")
  if (firstPeriodIndex === -1) return text // kein Punkt, ganze Beschreibung anzeigen
  return text.slice(0, firstPeriodIndex + 1)
}

export async function FeaturedApartments() {
  const order = [
    "ferienwohnung-jasmin",
    "ferienwohnung-maria",
    "ferienwohnung-vivien"
  ]

  const featuredApartments: ApartmentDetailProps[] =
    await client.fetch(allApartmentsQuery)

  const sorted = featuredApartments
    .filter((apartment) => order.includes(apartment.slug?.toLowerCase()))
    .sort(
      (a, b) =>
        order.indexOf(a.slug?.toLowerCase()) -
        order.indexOf(b.slug?.toLowerCase())
    )

  return (
    <section className='py-16 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Unsere Ferien Wohnungen in Gera
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Buchen Sie jetzt eine von unseren wunderbaren Ferienwohnungen in
            Gera
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {sorted.map((apartment: ApartmentDetailProps) => (
            <Card
              key={apartment._id}
              className='overflow-hidden hover:shadow-lg transition-shadow'>
              <CardHeader className='p-0'>
                <div className='aspect-[20/10] relative'>
                  <Image
                    fill
                    src={
                      apartment.images?.[0]?.asset?.url || "/placeholder.svg"
                    }
                    alt={apartment.title}
                    className='w-full h-full object-cover'
                  />
                  <Badge className='absolute top-4 left-4 bg-background/50 backdrop-blur text-foreground'>
                    Ab €{apartment.preisProNacht}/Nacht
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className='px-6'>
                <h3 className='text-xl font-semibold mb-2'>
                  {apartment.title}
                </h3>
                <p className='text-muted-foreground mb-4'>
                  {trimDescription(apartment.beschreibung)}
                </p>

                <div className='flex items-center space-x-4 mb-4'>
                  <div className='flex items-center space-x-1'>
                    <Users className='h-4 w-4 text-muted-foreground' />
                    <span className='text-sm'>{apartment.guests} Gäste</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <MapPin className='h-4 w-4 text-muted-foreground' />
                    <span className='text-sm'>Gera</span>
                  </div>
                </div>

                {/* Ausstattung statt Features */}
                <div className='flex flex-wrap gap-2'>
                  {apartment.ausstattung.slice(0, 3).map((item: string) => (
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

        <div className='text-center'>
          <Button size='lg' variant='outline' asChild>
            <Link href='/apartments'>Alle Ferienwohnungen anzeigen</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
