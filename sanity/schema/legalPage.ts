import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'legalPage',
  title: 'Rechtliche Seite',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug (z. B. impressum)', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'inhalt', title: 'Inhalt', type: 'array', of: [{ type: 'block' }] }),
  ],
})
