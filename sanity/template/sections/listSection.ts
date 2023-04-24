import {Rule} from 'sanity'

export const listSection = {
  name: 'listSection',
  title: 'List Section',
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
      name: 'list',
      tile: 'List*',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Minimum of 4 items',
      validation: (Rule: Rule) => Rule.required().min(4),
    },
  ],
}
