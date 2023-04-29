import {Rule} from 'sanity'

export const navigation = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
      description: 'Used internally for a label',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image*',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'contacts',
      tile: 'Contacts*',
      type: 'array',
      of: [
        {
          type: 'labelValueImage',
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'links',
      title: 'Links*',
      type: 'array',
      of: [
        {
          type: 'pageLink',
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
