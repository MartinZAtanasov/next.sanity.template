import {Rule} from 'sanity'

export const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO title*',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'SEO description*',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'altBase',
      title: 'Image alt base*',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
