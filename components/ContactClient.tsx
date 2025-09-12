/** @format */
"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Mail, Phone, MapPin, Clock} from "lucide-react"
import {motion, Variants} from "framer-motion"

type Props = {
  settings: {
    kontaktTelefon: string
    kontaktEmail: string
  }
}

// Animation variants
const fadeInUp: Variants = {
  hidden: {opacity: 0, y: 40},
  show: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}}
}

const staggerCards: Variants = {
  hidden: {},
  show: {transition: {staggerChildren: 0.15}}
}

export default function ContactClient({settings}: Props) {
  return (
    <section className='py-16 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-12'
          variants={fadeInUp}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 0.3}}>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Kontakt aufnehmen
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Bereit, Ihren Aufenthalt zu buchen oder Fragen? Wir helfen Ihnen,
            Ihren Besuch in Gera perfekt zu gestalten
          </p>
        </motion.div>

        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
          variants={staggerCards}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 0.3}}>
          {/* Telefon */}
          <motion.div variants={fadeInUp}>
            <Card className='py-6'>
              <CardHeader className='text-center'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <CardTitle className='text-lg -mb-4'>Telefon</CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-muted-foreground'>
                  {settings.kontaktTelefon}
                </p>
                <p className='text-sm text-muted-foreground mt-1'>
                  Rufen Sie uns jederzeit an
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* E-Mail */}
          <motion.div variants={fadeInUp}>
            <Card className='py-6'>
              <CardHeader className='text-center'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <CardTitle className='text-lg -mb-4'>E-Mail</CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-muted-foreground break-all'>
                  {settings.kontaktEmail}
                </p>
                <p className='text-sm text-muted-foreground mt-1'>
                  Wir antworten innerhalb von 24 Stunden
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Standort */}
          <motion.div variants={fadeInUp}>
            <Card className='py-6'>
              <CardHeader className='text-center'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <CardTitle className='text-lg -mb-4'>Standort</CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-muted-foreground'>Gera, Deutschland</p>
                <p className='text-sm text-muted-foreground mt-1'>
                  Zentrale Lagen
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeInUp}>
            <Card className='py-6'>
              <CardHeader className='text-center'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                  <Clock className='h-6 w-6 text-primary' />
                </div>
                <CardTitle className='text-lg -mb-4'>Support</CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-muted-foreground'>24/7 verfügbar</p>
                <p className='text-sm text-muted-foreground mt-1'>
                  Immer bereit zu helfen
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
