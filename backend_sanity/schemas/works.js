export default {
  name: 'works',
  title: 'Works',
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
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'object',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'array',
          of: [
            {
              name: 'tag',
              title: 'Tag',
              type: 'string',
            },
          ],
        },
        {
          title: 'French',
          name: 'fr',
          type: 'array',
          of: [
            {
              name: 'tag',
              title: 'Tag',
              type: 'string',
            },
          ],
        },
      ],

      // type: 'array',
      // of: [
      //   {
      //     name: 'tag',
      //     title: 'Tag',
      //     type: 'string',
      //   },
      // ],
    },
  ],
};
