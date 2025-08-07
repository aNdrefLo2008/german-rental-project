import { type SchemaTypeDefinition } from 'sanity'
import wohnung from './wohnung'
import faq from './faq'
import settings from './settings'
import review from './review'
import trustElement from './trustElement'
import upsell from './upsell'
import blogPost from './blogPost'
import legalPage from './legalPage'
import navItem from './navItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    wohnung,
    faq,
    settings,
    review,
    trustElement,
    upsell,
    blogPost,
    legalPage,
    navItem
  ]
}
