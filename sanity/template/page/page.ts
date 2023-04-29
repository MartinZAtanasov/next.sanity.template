import {Rule, Slug} from 'sanity'

export const page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page title*',
      type: 'string',
      description: 'Used internally for a label',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug*',
      type: 'slug',
      validation: (Rule: Rule) =>
        Rule.custom((value: Slug) => {
          if (!value) return 'Required'

          const isValid = /^\/(?:[\w-]+\/)*[\w-]*$/.test(value.current || '')
          return isValid || 'Not a valid slug'
        }),
      description:
        'Must be unique between all pages. Examples: `/`, `/about-me`,  `/blog/category/post`',
    },
    {
      name: 'seo',
      tile: 'SEO*',
      type: 'seo',
      validation: (Rule: Rule) => Rule.required(),
      description: 'Search engine optimization',
    },
    {
      name: 'sections',
      title: 'Sections*',
      type: 'sections',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
