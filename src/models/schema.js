export const schema = {
  models: {
    SnippetJS: {
      name: 'SnippetJS',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        title: {
          name: 'title',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        snippet: {
          name: 'snippet',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: 'SnippetJS',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    Locales: {
      name: 'Locales',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        languages: {
          name: 'languages',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        locales: {
          name: 'locales',
          isArray: false,
          type: 'AWSJSON',
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: 'Locales',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  version: 'c6477f84e9a09dc35a872bff648ed88d',
};
