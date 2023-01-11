export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'workExperience' }],
        },
        {
          name: 'fr',
          title: 'French',
          type: 'array',
          of: [{ type: 'workExperience' }],
        },
      ],
    },
  ],
};
