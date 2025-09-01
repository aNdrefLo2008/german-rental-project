/** @format */

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {MapPin, Star, Award, Users, House, AlarmClockCheck} from "lucide-react"
import Image from "next/image"
import heroImg from "../public/HeroImg.jpg"

export function Hero() {
  return (
    <section className='relative bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
      <div className='container mx-auto px-4 py-16 md:py-24'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h1 className='text-4xl md:text-[50px] xl:text-6xl font-bold leading-none md:leading-tight mb-6 md:mb-4 md:max-w-3xl'>
              Ferienwohnung in Gera: Jetzt buchen
            </h1>
            <p className='text-lg text-muted-foreground mb-8 max-w-lg'>
              Buchen Sie jetzt GARANTIERT günstiger als bei Booking, Airbnb &
              co! Sicher & einfach eine unserer gemütlichen & super
              ausgestatteten Ferienwohnungen mitten im Zentrum von Gera.
            </p>

            <div className='flex flex-wrap sm:text-base text-sm gap-6 mb-8'>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-5 w-5 text-primary' />
                <span className='text-sm font-medium'>
                  Zentrale Lagen in Gera
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Star className='h-5 w-5 text-primary' />
                <span className='text-sm font-medium'>
                  5-Sterne Bewertungen
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <House className='h-5 w-5 text-primary' />
                <span className='text-sm font-medium'>
                  6 Wohnungen Verfügbar
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Users className='h-5 w-5 text-primary' />
                <span className='text-sm font-medium'>
                  Perfekt für 1-2 Gäste
                </span>
              </div>

              <div className='flex items-center space-x-2'>
                <AlarmClockCheck className='h-5 w-5 text-primary' />
                <span className='text-sm font-medium'>
                  24/7 Check-in über Schlüsselbox
                </span>
              </div>

              <div className='flex items-center space-x-2'>
                <Award className='h-5 w-5 text-primary' />
                <span className='text-sm font-medium'>
                  547+ zufriedene Gäste
                </span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button size='xl' asChild>
                <Link href='/booking'>Verfügbarkeit prüfen</Link>
              </Button>
              <Button size='xl' variant='outline' asChild>
                <Link href='/apartments'>Unsere Wohnungen</Link>
              </Button>
            </div>
          </div>

          <div className='relative'>
            <div className='aspect-[4/3] overflow-hidden bg-muted'>
              <Image
                src={heroImg || "/placeholder.svg?height=600&width=800"}
                width={1000}
                height={600}
                priority
                alt='Modern apartment interior'
                className='w-full rounded-2xl h-full object-cover'
              />
            </div>
            <div
              className='absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-6
                rounded-xl p-4 shadow-lg
                backdrop-blur supports-[backdrop-filter]:bg-background/30'
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)"
              }}>
              <div className='text-xl sm:text-2xl font-bold text-primary'>
                6+
              </div>
              <div className='text-xs sm:text-sm text-gray-700'>
                Verfügbare Wohnungen
              </div>
            </div>

            <div
              className='absolute sm:-top-6 -top-3 sm:-right-6 -right-3
                rounded-xl p-4 shadow-lg
                backdrop-blur supports-[backdrop-filter]:bg-background/30'
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)"
              }}>
              <div className='text-xl sm:text-2xl font-bold text-primary'>
                337+
              </div>
              <div className='text-xs sm:text-sm text-gray-700'>
                Zufriedene Kunden
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
