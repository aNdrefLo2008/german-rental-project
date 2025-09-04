/** @format */

import Link from "next/link"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import {Phone} from "lucide-react"
import Olive_Mehrle from "../public/olive-mehrle-gera-fewo.jpg"

export default function AboutUs() {
  return (
    <section className='bg-background py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='flex gap-16 md:gap-4 lg:gap-20 flex-col md:flex-row items-center justify-center'>
          <div className='lg:mr-0 mr-6 text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Über uns</h2>
            <div className='space-y-4 text-muted-foreground leading-relaxed max-w-xl'>
              <p>
                Seit 2021 betreiben wir mit viel Leidenschaft unsere
                Ferienwohnungen in Gera. In dieser Zeit durften wir bereits über
                547 Gäste willkommen heißen – vom entspannten Wochenendbesucher
                über längere Aufenthalte bis hin zu Firmenkunden, die für sechs
                bis zwölf Monate ein Zuhause auf Zeit gesucht haben.
              </p>
              <p>
                Aus den vielen Aufenthalten haben wir gelernt, was wirklich
                zählt: eine ruhige Lage, moderne und saubere Ausstattung,
                flexible Lösungen für Kurz- und Langzeitgäste sowie ein
                verlässlicher Service, der auf individuelle Wünsche eingeht.
              </p>
              <p>
                Unser Team für Ihren Aufenthalt: Oliver (Betreiber), Jens
                (Hausmeister), Steffi &amp; Manuela (Reinigung), Annett
                (Organisation). Gemeinsam sorgen wir dafür, dass Ihr Aufenthalt
                in Gera so angenehm wie möglich wird.
              </p>
              <p>Wir freuen uns darauf, Sie bald bei uns begrüßen zu dürfen!</p>
            </div>

            {/* Buttons */}
            <div className='mt-8 flex flex-col sm:flex-row gap-4 md:justify-start justify-center'>
              <Button size='lg' asChild>
                <Link href='/booking'>Verfügbarkeit prüfen</Link>
              </Button>
              <Button size='lg' variant='phone' asChild>
                <a href='tel:+49123456789' className='flex items-center gap-2'>
                  <Phone className='h-5 w-5' />
                  +49 157 3449 2580
                </a>
              </Button>
            </div>
          </div>

          <div className='flex justify-center'>
            <Image
              src={Olive_Mehrle}
              alt='Über uns'
              width={500}
              height={500}
              className='rounded-xl lg:aspect-auto md:aspect-square aspect-auto object-cover w-full max-w-lg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
