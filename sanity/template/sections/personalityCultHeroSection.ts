import {Rule} from 'sanity'

export const personalityCultHeroSection = {
  name: 'personalityCultHeroSection',
  title: 'Personality Cult Hero Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption*',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image*',
      type: 'image',
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
