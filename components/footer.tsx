/** @format */

import Link from "next/link"
import {Mail, Phone, MapPin} from "lucide-react"
import {client} from "@/sanity/lib/client"
import {settingsQuery} from "@/sanity/lib/queries"

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

export async function Footer() {
  const settings: Settings = await client.fetch(settingsQuery)

  return (
    <footer className='bg-muted/50 border-t'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <Link href='/' className='flex items-center mb-4'>
              <img
                src='/logo.svg'
                alt='Ferienwohnungen Gera'
                className='h-8 w-auto'
              />
            </Link>
            <p className='text-sm text-muted-foreground'>
              Premium-Ferienwohnungen zur Kurzzeitmiete im Herzen von Gera,
              Deutschland.
            </p>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Schnellzugriff</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/' className='hover:text-primary'>
                  Startseite
                </Link>
              </li>
              <li>
                <Link href='/apartments' className='hover:text-primary'>
                  Wohnungen
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-primary'>
                  Kontaktieren
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Kontaktinformationen</h3>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center space-x-2'>
                <Phone className='h-4 w-4' />
                <span>{settings.kontaktTelefon}</span>
              </li>
              <li className='flex items-center space-x-2'>
                <Mail className='h-4 w-4 shrink-0' />
                <span className='break-all'>{settings.kontaktEmail}</span>
              </li>
              <li className='flex items-center space-x-2'>
                <MapPin className='h-4 w-4' />
                <span>Gera, Deutschland</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Rechtliches</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/legal' className='hover:text-primary'>
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href='/legal' className='hover:text-primary'>
                  Nutzungsbedingungen
                </Link>
              </li>
              <li>
                <Link href='/legal' className='hover:text-primary'>
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 text-center text-sm text-muted-foreground'>
          <p>&copy; 2024 Gera Apartments. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
