/** @format */

"use client"

import {useState} from "react"
import Link from "next/link"
import {Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    {name: "Startseite", href: "/"},
    {name: "Apartments", href: "/apartments"},
    {name: "Kontakt", href: "/contact"},
    {name: "Blog", href: "/blog"}
  ]

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center'>
            <Image
              width={40}
              height={40}
              src='/logo.svg'
              alt='Ferienwohnungen Gera'
              className='h-10 w-auto'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium transition-colors hover:text-primary'>
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link href='/apartments'>Jetzt buchen</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
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
                <Button asChild className='w-full h-10'>
                  <Link href='/apartments' onClick={() => setIsOpen(false)}>
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
