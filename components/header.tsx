/** @format */
"use client"

import {useState} from "react"
import Link from "next/link"
import {Menu, Phone, ChevronDown} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navigation = [
    {name: "Startseite", href: "/"},
    {name: "Wohnungen", href: "/apartments"},
    {name: "Kontakt", href: "/contact"},
    {name: "Blog", href: "/blog"}
  ]

  // Ferienwohnungen
  const apartments = [
    {name: "Fewo Maria", href: "/apartments/ferienwohnung-maria"},
    {name: "Fewo Laura", href: "/apartments/ferienwohnung-laura"},
    {name: "Fewo Denisa", href: "/apartments/ferienwohnung-denisa"},
    {name: "Fewo Jasmin", href: "/apartments/ferienwohnung-jasmin"},
    {name: "Fewo Vivien", href: "/apartments/ferienwohnung-vivien"}
  ]

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link
            href='/'
            className='flex items-center justify-start flex-1 sm:flex-none sm:justify-center'>
            <Image
              src='/logo.svg'
              alt='Ferienwohnungen Gera'
              width={40}
              height={40}
              priority
              className='w-auto h-8 sm:h-10 object-contain'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-6 relative'>
            {navigation.map((item) =>
              item.name === "Wohnungen" ? (
                <div
                  key={item.name}
                  className='relative'
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}>
                  <div className='flex items-center cursor-pointer text-sm font-medium transition-colors hover:text-primary'>
                    <Link href={item.href}>{item.name}</Link>
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 pt-2 w-36 rounded-lg bg-white shadow-lg py-2 transition-all duration-200 ease-out ${
                      isDropdownOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}>
                    {apartments.map((apt) => (
                      <Link
                        key={apt.name}
                        href={apt.href}
                        className='block px-4 py-2 text-sm hover:bg-muted hover:text-primary'>
                        {apt.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-sm font-medium transition-colors hover:text-primary'>
                  {item.name}
                </Link>
              )
            )}
            <Button variant='phone'>
              <Phone /> +49 176 3449 2580
            </Button>
            <Button asChild>
              <Link href='/booking'>Jetzt Buchen</Link>
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
                    Jetzt Buchen
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
