/** @format */

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Mail, Phone, MapPin, Clock, MessageCircle} from "lucide-react"

export function ContactInfo() {
  return (
    <div className='space-y-6'>
      <Card className='py-6'>
        <CardHeader>
          <CardTitle className='text-2xl'>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <Phone className='h-5 w-5 text-primary' />
            <div>
              <p className='font-medium'>Phone</p>
              <p className='text-muted-foreground'>+49 XXX XXXXXXX</p>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <Mail className='h-5 w-5 text-primary' />
            <div>
              <p className='font-medium'>Email</p>
              <p className='text-muted-foreground'>info@gera-apartments.de</p>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <MapPin className='h-5 w-5 text-primary' />
            <div>
              <p className='font-medium'>Location</p>
              <p className='text-muted-foreground'>Gera, Thuringia, Germany</p>
            </div>
          </div>

          <div className='flex items-center space-x-3'>
            <Clock className='h-5 w-5 text-primary' />
            <div>
              <p className='font-medium'>Support Hours</p>
              <p className='text-muted-foreground'>24/7 Available</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='py-6'>
        <CardHeader>
          <CardTitle className='text-2xl'>Quick Response</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex items-start space-x-3'>
            <MessageCircle className='h-5 w-5 text-primary mt-1' />
            <div>
              <p className='font-medium mb-2'>Fast Communication</p>
              <p className='text-sm text-muted-foreground'>
                We typically respond to inquiries within 2-4 hours during
                business hours and within 24 hours on weekends. For urgent
                matters, please call us directly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='py-6'>
        <CardHeader>
          <CardTitle className='text-2xl'>Booking Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-3 text-sm'>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold'>
                1
              </div>
              <span>Send us your inquiry with preferred dates</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold'>
                2
              </div>
              <span>
                We&apos;ll confirm availability and send booking details
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold'>
                3
              </div>
              <span>Complete payment and receive check-in instructions</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold'>
                4
              </div>
              <span>Enjoy your stay in Gera!</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
