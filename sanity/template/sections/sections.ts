export const sections = {
  name: 'sections',
  title: 'Sections',
  type: 'object',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'doubleColumnsTextSection' },
        { type: 'iconsSection' },
        { type: 'imageSection' },
        { type: 'sideImageSection' },
        { type: 'backgroundImageSection' },
        { type: 'textSection' },
      ],
    },
  ],
};
