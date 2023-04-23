import {Rule} from 'sanity'

export const imageSection = {
  name: 'imageSection',
  title: 'Image Section',
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
      name: 'image',
      title: 'Image*',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Text body*',
      type: 'blockContent',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'isImageRight',
      title: 'Image in right',
      type: 'boolean',
      description: 'Image can be in left or right.',
      initialValue: true,
      options: {
        layout: 'checkbox',
      },
    },
  ],
}
