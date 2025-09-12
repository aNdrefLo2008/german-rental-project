/** @format */
"use client"

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Check, MapPin, Users} from "lucide-react"
import Image from "next/image"
import {motion, Variants} from "framer-motion"

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

type Props = {
  apartments: ApartmentDetailProps[]
}

// Beschreibung kürzen
function trimDescription(text: string) {
  if (!text) return ""
  const firstPeriodIndex = text.indexOf(".")
  if (firstPeriodIndex === -1) return text
  return text.slice(0, firstPeriodIndex + 1)
}

// Animation Variants
const fadeInUp: Variants = {
  hidden: {opacity: 0, y: 40},
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2 // gestaffelte Verzögerung
    }
  })
}

export default function FeaturedApartmentsClient({apartments}: Props) {
  return (
    <section className='py-16 bg-muted/30'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 0.2}}
          custom={0}
          className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Unsere Ferien Wohnungen in Gera
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Buchen Sie jetzt eine von unseren wunderbaren Ferienwohnungen in
            Gera
          </p>
        </motion.div>

        {/* Grid mit Apartments */}
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12'>
          {apartments.map((apartment, index) => (
            <motion.div
              key={apartment._id}
              variants={fadeInUp}
              initial='hidden'
              whileInView='show'
              viewport={{once: true, amount: 0.2}}
              custom={index + 1} // wichtig für Verzögerung
            >
              <Card className='overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full'>
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

                <CardContent className='px-6 flex-1 flex flex-col grow'>
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

                  {/* Ausstattung */}
                  <div className='flex flex-wrap gap-2 mt-auto'>
                    {apartment.ausstattung.map((item) => (
                      <div
                        className='bg-gray-50 p-2 rounded-xl flex items-center'
                        key={item}>
                        <div className='bg-gray-white rounded-sm border border-gray-300 p-1'>
                          <Check className='font-medium h-4 w-4 text-gray-400' />
                        </div>
                        <span className='ml-4 font-medium text-sm text-gray-600'>
                          {item}
                        </span>
                      </div>
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
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 0.2}}
          custom={apartments.length + 1}
          className='text-center'>
          <Button size='lg' variant='outline' asChild>
            <Link href='/apartments'>Alle Ferienwohnungen anzeigen</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
