export default {
  name: 'mapDetail',
  title: 'Map-Detail',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mapImg',
      title: 'Map-Img',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'note',
          title: 'Note',
          fields: [
            {
              name: 'key',
              title: 'Key',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
