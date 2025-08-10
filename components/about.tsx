/** @format */
import {Card, CardContent} from "@/components/ui/card"
import {client} from "@/sanity/lib/client"
import {upsellQuery, reviewsQuery} from "@/sanity/lib/queries"
import {Shield, Clock, Heart, Award} from "lucide-react"
import Link from "next/link"

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
  const reviews: Review[] = await client.fetch(reviewsQuery)

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        {/* Why choose section */}
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

        {/* Reviews preview */}
        {reviews?.length > 0 && (
          <div className='mb-16'>
            <h3 className='text-2xl font-bold mb-6 text-center'>
              What Our Guests Say
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
                Read all reviews →
              </Link>
            </div>
          </div>
        )}

        {/* About text */}
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
