export const iconsSection = {
  name: 'iconsSection',
  title: 'Icons Section',
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
      name: 'iconsTitles',
      tile: 'Icons and Titles',
      type: 'array',
      of: [
        {
          type: 'labelImage',
        },
      ],
    },
  ],
}
