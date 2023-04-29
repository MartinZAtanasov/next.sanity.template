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
    {
      name: 'image',
      title: 'Image*',
      type: 'image',
      description:
        'Will be shown when you share this page link. Advisable aspect ration is 2:1 width to height',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
