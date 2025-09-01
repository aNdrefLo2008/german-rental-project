/** @format */
"use client"

import {useEffect, useState} from "react"
import {client} from "@/sanity/lib/client"
import {settingsQuery} from "@/sanity/lib/queries"
import type {Settings} from "@/components/footer"
import {motion, AnimatePresence} from "framer-motion"

export function WhatsAppButton() {
  const [whatsAppLink, setWhatsAppLink] = useState<string | null>(
    "https://wa.me/4917634492580?text=Hi!%20Es%20geht%20um%20eine%20Ferienwohnung%20in%20Gera.."
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
        className='fixed bottom-4 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300'>
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 24 24'
          className='w-7 h-7'>
          <path d='M20.52 3.48A11.85 11.85 0 0 0 12 .04C5.37.04.03 5.38.03 12c0 2.12.56 4.19 1.63 6.01L0 24l6.19-1.62A11.96 11.96 0 0 0 12 24c6.63 0 11.97-5.34 11.97-12 0-3.2-1.24-6.22-3.45-8.52zM12 21.6c-1.95 0-3.87-.53-5.54-1.55l-.4-.24-3.67.96.98-3.58-.26-.42A9.62 9.62 0 0 1 2.4 12C2.4 6.71 6.71 2.4 12 2.4c2.57 0 4.99 1 6.81 2.82a9.56 9.56 0 0 1 2.79 6.78c0 5.29-4.31 9.6-9.6 9.6zm5.34-7.38c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.3-.74.94-.9 1.14-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.3-.02-.46.13-.61.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5h-.55c-.19 0-.5.07-.76.36-.26.3-1 1-1 2.44s1.02 2.83 1.16 3.02c.15.19 2 3.05 4.86 4.28.68.29 1.22.46 1.63.59.68.22 1.29.19 1.78.12.54-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.34z' />
        </svg>
      </motion.a>
    </AnimatePresence>
  )
}
