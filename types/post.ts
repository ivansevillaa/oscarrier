export type SlugType = string | Array<string> | undefined;

export interface PostMetadata {
  cover: string;
  date: string;
  slug: string;
  summary: string;
  title: string;
}

export interface MDXSource {
  compiledSource: string;
  renderedOutput: string;
  scope: Record<string, unknown>;
}

export interface Params {
  slug: SlugType;
}

export interface Path {
  params: Params;
  locale: string;
}
