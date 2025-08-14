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
    alert(
      "Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden."
    )
  }

  return (
    <Card className='py-6'>
      <CardHeader>
        <CardTitle className='text-2xl'>
          Senden Sie uns eine Nachricht
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label className='mb-1' htmlFor='firstName'>
                Vorname
              </Label>
              <Input className='mb-2' id='firstName' required />
            </div>
            <div>
              <Label className='mb-1' htmlFor='lastName'>
                Nachname
              </Label>
              <Input className='mb-2' id='lastName' required />
            </div>
          </div>

          <div>
            <Label className='mb-1' htmlFor='email'>
              E-Mail
            </Label>
            <Input className='mb-2' id='email' type='email' required />
          </div>

          <div>
            <Label className='mb-1' htmlFor='phone'>
              Telefon (optional)
            </Label>
            <Input className='mb-2' id='phone' type='tel' />
          </div>

          <div className='my-6'>
            <Label className='mb-1' htmlFor='apartment'>
              Gewünschte Wohnung
            </Label>
            <Select>
              <SelectTrigger
                id='apartment'
                className='min-h-[2.5rem] rounded-md border border-input bg-background px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50'>
                <SelectValue placeholder='Wählen Sie eine Wohnung' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='any'>
                  Beliebige verfügbare Wohnung
                </SelectItem>
                <SelectItem value='1'>
                  Modernes City-Center Apartment
                </SelectItem>
                <SelectItem value='2'>Geräumige Familiensuite</SelectItem>
                <SelectItem value='3'>Business-Reisender Studio</SelectItem>
                <SelectItem value='4'>Gemütliches Gartenapartment</SelectItem>
                <SelectItem value='5'>Executive Penthouse</SelectItem>
                <SelectItem value='6'>Loft im historischen Viertel</SelectItem>
                <SelectItem value='7'>
                  Modernes minimalistisches Studio
                </SelectItem>
                <SelectItem value='8'>Familiensuite Komfort</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='grid grid-cols-2 gap-4 my-6'>
            <div>
              <Label className='mb-1' htmlFor='checkin'>
                Check-in Datum
              </Label>
              <Input className='mb-2' id='checkin' type='date' />
            </div>
            <div>
              <Label className='mb-1' htmlFor='checkout'>
                Check-out Datum
              </Label>
              <Input className='mb-2' id='checkout' type='date' />
            </div>
          </div>

          <div className='my-6'>
            <Label className='mb-1' htmlFor='guests'>
              Anzahl der Gäste
            </Label>
            <Select>
              <SelectTrigger className='min-h-[2.5rem] rounded-md border border-input bg-background px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50'>
                <SelectValue placeholder='Anzahl der Gäste wählen' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1 Gast</SelectItem>
                <SelectItem value='2'>2 Gäste</SelectItem>
                <SelectItem value='3'>3 Gäste</SelectItem>
                <SelectItem value='4'>4 Gäste</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='my-6'>
            <Label className='mb-1' htmlFor='message'>
              Nachricht
            </Label>
            <Textarea
              id='message'
              placeholder='Teilen Sie uns Ihre Anforderungen, besondere Wünsche oder Fragen zu Ihrem Aufenthalt mit...'
              rows={4}
            />
          </div>

          <Button type='submit' className='w-full' disabled={isSubmitting}>
            {isSubmitting ? "Senden..." : "Nachricht senden"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
