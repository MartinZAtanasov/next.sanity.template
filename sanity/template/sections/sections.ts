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
        {type: 'imageSection'},
        {type: 'doubleColumnsTextSection'},
        {type: 'listSection'},
        {type: 'sideImageSection'},
        {type: 'personalityCultHeroSection'},

        {type: 'iconsSection'},
        {type: 'backgroundImageSection'},
        {type: 'textSection'},
      ],
    },
  ],
}
