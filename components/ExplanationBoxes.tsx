/** @format */
"use client"

import React from "react"
import {motion, Variants} from "framer-motion"

const fadeInUp: Variants = {
  hidden: {opacity: 0, y: 40},
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.8, ease: "easeOut"}
  }
}

const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25 // Abstand zwischen den Boxen
    }
  }
}

function ExplanationBoxes() {
  return (
    <section className='py-16 bg-gradient-to-r from-[#3B4AFF] to-[#1b6584]'>
      <div className='max-w-full 2xl:mx-20 mx-auto px-4 text-center'>
        {/* Header */}
        <motion.h2
          variants={fadeInUp}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 0.3}}
          className='text-3xl md:text-4xl font-semibold mb-16 text-gray-100'>
          So funktioniert unser Buchungssystem
        </motion.h2>

        {/* Boxes mit Stagger Animation */}
        <motion.div
          variants={staggerParent}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 0.2}}
          className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch'>
          {[
            {
              step: "1",
              title: "Verfügbarkeit prüfen",
              text: "Prüfen Sie die Verfügbarkeit Ihrer gewünschten Wohnung direkt auf unserer Website. Sollte online kein Termin frei sein, können Sie uns selbstverständlich auch telefonisch kontaktieren."
            },
            {
              step: "2",
              title: "Ferienwohnung buchen",
              text: "Buchen Sie die passende Ferienwohnung in Gera bequem online. Wir garantieren Ihnen: Bei Direktbuchungen über unsere Website erhalten Sie immer den besten Preis – günstiger als bei Booking, Airbnb oder anderen Portalen."
            },
            {
              step: "3",
              title: "Bestätigung & Zugangscode erhalten",
              text: "Nach Ihrer Buchung erhalten Sie automatisch eine E-Mail mit allen Details zu Ihrem Aufenthalt sowie Ihrem persönlichen Zugangscode für die Schlüsselbox."
            },
            {
              step: "4",
              title: "Einfacherer & sicherer Check-in",
              text: "Ab 16:00 Uhr können Sie jederzeit selbst einchecken – 24/7, völlig unabhängig von Ihrer Anreisezeit. Einfach den Code eingeben, Schlüssel entnehmen und entspannt in Ihre Wohnung."
            }
          ].map((box, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{scale: 1.03, y: -4}}
              transition={{type: "spring", stiffness: 200, damping: 15}}
              className='bg-white text-left p-4 md:p-8 rounded-2xl shadow-xl min-h-[300px] lg:min-h-[380px]'>
              <h2 className='text-2xl md:text-3xl font-semibold mb-6'>
                {box.step}
              </h2>
              <h3 className='text-xl md:text-2xl font-medium mb-4'>
                {box.title}
              </h3>
              <p className='text-muted-foreground mx-auto max-w-7xl'>
                {box.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ExplanationBoxes
