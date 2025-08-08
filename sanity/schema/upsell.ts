import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'upsell',
  title: 'Upsell-Angebot',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string' }),
    defineField({ name: 'beschreibung', title: 'Beschreibung', type: 'text' }),
    defineField({ name: 'preis', title: 'Preis (optional)', type: 'string' }),
    defineField({ name: 'zeitlichBegrenzt', title: 'Zeitlich begrenzt anzeigen?', type: 'boolean' }),
    defineField({ name: 'image', title: 'Bild', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'url' }),
  ],
})
