export const sideImageSection = {
  name: 'sideImageSection',
  title: 'Side Image Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Text Body',
      type: 'blockContent',
    },
    {
      name: 'sideImage',
      title: 'Side image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'otherImages',
      title: 'Other Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
  ],
}
