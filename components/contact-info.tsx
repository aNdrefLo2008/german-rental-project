/** @format */

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {client} from "@/sanity/lib/client"
import {settingsQuery} from "@/sanity/lib/queries"
import {Mail, Phone, MapPin, Clock, MessageCircle} from "lucide-react"

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

export async function ContactInfo() {
  const settings: Settings = await client.fetch(settingsQuery)

  return (
    <div className='space-y-6'>
      {/* Contact Information */}
      <Card className='py-6'>
        <CardHeader>
          <CardTitle className='text-2xl'>Kontaktinformationen</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <Phone className='h-5 w-5 text-primary' />
            <div>
              <p className='font-medium'>Telefon</p>
              <p className='text-muted-foreground'>{settings.kontaktTelefon}</p>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <Mail className='h-5 w-5 text-primary' />
            <div>
              <p className='font-medium'>E-Mail</p>
              <p className='text-muted-foreground'>{settings.kontaktEmail}</p>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <MapPin className='h-5 w-5 text-primary' />
            <div>
              <p className='font-medium'>Standort</p>
              <p className='text-muted-foreground'>
                Gera, Thüringen, Deutschland
              </p>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <Clock className='h-5 w-5 text-primary' />
            <div>
              <p className='font-medium'>Support-Zeiten</p>
              <p className='text-muted-foreground'>24/7 verfügbar</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Response */}
      <Card className='py-6'>
        <CardHeader>
          <CardTitle className='text-2xl'>Schnelle Antwort</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex items-start space-x-3'>
            <MessageCircle className='h-5 w-5 text-primary mt-1' />
            <div>
              <p className='font-medium mb-2'>Schnelle Kommunikation</p>
              <p className='text-sm text-muted-foreground'>
                Wir antworten normalerweise innerhalb von 2–4 Stunden während
                der Geschäftszeiten und innerhalb von 24 Stunden am Wochenende.
                Für dringende Anliegen rufen Sie uns bitte direkt an.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Booking Process */}
      <Card className='py-6'>
        <CardHeader>
          <CardTitle className='text-2xl'>Buchungsprozess</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3 text-sm'>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold'>
                1
              </div>
              <span>
                Schicken Sie uns Ihre Anfrage mit den gewünschten Daten
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold'>
                2
              </div>
              <span>
                Wir bestätigen die Verfügbarkeit und senden die Buchungsdetails
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold'>
                3
              </div>
              <span>
                Bezahlen Sie und erhalten Sie die Check-in-Anweisungen
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold'>
                4
              </div>
              <span>Genießen Sie Ihren Aufenthalt in Gera!</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
