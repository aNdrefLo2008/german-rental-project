/** @format */

import {Card, CardContent} from "@/components/ui/card"
import {client} from "@/sanity/lib/client"
import {upsellQuery} from "@/sanity/lib/queries"
import {Shield, Clock, Heart, Award} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "All our apartments are professionally cleaned and sanitized between stays."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our team is available around the clock to assist with any questions or concerns."
  },
  {
    icon: Heart,
    title: "Local Experience",
    description:
      "We provide insider tips and recommendations to help you experience Gera like a local."
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "Each apartment is carefully selected and maintained to our high standards."
  }
]

export async function About() {
  const upsell = await client.fetch(upsellQuery)

  console.log(upsell)

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Why Choose Our Apartments
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            We&apos;ve been providing exceptional short-term rental experiences
            in Gera for years, ensuring every guest feels at home.
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

        <div className='bg-muted/50 rounded-2xl p-8 md:p-12'>
          <div className='grid lg:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Your Home Away From Home in Gera
              </h3>
              <p className='text-muted-foreground mb-6'>
                Our 8 carefully curated apartments offer the perfect blend of
                comfort, convenience, and local charm. Whether you&apos;re
                visiting for business or pleasure, staying for a few days or
                several weeks, we have the perfect space for you.
              </p>
              <p className='text-muted-foreground'>
                Located in prime areas of Gera, each apartment is fully
                furnished and equipped with everything you need for a
                comfortable stay. From modern amenities to local insights,
                we&apos;re here to make your visit memorable.
              </p>
            </div>
            <div className='aspect-[4/3] rounded-xl overflow-hidden'>
              <img
                src='/placeholder.svg?height=400&width=500'
                alt='Gera city view'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

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
                <Link
                  href={upsell.ctaLink || "/"}
                  className='bg-primary text-white px-6 py-3 rounded-lg inline-block'>
                  Jetzt buchen
                </Link>
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
