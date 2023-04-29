import {Rule} from 'sanity'

export const pageLink = {
  name: 'pageLink',
  title: 'Page Link',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'page'}],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
