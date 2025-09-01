/** @format */

"use client"

import {useState} from "react"
import Link from "next/link"
import {Menu, Phone} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    {name: "Startseite", href: "/"},
    {name: "Wohnungen", href: "/apartments"},
    {name: "Kontakt", href: "/contact"},
    {name: "Blog", href: "/blog"}
  ]

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-start'>
            <Image
              src='/logo.svg'
              alt='Ferienwohnungen Gera'
              width={40}
              height={40}
              priority
              className='w-full h-8 sm:h-10 object-contain'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-6'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium transition-colors hover:text-primary'>
                {item.name}
              </Link>
            ))}
            <Button variant='phone'>
              <Phone /> +49 176 3449 2580
            </Button>
            <Button asChild>
              <Link href='/booking'>Jetzt buchen</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='lg:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Menü umschalten</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right'>
              <div className='flex flex-col space-y-4 mx-6 mt-10'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='text-sm font-medium transition-colors hover:text-primary'
                    onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <Button className='w-full h-10' variant='phone'>
                  <Phone />
                  +49 176 3449 2580
                </Button>
                <Button asChild className='w-full h-10'>
                  <Link href='/booking' onClick={() => setIsOpen(false)}>
                    Jetzt buchen
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
