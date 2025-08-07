import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navItem',
  title: 'Navigationseintrag',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string' }),
    defineField({ name: 'url', title: 'Link / URL', type: 'string' }),
  ],
})
