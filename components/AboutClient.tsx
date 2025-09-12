/** @format */
"use client"

import {Card, CardContent} from "@/components/ui/card"
import {
  Shield,
  Clock,
  Heart,
  Award,
  Car,
  BedDouble,
  Users,
  Home,
  FileText,
  Check
} from "lucide-react"
import ReviewsSection from "./ReviewSection"
import Image from "next/image"
import Link from "next/link"
import {Button} from "./ui/button"
import {motion, Variants} from "framer-motion"

type Props = {
  upsell: any
  reviews: any[]
}

const features = [
  {
    icon: Car,
    title: "Kostenlose Parkmöglichkeiten",
    description:
      "Immer max. 5 Minuten fußläufig oder direkt vor der Unterkunft verfügbar."
  },
  {
    icon: BedDouble,
    title: "Frische Bettwäsche & Handtücher",
    description:
      "Inklusive, mit Zwischenreinigung alle 14 Tage (auf Wunsch auch öfter)."
  },
  {
    icon: Shield,
    title: "Sicher & geschützt",
    description:
      "Alle Wohnungen werden professionell gereinigt und zwischen den Aufenthalten gründlich desinfiziert."
  },
  {
    icon: Users,
    title: "Persönlicher Service",
    description:
      "Unser deutschsprachiges Team in Gera mit vier Mitarbeitern ist nahezu rund um die Uhr für Sie erreichbar."
  },
  {
    icon: Award,
    title: "Qualität garantiert",
    description:
      "Jedes Apartment wird sorgfältig ausgewählt, nach hohen Standards eingerichtet und laufend gepflegt."
  },
  {
    icon: Home,
    title: "Vollständig ausgestattete Wohnungen",
    description:
      "Ideal auch für Langzeitaufenthalte – komfortabel und praktisch eingerichtet."
  },
  {
    icon: FileText,
    title: "Transparente Abrechnung",
    description:
      "Sie erhalten eine Rechnung mit ausgewiesener Umsatzsteuer in Höhe von 7 % (Stand: 2025)."
  },
  {
    icon: Heart,
    title: "Lokale Erfahrung",
    description:
      "Wir geben Insider-Tipps und Empfehlungen, damit Sie Gera wie ein Einheimischer erleben können."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Unser Team steht rund um die Uhr zur Verfügung, um bei Fragen oder Anliegen zu helfen."
  }
]

// Animations
const fadeInUp: Variants = {
  hidden: {opacity: 0, y: 40},
  show: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}}
}

const fadeInLeft: Variants = {
  hidden: {opacity: 0, x: -40},
  show: {opacity: 1, x: 0, transition: {duration: 0.8, ease: "easeOut"}}
}

const fadeInRight: Variants = {
  hidden: {opacity: 0, x: 40},
  show: {opacity: 1, x: 0, transition: {duration: 0.8, ease: "easeOut"}}
}

export default function AboutClient({upsell, reviews}: Props) {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 0.2}}
          className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ihre Vorteile als Geschäftskunde & Privatgast bei uns
          </h2>
          <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6'>
            Seit 2021 betreiben wir unsere Ferienwohnungen in Gera …
          </p>
          <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto'>
            Damit vereinen unsere Ferienwohnungen die Flexibilität …
          </p>
        </motion.div>

        {/* Features */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial='hidden'
              whileInView='show'
              viewport={{once: true, amount: 0.15}}
              transition={{delay: index * 0.1}}>
              <Card className='text-center border-none shadow-none py-6'>
                <CardContent className='pt-6'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <feature.icon className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        {reviews?.length > 0 && <ReviewsSection reviews={reviews} />}

        {/* … hier den restlichen Animations-Code wie im vorherigen Beispiel lassen … */}
      </div>
    </section>
  )
}
