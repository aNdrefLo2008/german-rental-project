/** @format */

"use client"

import type React from "react"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <Card className='py-6'>
      <CardHeader>
        <CardTitle className='text-2xl'>Send us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className=''>
              <Label className='mb-1' htmlFor='firstName'>
                First Name
              </Label>
              <Input className='mb-2' id='firstName' required />
            </div>
            <div className=''>
              <Label className='mb-1' htmlFor='lastName'>
                Last Name
              </Label>
              <Input className='mb-2' id='lastName' required />
            </div>
          </div>

          <div className=''>
            <Label className='mb-1' htmlFor='email'>
              Email
            </Label>
            <Input className='mb-2' id='email' type='email' required />
          </div>

          <div className=''>
            <Label className='mb-1' htmlFor='phone'>
              Phone (optional)
            </Label>
            <Input className='mb-2' id='phone' type='tel' />
          </div>

          <div className='my-6'>
            <Label className='mb-1' htmlFor='apartment'>
              Interested Apartment
            </Label>
            <Select>
              <SelectTrigger
                id='apartment'
                className='min-h-[2.5rem] rounded-md border border-input bg-background px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50'>
                <SelectValue placeholder='Select an apartment' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='any'>Any available apartment</SelectItem>
                <SelectItem value='1'>Modern City Center Apartment</SelectItem>
                <SelectItem value='2'>Spacious Family Suite</SelectItem>
                <SelectItem value='3'>Business Traveler Studio</SelectItem>
                <SelectItem value='4'>Cozy Garden Apartment</SelectItem>
                <SelectItem value='5'>Executive Penthouse</SelectItem>
                <SelectItem value='6'>Historic District Loft</SelectItem>
                <SelectItem value='7'>Modern Minimalist Studio</SelectItem>
                <SelectItem value='8'>Family Comfort Suite</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='grid grid-cols-2 gap-4 my-6'>
            <div className=''>
              <Label className='mb-1' htmlFor='checkin'>
                Check-in Date
              </Label>
              <Input className='mb-2' id='checkin' type='date' />
            </div>
            <div className=''>
              <Label className='mb-1' htmlFor='checkout'>
                Check-out Date
              </Label>
              <Input className='mb-2' id='checkout' type='date' />
            </div>
          </div>

          <div className='my-6'>
            <Label className='mb-1' htmlFor='guests'>
              Number of Guests
            </Label>
            <Select>
              <SelectTrigger className='min-h-[2.5rem] rounded-md border border-input bg-background px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50'>
                <SelectValue placeholder='Select number of guests' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1 Guest</SelectItem>
                <SelectItem value='2'>2 Guests</SelectItem>
                <SelectItem value='3'>3 Guests</SelectItem>
                <SelectItem value='4'>4 Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='my-6'>
            <Label className='mb-1' htmlFor='message'>
              Message
            </Label>
            <Textarea
              id='message'
              placeholder='Tell us about your stay requirements, special requests, or any questions you have...'
              rows={4}
            />
          </div>

          <Button type='submit' className='w-full' disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
