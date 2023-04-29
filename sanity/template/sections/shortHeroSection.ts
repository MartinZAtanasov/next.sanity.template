import {Rule} from 'sanity'

export const shortHeroSection = {
  name: 'shortHeroSection',
  title: 'Short Hero Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary*',
      type: 'blockContent',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
