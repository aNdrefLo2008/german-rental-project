import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'frage', title: 'Frage', type: 'string' }),
    defineField({ name: 'antwort', title: 'Antwort', type: 'text' }),
  ],
})
