/** @format */

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {MapPin, Star, Users} from "lucide-react"
import heroExampleImg from "../public/Hero-Example.jpg"
import Image from "next/image"

export function Hero() {
  return (
    <section className='relative bg-gradient-to-br from-primary/10 via-background to-secondary/10'>
      <div className='container mx-auto px-4 py-16 md:py-24'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h1 className='text-4xl md:text-6xl font-bold leading-none mb-6'>
              Premium Short-Term
              <span className='text-primary block'>Rentals in Gera</span>
            </h1>
            <p className='text-lg text-muted-foreground mb-8 max-w-lg'>
              Discover our collection of 8 beautifully furnished apartments in
              the heart of Gera. Perfect for business travelers, tourists, and
              extended stays.
            </p>

            <div className='flex flex-wrap gap-6 mb-8'>
              <div className='flex items-center space-x-2'>
                <MapPin className='h-5 w-5 text-primary' />
                <span className='text-sm font-medium'>
                  Central Gera Location
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Star className='h-5 w-5 text-primary' />
                <span className='text-sm font-medium'>5-Star Rated</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Users className='h-5 w-5 text-primary' />
                <span className='text-sm font-medium'>1-4 Guests</span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button size='xl' asChild>
                <Link href='/apartments'>View Apartments</Link>
              </Button>
              <Button size='xl' variant='outline' asChild>
                <Link href='/contact'>Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className='relative'>
            <div className='aspect-[4/3] rounded-2xl overflow-hidden bg-muted'>
              <Image
                src={heroExampleImg || "/placeholder.svg?height=600&width=800"}
                alt='Modern apartment interior'
                className='w-full h-full object-cover'
              />
            </div>
            <div
              className='absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-6
                rounded-xl p-4 shadow-lg
                bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)"
              }}>
              <div className='text-xl sm:text-2xl font-bold text-primary'>
                8
              </div>
              <div className='text-xs sm:text-sm text-gray-700'>
                Apartments Available
              </div>
            </div>

            <div
              className='absolute sm:-top-6 -top-3 sm:-right-6 -right-3
                rounded-xl p-4 shadow-lg
                bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)"
              }}>
              <div className='text-xl sm:text-2xl font-bold text-primary'>
                500+
              </div>
              <div className='text-xs sm:text-sm text-gray-700'>
                Guests Every Year
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
