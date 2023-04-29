import {Rule} from 'sanity'

export const labelValueImage = {
  name: 'labelValueImage',
  title: 'Label - Value - Image',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
