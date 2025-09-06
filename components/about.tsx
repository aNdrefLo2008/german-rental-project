/** @format */

import {client} from "@/sanity/lib/client"
import {upsellQuery, reviewsQuery} from "@/sanity/lib/queries"
import {Card, CardContent} from "@/components/ui/card"
import {Shield, Clock, Heart, Award} from "lucide-react"
import ReviewsSection from "./ReviewSection"
import Image from "next/image"
import Link from "next/link"
import {Button} from "./ui/button"

const features = [
  {
    icon: Shield,
    title: "Sicher & geschützt",
    description:
      "Alle unsere Apartments werden professionell gereinigt und zwischen den Aufenthalten desinfiziert."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Unser Team steht rund um die Uhr zur Verfügung, um bei Fragen oder Anliegen zu helfen."
  },
  {
    icon: Heart,
    title: "Lokale Erfahrung",
    description:
      "Wir geben Insider-Tipps und Empfehlungen, damit Sie Gera wie ein Einheimischer erleben können."
  },
  {
    icon: Award,
    title: "Qualität garantiert",
    description:
      "Jedes Apartment wird sorgfältig ausgewählt und nach unseren hohen Standards gepflegt."
  }
]

export default async function About() {
  const aboutImg: string =
    "https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/gera-unterkunft-wohung-ferien-urlaub-moebliert-wlan-zentrum-07545-guenstig-buchen-mieten-819x1024.jpg.pagespeed.ce.9vj7uj4Rr_.jpg"

  const upsell = await client.fetch(upsellQuery)
  const reviews = await client.fetch(reviewsQuery)

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ihre Vorteile als Geschäftskunde & Privatgast bei uns
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6'>
            Seit 2021 betreiben wir unsere Ferienwohnungen in Gera und wissen
            genau, worauf es bei einem komfortablen Aufenthalt ankommt – egal ob
            für ein Wochenende, mehrere Wochen oder sogar 6–12 Monate.
          </p>

          <ul className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6 list-disc list-inside space-y-2'>
            <li>
              Kostenlose Parkmöglichkeiten – max. 5 Minuten fußläufig oder
              direkt vor der Unterkunft
            </li>
            <li>
              Frische Bettwäsche &amp; Handtücher inklusive, mit
              Zwischenreinigung alle 14 Tage (auf Wunsch öfter)
            </li>
            <li>
              Sicher &amp; geschützt – alle Wohnungen werden professionell
              gereinigt und gründlich desinfiziert
            </li>
            <li>
              Persönlicher Service – unser deutschsprachiges Team in Gera ist
              nahezu rund um die Uhr erreichbar
            </li>
            <li>
              Qualität garantiert – sorgfältig ausgewählte Apartments,
              eingerichtet nach hohen Standards
            </li>
            <li>
              Vollständig ausgestattete Wohnungen, auch für Langzeitaufenthalte
              geeignet
            </li>
            <li>
              Transparente Abrechnung – Rechnung mit ausgewiesener Umsatzsteuer
              <br />
              (7 %, Stand: 2025)
            </li>
          </ul>

          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Damit vereinen unsere Ferienwohnungen die Flexibilität einer eigenen
            Unterkunft mit dem Komfort eines Hotels – genau das, was
            Geschäftsreisende und Privatgäste in Gera suchen.
          </p>
        </div>

        {/* Features */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='text-center border-none shadow-none py-6'>
              <CardContent className='pt-6'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <feature.icon className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{feature.title}</h3>
                <p className='text-muted-foreground text-sm'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews (Client Component) */}
        {reviews?.length > 0 && <ReviewsSection reviews={reviews} />}

        <div className='bg-muted/50 rounded-2xl p-8 md:p-12 mt-16'>
          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Linke Seite: Textboxen mit Checkboxen */}
            <div className='space-y-6'>
              <div className='bg-white rounded-xl p-6 shadow'>
                <label className='flex items-center space-x-3'>
                  <input type='checkbox' className='h-5 w-5 text-primary' />
                  <span className='text-muted-foreground'>
                    Option 1: Infos über Gera
                  </span>
                </label>
              </div>
              <div className='bg-white rounded-xl p-6 shadow'>
                <label className='flex items-center space-x-3'>
                  <input type='checkbox' className='h-5 w-5 text-primary' />
                  <span className='text-muted-foreground'>
                    Option 2: Sehenswürdigkeiten
                  </span>
                </label>
              </div>
              <div className='bg-white rounded-xl p-6 shadow'>
                <label className='flex items-center space-x-3'>
                  <input type='checkbox' className='h-5 w-5 text-primary' />
                  <span className='text-muted-foreground'>
                    Option 3: Unterkunftsmöglichkeiten
                  </span>
                </label>
              </div>
            </div>

            {/* Rechte Seite: Bilder */}
            <div className='grid grid-rows-3 gap-4'>
              <div className='row-span-2 overflow-hidden rounded-xl'>
                <Image
                  src={
                    "https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/gera-unterkunft-wohung-ferien-urlaub-moebliert-wlan-zentrum-07545-guenstig-buchen-mieten-819x1024.jpg.pagespeed.ce.9vj7uj4Rr_.jpg"
                  }
                  alt='Gera Hauptbild'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <div className='overflow-hidden rounded-xl'>
                  <Image
                    src={
                      "https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/gera-vacation-apartment-booking-premium-airbnb-booking-fewo-central-thueringen-vacation-pension-wlan-819x1024.jpg.pagespeed.ce.90KjGntYZR.jpg"
                    }
                    alt='Kleines Bild 1'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='overflow-hidden rounded-xl'>
                  <Image
                    src={
                      "https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohnung-gera-mieten-buchen-fewo-monteurzimmer-hotel-alternative-07545-jasmin-maria.jpg.pagespeed.ce.cTPQgVrEXu.jpg"
                    }
                    alt='Kleines Bild 2'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='overflow-hidden rounded-xl'>
                  <Image
                    src={
                      "https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohung-gera-07545-markt-zentrum-stadt-mieten-thueringen-fewo-unterkunft-kurzurlaub-692x1024.jpg.pagespeed.ce.NX4hCQRGPF.jpg"
                    }
                    alt='Kleines Bild 3'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upsell */}
        {upsell && (
          <div className='rounded-2xl p-8 md:p-12 mt-12 shadow-xl'>
            <div className='flex lg:flex-row flex-col gap-8 items-center justify-center'>
              <div className='flex flex-col items-start'>
                <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                  {upsell.title}
                </h3>
                <p className='text-muted-foreground mb-4 lg:max-w-3xl'>
                  {upsell.beschreibung}
                </p>
                {upsell.preis && (
                  <p className='text-lg font-semibold mb-6'>{upsell.preis}</p>
                )}
                <Button className='p-6 text-white'>
                  <Link href={upsell.ctaLink || "/"}>{upsell.ctaText}</Link>
                </Button>
              </div>
              {upsell.imageUrl && (
                <div className='aspect-[4/3] rounded-xl overflow-hidden'>
                  <Image
                    src={upsell.imageUrl}
                    alt={upsell.title}
                    width={728}
                    height={408}
                    className='w-full h-full object-cover shadow-lg'
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
