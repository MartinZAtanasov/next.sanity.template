import {Rule} from 'sanity'

export const doubleColumnsTextSection = {
  name: 'doubleColumnsTextSection',
  title: 'Double Columns Text Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'body1',
      title: 'Text body left*',
      type: 'blockContent',
    },
    {
      name: 'body2',
      title: 'Text body right*',
      type: 'blockContent',
    },
    {
      name: 'images',
      title: 'Images*',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule: Rule) => Rule.required().min(2).max(4),
      description: 'Minimum of two and maximum of four images.',
    },
  ],
}
