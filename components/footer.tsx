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
              Premium short-term rental apartments in the heart of Gera,
              Germany.
            </p>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/' className='hover:text-primary'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/apartments' className='hover:text-primary'>
                  Apartments
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-primary'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Contact Info</h3>
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
                <span>Gera, Germany</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/legal' className='hover:text-primary'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/legal' className='hover:text-primary'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href='/legal' className='hover:text-primary'>
                  Imprint
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 text-center text-sm text-muted-foreground'>
          <p>&copy; 2024 Gera Apartments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
