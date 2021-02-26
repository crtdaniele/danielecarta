// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { SnippetJS, Locales } = initSchema(schema);

export { SnippetJS, Locales };
