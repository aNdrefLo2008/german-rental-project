/** @format */

"use client"

import {useEffect, useState} from "react"
import {client} from "@/sanity/lib/client"
import {settingsQuery} from "@/sanity/lib/queries"
import type {Settings} from "@/components/footer"
import {MessageCircle} from "lucide-react"

export function WhatsAppButton() {
  const [whatsAppLink, setWhatsAppLink] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSettings() {
      const settings: Settings = await client.fetch(settingsQuery)
      setWhatsAppLink(settings.whatsAppLink)
    }
    fetchSettings()
  }, [])

  if (!whatsAppLink) return null

  return (
    <a
      href={whatsAppLink}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-400 text-white shadow-lg hover:bg-green-500 transition-colors duration-300'>
      <MessageCircle className='w-7 h-7' />
    </a>
  )
}
