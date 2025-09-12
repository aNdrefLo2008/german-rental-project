/** @format */
// Server component
import {client} from "@/sanity/lib/client"
import {settingsQuery} from "@/sanity/lib/queries"
import ContactClient from "./ContactClient"

export type NavigationItem = {
  title: string
  url: string
}

export type Settings = {
  siteTitle: string
  logoUrl?: string
  kontaktTelefon: string
  kontaktEmail: string
  adresse: string
  whatsAppLink: string
  footerText: string
  navigation: NavigationItem[]
}

export default async function Contact() {
  const settings: Settings = await client.fetch(settingsQuery)
  return <ContactClient settings={settings} />
}
