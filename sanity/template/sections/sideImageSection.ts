import {Rule} from 'sanity'

export const sideImageSection = {
  name: 'sideImageSection',
  title: 'Side Image Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Text body*',
      type: 'blockContent',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'sideImage',
      title: 'Side image*',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'otherImages',
      title: 'Other images*',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      description: 'Will be shown above the text body. Must be one or two items.',
      validation: (Rule: Rule) => Rule.required().max(2),
    },
  ],
}
