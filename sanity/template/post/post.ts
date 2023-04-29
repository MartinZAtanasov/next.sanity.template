import {Rule, Slug} from 'sanity'

export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Post title*',
      type: 'string',
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
        'Must be unique between all posts. Examples: `/blog/my-post-1`, `/blog/my-post-2`.',
    },
    {
      name: 'image',
      title: 'Image*',
      type: 'image',
      description: 'Will be shown as thumbnail and hero image.',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent',
      description: 'Will be shown below the hero section.',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockContent',
      validation: (Rule: Rule) => Rule.required(),
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
