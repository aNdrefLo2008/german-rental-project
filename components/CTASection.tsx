/* @format */
"use client"

import Link from "next/link"
import {Button} from "./ui/button"
import {motion, Variants} from "framer-motion"

const fadeInUp: Variants = {
  hidden: {opacity: 0, y: 40},
  show: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}}
}

const staggerChildren: Variants = {
  hidden: {},
  show: {transition: {staggerChildren: 0.2}}
}

export function CTASection() {
  return (
    <section
      className='overflow-hidden relative shadow-xl rounded-3xl py-16 md:py-24 px-8 md:px-12 text-center max-w-4xl mx-8 lg:mx-auto my-16 bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohnung-gera-mieten-buchen-fewo-monteurzimmer-hotel-alternative-07545-jasmin-maria-1.jpg')"
      }}>
      {/* Overlay für bessere Lesbarkeit */}
      <div className='absolute inset-0 bg-black/40 rounded-3xl' />

      {/* Dekorative Blobs */}
      <div className='absolute -left-20 -top-20 blur-3xl p-20 rounded-full bg-gradient-to-r from-emerald-100 to-indigo-100 mix-blend-overlay' />
      <div className='absolute -right-20 top-20 blur-3xl p-20 rounded-full bg-purple-100 mix-blend-overlay' />
      <div className='absolute -bottom-32 left-32 blur-3xl p-20 rounded-full bg-blue-100 mix-blend-overlay' />

      {/* Inhalt */}
      <motion.div
        className='relative z-10 flex flex-col items-center'
        variants={staggerChildren}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.3}}>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-4 text-white'
          variants={fadeInUp}>
          Jetzt Ferienwohnung in Gera buchen
        </motion.h2>

        <motion.p
          className='text-gray-200 mb-6 max-w-xl mx-auto'
          variants={fadeInUp}>
          Entdecken Sie jetzt unsere exklusiven Angebote und finden Sie Ihr
          perfektes Zuhause in Gera.
        </motion.p>

        <div>
          <Button className='px-8 py-6' variant='blurred'>
            <Link href='/booking'>Ferienwohnung Buchen</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
