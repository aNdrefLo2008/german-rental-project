/** @format */

import {client} from "@/sanity/lib/client"
import {upsellQuery, reviewsQuery} from "@/sanity/lib/queries"
import {Card, CardContent} from "@/components/ui/card"
import {
  Shield,
  Clock,
  Heart,
  Award,
  Car,
  BedDouble,
  Users,
  Home,
  FileText,
  Check
} from "lucide-react"
import ReviewsSection from "./ReviewSection"
import Image from "next/image"
import Link from "next/link"
import {Button} from "./ui/button"

const features = [
  {
    icon: Car,
    title: "Kostenlose Parkmöglichkeiten",
    description:
      "Immer max. 5 Minuten fußläufig oder direkt vor der Unterkunft verfügbar."
  },
  {
    icon: BedDouble,
    title: "Frische Bettwäsche & Handtücher",
    description:
      "Inklusive, mit Zwischenreinigung alle 14 Tage (auf Wunsch auch öfter)."
  },
  {
    icon: Shield,
    title: "Sicher & geschützt",
    description:
      "Alle Wohnungen werden professionell gereinigt und zwischen den Aufenthalten gründlich desinfiziert."
  },
  {
    icon: Users,
    title: "Persönlicher Service",
    description:
      "Unser deutschsprachiges Team in Gera mit vier Mitarbeitern ist nahezu rund um die Uhr für Sie erreichbar."
  },
  {
    icon: Award,
    title: "Qualität garantiert",
    description:
      "Jedes Apartment wird sorgfältig ausgewählt, nach hohen Standards eingerichtet und laufend gepflegt."
  },
  {
    icon: Home,
    title: "Vollständig ausgestattete Wohnungen",
    description:
      "Ideal auch für Langzeitaufenthalte – komfortabel und praktisch eingerichtet."
  },
  {
    icon: FileText,
    title: "Transparente Abrechnung",
    description:
      "Sie erhalten eine Rechnung mit ausgewiesener Umsatzsteuer in Höhe von 7 % (Stand: 2025)."
  },
  {
    icon: Heart,
    title: "Lokale Erfahrung",
    description:
      "Wir geben Insider-Tipps und Empfehlungen, damit Sie Gera wie ein Einheimischer erleben können."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Unser Team steht rund um die Uhr zur Verfügung, um bei Fragen oder Anliegen zu helfen."
  }
]

export default async function About() {
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
            {/* Linke Seite: Bilder */}
            <div className='grid grid-cols-4 gap-4'>
              <div className='col-span-3 overflow-hidden rounded-xl'>
                <Image
                  width={1200}
                  height={1200}
                  src='https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/gera-unterkunft-wohung-ferien-urlaub-moebliert-wlan-zentrum-07545-guenstig-buchen-mieten-819x1024.jpg.pagespeed.ce.9vj7uj4Rr_.jpg'
                  alt='Gera Hauptbild'
                  className='w-full h-full object-cover aspect-square md:aspect-[4/5] lg:aspect-[5/4]'
                />
              </div>
              <div className='col-span-1 grid grid-rows-3 gap-4'>
                <div className='overflow-hidden rounded-xl'>
                  <Image
                    width={400}
                    height={400}
                    src='https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/gera-vacation-apartment-booking-premium-airbnb-booking-fewo-central-thueringen-vacation-pension-wlan-819x1024.jpg.pagespeed.ce.90KjGntYZR.jpg'
                    alt='Kleines Bild 1'
                    className='aspect-square w-full h-full object-cover'
                  />
                </div>
                <div className='overflow-hidden rounded-xl'>
                  <Image
                    width={400}
                    height={400}
                    src='https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohnung-gera-mieten-buchen-fewo-monteurzimmer-hotel-alternative-07545-jasmin-maria.jpg.pagespeed.ce.cTPQgVrEXu.jpg'
                    alt='Kleines Bild 2'
                    className='aspect-square w-full h-full object-cover'
                  />
                </div>
                <div className='overflow-hidden rounded-xl'>
                  <Image
                    width={400}
                    height={400}
                    src='https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/ferienwohung-gera-07545-markt-zentrum-stadt-mieten-thueringen-fewo-unterkunft-kurzurlaub-692x1024.jpg.pagespeed.ce.NX4hCQRGPF.jpg'
                    alt='Kleines Bild 3'
                    className='aspect-square w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>

            {/* Rechte Seite: Textbox mit Titel, Paragraphen, Checkboxen und Button */}
            <div className='space-y-6'>
              <h2 className='md:text-4xl text-3xl font-bold'>
                Übernachten in Gera: Inmitten von Kunst und Kultur
              </h2>
              <p className='text-muted-foreground font-light'>
                In der umweltfreundlichen Stadt Gera erleben Sie die Magie von
                Kunst und Kultur aus nächster Nähe. Als Geburtsstadt von Otto
                Dix, einem der berühmtesten Künstler und Grafiker des 20.
                Jahrhunderts, können Sie in dem Otto Dix Geburtshaus etwa 450
                Werke des Künstlers bewundern. Seine Werke beeindrucken durch
                eine breite stilistische Vielfalt.
              </p>

              {/* Checkboxen, statisch, größer und gleichmäßig */}
              <div className='space-y-4'>
                <div className='bg-white rounded-xl p-5 shadow flex items-center'>
                  <div className='bg-gray-100 rounded-sm border border-gray-300 p-1'>
                    <Check className='font-medium h-4 w-4 text-gray-600' />
                  </div>
                  <span className='ml-4 font-medium'>
                    Gera ist mit ca. 90.000 Einwohnern 3. größte Stadt
                    Thüringens
                  </span>
                </div>

                <div className='bg-white rounded-xl p-5 shadow flex items-center'>
                  <div className='bg-gray-100 rounded-sm border border-gray-300 p-1'>
                    <Check className='font-medium h-4 w-4 text-gray-600' />
                  </div>
                  <span className='ml-4 font-medium'>
                    Sitz von SRH Hochschule für Gesundheit
                  </span>
                </div>

                <div className='bg-white rounded-xl p-5 shadow flex items-center'>
                  <div className='bg-gray-100 rounded-sm border border-gray-300 p-1'>
                    <Check className='font-medium h-4 w-4 text-gray-600' />
                  </div>

                  <span className='ml-4 font-medium'>
                    Reich an leckeren Restaurants, Bars, Fitnessstudios, schönen
                    Parks & Einkaufsmöglichkeiten, einer Schwimmhalle, Kino &
                    vielem mehr
                  </span>
                </div>
              </div>

              <Button className='p-5'>
                <Link href='/blog'>Hier gehts zur Restaurantempfehlung</Link>
              </Button>
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
                <Button className='p-4 text-white'>
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
