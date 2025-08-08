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
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Get in Touch</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Ready to book your stay or have questions? We&apos;re here to help
            make your visit to Gera perfect
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Card className='py-6'>
            <CardHeader className='text-center'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <Phone className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg -mb-4'>Phone</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <p className='text-muted-foreground'>{settings.kontaktTelefon}</p>
              <p className='text-sm text-muted-foreground mt-1'>
                Call us anytime
              </p>
            </CardContent>
          </Card>

          <Card className='py-6'>
            <CardHeader className='text-center'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <Mail className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg -mb-4'>Email</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <p className='text-muted-foreground'>{settings.kontaktEmail}</p>
              <p className='text-sm text-muted-foreground mt-1'>
                We&apos;ll respond within 24h
              </p>
            </CardContent>
          </Card>

          <Card className='py-6'>
            <CardHeader className='text-center'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <MapPin className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg -mb-4'>Location</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <p className='text-muted-foreground'>Gera, Germany</p>
              <p className='text-sm text-muted-foreground mt-1'>
                Central locations
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
              <p className='text-muted-foreground'>24/7 Available</p>
              <p className='text-sm text-muted-foreground mt-1'>
                Always here to help
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
