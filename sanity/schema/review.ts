import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Bewertung',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'bewertung', title: 'Bewertungstext', type: 'text' }),
    defineField({ name: 'sterne', title: 'Sterne (1–5)', type: 'number', validation: Rule => Rule.min(1).max(5) }),
    defineField({ name: 'quelle', title: 'Quelle (Google, Booking etc.)', type: 'string' }),
    defineField({ name: 'bild', title: 'Profilbild (optional)', type: 'image' }),
  ],
})
