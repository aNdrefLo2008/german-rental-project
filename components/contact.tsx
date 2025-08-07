/** @format */

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Mail, Phone, MapPin, Clock} from "lucide-react"

export function Contact() {
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
              <CardTitle className='text-lg'>Phone</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <p className='text-muted-foreground'>+49 XXX XXXXXXX</p>
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
              <CardTitle className='text-lg'>Email</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <p className='text-muted-foreground'>info@gera-apartments.de</p>
              <p className='text-sm text-muted-foreground mt-1'>
                {"We'll respond within 24h"}
              </p>
            </CardContent>
          </Card>

          <Card className='py-6'>
            <CardHeader className='text-center'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2'>
                <MapPin className='h-6 w-6 text-primary' />
              </div>
              <CardTitle className='text-lg'>Location</CardTitle>
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
              <CardTitle className='text-lg'>Support</CardTitle>
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
