export const imageSection = {
  name: 'imageSection',
  title: 'Image Section',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Text Body',
      type: 'blockContent',
    },
    {
      name: 'isImageRight',
      title: 'Image In Right',
      type: 'boolean',
      description: 'Image can be in left or right',
      initialValue: true,
      options: {
        layout: 'checkbox',
      },
    },
  ],
}
