export const doubleColumnsTextSection = {
  name: 'doubleColumnsTextSection',
  title: 'Double Columns Text Section',
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
      name: 'body1',
      title: 'Text Body 1',
      type: 'blockContent',
    },
    {
      name: 'body2',
      title: 'Text Body 2',
      type: 'blockContent',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonNavigatesTo',
      title: 'Button Navigates To',
      type: 'string',
    },
  ],
};
