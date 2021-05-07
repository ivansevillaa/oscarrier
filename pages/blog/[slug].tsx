import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import hydrate from "next-mdx-remote/hydrate";
import MDXComponents from "@components/MDXComponents";
import PostLayout from "@components/PostLayout";
import { getFileBySlug, getFilesWithLocales } from "@utils/mdx";
import { MDXSource, PostMetadata } from "@ts/post";

interface Props {
  frontMatter: PostMetadata;
  source: MDXSource;
}

export default function Blog({ source, frontMatter }: Props) {
  const content = hydrate(source, { components: MDXComponents });

  return (
    <PostLayout frontMatter={frontMatter}>
      {content}
    </PostLayout>
  );
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  if (typeof locales == "undefined") {
    return {};
  }

  const paths = await getFilesWithLocales(locales);

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params, locale }: GetStaticPropsContext) {
  const post = await getFileBySlug(params?.slug, locale);
  return {
    props: post
  };
}
