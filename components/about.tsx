/** @format */
import {Card, CardContent} from "@/components/ui/card"
import {client} from "@/sanity/lib/client"
import {upsellQuery, reviewsQuery} from "@/sanity/lib/queries"
import {Shield, Clock, Heart, Award} from "lucide-react"
import Link from "next/link"
import {Button} from "./ui/button"

type Review = {
  _id: string
  name: string
  bewertung: string
  sterne: number
  quelle?: string
  bildUrl?: string
}

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

export async function About() {
  const aboutImg: string =
    "https://ferienwohnungen-gera.de/wp-content/uploads/2022/11/gera-unterkunft-wohung-ferien-urlaub-moebliert-wlan-zentrum-07545-guenstig-buchen-mieten-819x1024.jpg.pagespeed.ce.9vj7uj4Rr_.jpg"
  const upsell = await client.fetch(upsellQuery)
  const reviews: Review[] = await client.fetch(reviewsQuery)

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Übernachten in Gera: Inmitten von Kunst und Kultur
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            In der umweltfreundlichen Stadt Gera erleben Sie die Magie von Kunst
            und Kultur aus nächster Nähe. Als Geburtsstadt von Otto Dix, einem
            der berühmtesten Künstler und Grafiker des 20. Jahrhunderts, können
            Sie in dem Otto Dix Geburtshaus etwa 450 Werke des Künstlers
            bewundern. Seine Werke beeindrucken durch eine breite stilistische
            Vielfalt.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
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

        {/* Reviews preview */}
        {reviews?.length > 0 && (
          <div className='mb-16'>
            <h3 className='text-2xl font-bold mb-6 text-center'>
              Was unsere Gäste sagen
            </h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 items-center justify-center'>
              {reviews.slice(0, 3).map((review: Review) => (
                <div
                  key={review._id}
                  className='p-6 border rounded-lg bg-white shadow-sm flex flex-col'>
                  <div className='flex items-center mb-4'>
                    <img
                      src={
                        review.bildUrl ||
                        "https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1"
                      }
                      alt={review.name}
                      width={40}
                      height={40}
                      className='rounded-full mr-3 object-cover'
                    />
                    <div>
                      <p className='font-semibold'>{review.name}</p>
                      <p className='text-sm text-gray-500'>{review.quelle}</p>
                    </div>
                  </div>
                  <div className='flex mb-2 text-yellow-500'>
                    {"★".repeat(review.sterne)}
                    {"☆".repeat(5 - review.sterne)}
                  </div>
                  <p className='text-gray-700 flex-grow'>{review.bewertung}</p>
                </div>
              ))}
            </div>
            <div className='text-center mt-6'>
              <Link
                href='/reviews'
                className='text-primary font-semibold hover:underline'>
                Alle Bewertungen lesen →
              </Link>
            </div>
          </div>
        )}

        {/* About text */}
        <div className='bg-muted/50 rounded-2xl p-8 md:p-12'>
          <div className='grid lg:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Übernachten in Gera: Inmitten von Kunst und Kultur
              </h3>
              <p className='text-muted-foreground mb-6'>
                In der umweltfreundlichen Stadt Gera erleben Sie die Magie von
                Kunst und Kultur aus nächster Nähe.
              </p>
              <p className='text-muted-foreground mb-6'>
                Als Geburtsstadt von Otto Dix, einem der berühmtesten Künstler
                und Grafiker des 20. Jahrhunderts, können Sie in dem Otto Dix
                Geburtshaus etwa 450 Werke des Künstlers bewundern. Seine Werke
                beeindrucken durch eine breite stilistische Vielfalt.
              </p>
              <Button className='p-6 text-white'>
                <Link href='/blog'>Wichtige Infos</Link>
              </Button>
            </div>
            <div className='aspect-[4/3] rounded-xl overflow-hidden'>
              <img
                src={aboutImg || "/placeholder.svg?height=400&width=500"}
                alt='Gera city view'
                className='w-full h-full object-cover'
              />
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
                  <Link href={upsell.ctaLink || "/"}>Jetzt buchen</Link>
                </Button>
              </div>
              {upsell.imageUrl && (
                <div className='aspect-[4/3] rounded-xl overflow-hidden'>
                  <img
                    src={upsell.imageUrl}
                    alt={upsell.title}
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
