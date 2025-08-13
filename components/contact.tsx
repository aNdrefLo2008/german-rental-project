/** @format */

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {client} from "@/sanity/lib/client"
import {settingsQuery} from "@/sanity/lib/queries"
import {Mail, Phone, MapPin, Clock} from "lucide-react"

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

export async function Contact() {
  const settings: Settings = await client.fetch(settingsQuery)

  return (
    <section className='py-16 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Kontakt aufnehmen
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Bereit, Ihren Aufenthalt zu buchen oder Fragen? Wir helfen Ihnen,
            Ihren Besuch in Gera perfekt zu gestalten
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Card className='py-6'>
            <CardHeader className='text-center'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <Phone className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg -mb-4'>Telefon</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <p className='text-muted-foreground'>{settings.kontaktTelefon}</p>
              <p className='text-sm text-muted-foreground mt-1'>
                Rufen Sie uns jederzeit an
              </p>
            </CardContent>
          </Card>

          <Card className='py-6'>
            <CardHeader className='text-center'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <Mail className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg -mb-4'>E-Mail</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <p className='text-muted-foreground  break-all'>
                {settings.kontaktEmail}
              </p>
              <p className='text-sm text-muted-foreground mt-1'>
                Wir antworten innerhalb von 24 Stunden
              </p>
            </CardContent>
          </Card>

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
                Zentrale Lage
              </p>
            </CardContent>
          </Card>

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
        </div>
      </div>
    </section>
  )
}
