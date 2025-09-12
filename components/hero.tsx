/** @format */

"use client"

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {MapPin, Star, Award, Users, House, AlarmClockCheck} from "lucide-react"
import Image from "next/image"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants
} from "framer-motion"

// Animation Variants
const fadeInUp: Variants = {
  hidden: {opacity: 0, y: 40},
  show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}}
}

const staggerContainer: Variants = {
  hidden: {},
  show: {transition: {staggerChildren: 0.15}}
}

export function Hero() {
  const {scrollY} = useScroll()
  const rawCol1Y = useTransform(scrollY, [0, 300], [0, 50])
  const rawCol2Y = useTransform(scrollY, [0, 300], [0, -50])
  const col1Y = useSpring(rawCol1Y, {stiffness: 50, damping: 25, mass: 1.2})
  const col2Y = useSpring(rawCol2Y, {stiffness: 50, damping: 25, mass: 1.2})

  const icons = [
    {icon: MapPin, text: "Zentrale Lagen in Gera"},
    {icon: Star, text: "5-Sterne Bewertungen"},
    {icon: House, text: "6 Wohnungen Verfügbar"},
    {icon: Users, text: "Perfekt für 1-2 Gäste"},
    {icon: AlarmClockCheck, text: "24/7 Check-in über Schlüsselbox"},
    {icon: Award, text: "547+ zufriedene Gäste"}
  ]

  return (
    <section
      id='hero-section'
      className='-mt-4 relative bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
      <div className='container mx-auto px-4 py-16 md:py-24'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* LEFT col: text + ctas */}
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount: 0.2}}
            className='flex justify-center lg:justify-end'>
            <div className='text-center lg:text-left md:-mt-10 lg:-mt-20 max-w-xl space-y-6'>
              <motion.h1
                variants={fadeInUp}
                className='text-4xl md:text-[50px] xl:text-6xl font-bold leading-none md:leading-tight mb-6 md:mb-4 md:max-w-3xl'>
                Ferienwohnung in Gera: Jetzt Buchen
              </motion.h1>

              <p className='text-base lg:text-lg text-muted-foreground mb-8'>
                Buchen Sie jetzt GARANTIERT günstiger als bei Booking, Airbnb &
                co! Sicher & einfach eine unserer gemütlichen & super
                ausgestatteten Ferienwohnungen mitten im Zentrum von Gera.
              </p>

              {/* icons */}
              <motion.div
                variants={staggerContainer}
                className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8'>
                {icons.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className='flex items-center justify-center space-x-1 sm:space-x-2'>
                    <item.icon className='h-4 w-4 sm:h-5 sm:w-5 text-primary' />
                    <span className='text-xs sm:text-sm font-medium'>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* ctas */}
              <motion.div
                variants={staggerContainer}
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 lg:mb-2'>
                <motion.div variants={fadeInUp}>
                  <Button size='xl' asChild>
                    <Link href='/booking'>Verfügbarkeit prüfen</Link>
                  </Button>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Button size='xl' variant='outline' asChild>
                    <Link href='/apartments'>Unsere Ferienwohnungen</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT col: images */}
          <div className='grid grid-cols-2 gap-x-2 sm:gap-x-4 -mt-8 justify-center'>
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{once: true, amount: 0.2}}
              style={{y: col1Y}}
              className='space-y-3 flex flex-col items-end w-full'>
              {[
                {
                  href: "/apartments/ferienwohnung-jasmin",
                  src: "https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohnungen-gera-innenstadt-jasmin-fewo-urlaub-deutsche-pension-online-gaestewohnung.jpg",
                  alt: "Apartment 1"
                },
                {
                  href: "/apartments/ferienwohnung-maria",
                  src: "https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohnung-gera-bad-badezimmer-dusche-neu-handtuecher-bettwaesche-inklusive-reinigung-sauber-sehr-gute-bewertungen-erfahrung-austattung-top-neu-renoviert-1024x683.jpg",
                  alt: "Apartment 2"
                },
                {
                  href: "/apartments/ferienwohnung-vivien",
                  src: "https://ferienwohnungen-gera.de/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-07-at-10.58.30-1024x768.jpeg",
                  alt: "Apartment 3"
                }
              ].map((img, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Link href={img.href}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={250}
                      height={180}
                      className='rounded-xl object-cover w-full max-w-[220px] md:max-w-[260px] lg:max-w-[280px]'
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{once: true, amount: 0.2}}
              style={{y: col2Y}}
              className='space-y-3 mt-16 flex flex-col items-start w-full'>
              {[
                {
                  href: "/blog/wir-wurden-2025-ausgezeichnet-von-booking-mit-9-3-von-10-punkten",
                  src: "https://ferienwohnungen-gera.de/wp-content/uploads/2025/01/booking-award-ferienwohnungen-gera--1024x1024.png",
                  alt: "Booking Award"
                },
                {
                  href: "/wohnungen/ferienwohnungen-maria",
                  src: "https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohnung-gera-mieten-buchen-maria-zentrum-07545-thueringen-fewo--1024x683.jpg",
                  alt: "Apartment 4"
                },
                {
                  href: null,
                  src: "https://ferienwohnungen-gera.de/wp-content/uploads/2023/04/grosse-ferienwohnung-in-gera-4-personen-4-betten-airbnb-unterkunft-uebernachten-1024x683.png.pagespeed.ce.AkvDqqZ1be.png",
                  alt: "Apartment 5"
                }
              ].map((img, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  {img.href ? (
                    <Link href={img.href}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={250}
                        height={180}
                        className='rounded-xl object-cover w-full max-w-[220px] md:max-w-[260px] lg:max-w-[280px]'
                      />
                    </Link>
                  ) : (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={250}
                      height={180}
                      className='rounded-xl object-cover w-full max-w-[220px] md:max-w-[260px] lg:max-w-[280px]'
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
