/** @format */

"use client"

import {useEffect, useState} from "react"
import {client} from "@/sanity/lib/client"
import {settingsQuery} from "@/sanity/lib/queries"
import type {Settings} from "@/components/footer"
import {MessageCircle} from "lucide-react"
import {motion, AnimatePresence} from "framer-motion"

export function WhatsAppButton() {
  const [whatsAppLink, setWhatsAppLink] = useState<string | null>(
    "https://wa.link/z1sfgp"
  )

  useEffect(() => {
    async function fetchSettings() {
      const settings: Settings = await client.fetch(settingsQuery)
      setWhatsAppLink(settings.whatsAppLink)
    }
    fetchSettings()
  }, [])

  if (!whatsAppLink) return null

  return (
    <AnimatePresence>
      <motion.a
        key='whatsapp-button'
        href={whatsAppLink}
        target='_blank'
        rel='noopener noreferrer'
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 100, opacity: 0}}
        transition={{duration: 0.4, ease: "easeInOut"}}
        className='fixed sm:bottom-4 bottom-14 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-400 text-white shadow-lg hover:bg-green-500 transition-colors duration-300'>
        <MessageCircle className='w-7 h-7' />
      </motion.a>
    </AnimatePresence>
  )
}
