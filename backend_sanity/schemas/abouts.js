export default {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'string',
        },
        {
          title: 'French',
          name: 'fr',
          type: 'string',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'string',
        },
        {
          title: 'French',
          name: 'fr',
          type: 'string',
        },
      ],
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
