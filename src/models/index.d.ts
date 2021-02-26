import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from '@aws-amplify/datastore';

export declare class SnippetJS {
  readonly id: string;
  readonly title?: string;
  readonly snippet?: string;
  constructor(init: ModelInit<SnippetJS>);
  static copyOf(
    source: SnippetJS,
    mutator: (draft: MutableModel<SnippetJS>) => MutableModel<SnippetJS> | void
  ): SnippetJS;
}

export declare class Locales {
  readonly id: string;
  readonly languages?: string;
  readonly locales?: string;
  constructor(init: ModelInit<Locales>);
  static copyOf(
    source: Locales,
    mutator: (draft: MutableModel<Locales>) => MutableModel<Locales> | void
  ): Locales;
}
