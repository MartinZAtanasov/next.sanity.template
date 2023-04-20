export const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      description: 'recommend title is between 50 and 70 characters.',
    },
    {
      name: 'description',
      title: 'SEO Description',
      type: 'string',
      description: 'recommend description is between 50 and 160 characters.',
    },
    {
      name: 'altBase',
      title: 'Image Alt Base',
      type: 'string',
    },
  ],
}
