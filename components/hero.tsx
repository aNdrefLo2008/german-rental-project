/** @format */

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {MapPin, Star, Award, Users, House, AlarmClockCheck} from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className='-mt-4 relative bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
      <div className='container mx-auto px-4 py-16 md:py-24'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* LEFT col: text + ctas */}
          <div className='flex justify-center lg:justify-start'>
            <div className='text-center lg:text-left md:-mt-10 lg:-mt-20 max-w-xl'>
              <h1 className='text-4xl md:text-[50px] xl:text-6xl font-bold leading-none md:leading-tight mb-6 md:mb-4 md:max-w-3xl'>
                Ferienwohnung in Gera: Jetzt Buchen
              </h1>

              <p className='text-base lg:text-lg text-muted-foreground mb-8'>
                Buchen Sie jetzt GARANTIERT günstiger als bei Booking, Airbnb &
                co! Sicher & einfach eine unserer gemütlichen & super
                ausgestatteten Ferienwohnungen mitten im Zentrum von Gera.
              </p>

              {/* icons */}
              <div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8'>
                <div className='flex items-center justify-center space-x-1 sm:space-x-2'>
                  <MapPin className='h-4 w-4 sm:h-5 sm:w-5 text-primary' />
                  <span className='text-xs sm:text-sm font-medium'>
                    Zentrale Lagen in Gera
                  </span>
                </div>
                <div className='flex items-center justify-center space-x-1 sm:space-x-2'>
                  <Star className='h-4 w-4 sm:h-5 sm:w-5 text-primary' />
                  <span className='text-xs sm:text-sm font-medium'>
                    5-Sterne Bewertungen
                  </span>
                </div>
                <div className='flex items-center justify-center space-x-1 sm:space-x-2'>
                  <House className='h-4 w-4 sm:h-5 sm:w-5 text-primary' />
                  <span className='text-xs sm:text-sm font-medium'>
                    6 Wohnungen Verfügbar
                  </span>
                </div>
                <div className='flex items-center justify-center space-x-1 sm:space-x-2'>
                  <Users className='h-4 w-4 sm:h-5 sm:w-5 text-primary' />
                  <span className='text-xs sm:text-sm font-medium'>
                    Perfekt für 1-2 Gäste
                  </span>
                </div>
                <div className='flex items-center justify-center space-x-1 sm:space-x-2'>
                  <AlarmClockCheck className='h-4 w-4 sm:h-5 sm:w-5 text-primary' />
                  <span className='text-xs sm:text-sm font-medium'>
                    24/7 Check-in über Schlüsselbox
                  </span>
                </div>
                <div className='flex items-center justify-center space-x-1 sm:space-x-2'>
                  <Award className='h-4 w-4 sm:h-5 sm:w-5 text-primary' />
                  <span className='text-xs sm:text-sm font-medium'>
                    547+ zufriedene Gäste
                  </span>
                </div>
              </div>

              {/* ctas */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 lg:mb-2'>
                <Button size='xl' asChild>
                  <Link href='/booking'>Verfügbarkeit prüfen</Link>
                </Button>
                <Button size='xl' variant='outline' asChild>
                  <Link href='/apartments'>Unsere Wohnungen</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT col: images */}
          <div className='grid grid-cols-2 gap-x-2 sm:gap-x-4 -mt-8 justify-center'>
            {/* col1 */}
            <div className='space-y-3 flex flex-col items-end'>
              <Image
                src='https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohnungen-gera-innenstadt-jasmin-fewo-urlaub-deutsche-pension-online-gaestewohnung.jpg'
                alt='Apartment 1'
                width={250}
                height={180}
                className='rounded-xl object-cover max-w-[220px] md:max-w-[260px] lg:max-w-[300px]'
              />
              <Image
                src='https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohnung-gera-bad-badezimmer-dusche-neu-handtuecher-bettwaesche-inklusive-reinigung-sauber-sehr-gute-bewertungen-erfahrung-austattung-top-neu-renoviert-1024x683.jpg'
                alt='Apartment 2'
                width={250}
                height={180}
                className='rounded-xl object-cover max-w-[220px] md:max-w-[260px] lg:max-w-[300px]'
              />
              <Image
                src='https://ferienwohnungen-gera.de/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-10.58.30-1024x768.jpeg'
                alt='Apartment 3'
                width={250}
                height={180}
                className='rounded-xl object-cover max-w-[220px] md:max-w-[260px] lg:max-w-[300px]'
              />
            </div>

            {/* col2 */}
            <div className='space-y-3 mt-16 flex flex-col items-start'>
              <Image
                src='https://ferienwohnungen-gera.de/wp-content/uploads/2025/01/booking-award-ferienwohnungen-gera--1024x1024.png'
                alt='Booking Award'
                width={400}
                height={400}
                className='rounded-xl object-cover max-w-[220px] md:max-w-[260px] lg:max-w-[250px]'
              />
              <Image
                src='https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohnung-gera-mieten-buchen-maria-zentrum-07545-thueringen-fewo--1024x683.jpg'
                alt='Apartment 4'
                width={250}
                height={180}
                className='rounded-xl object-cover max-w-[220px] md:max-w-[260px] lg:max-w-[300px]'
              />
              <Image
                src='https://ferienwohnungen-gera.de/wp-content/uploads/2023/04/grosse-ferienwohnung-in-gera-4-personen-4-betten-airbnb-unterkunft-uebernachten-1024x683.png.pagespeed.ce.AkvDqqZ1be.png'
                alt='Apartment 5'
                width={250}
                height={180}
                className='rounded-xl object-cover max-w-[220px] md:max-w-[260px] lg:max-w-[300px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
