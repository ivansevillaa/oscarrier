import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  GetStaticPropsResult
} from "next";
import hydrate from "next-mdx-remote/hydrate";
import Layout from "@components/Layout";
import MDXComponents from "@components/MDXComponents";
import PostLayout from "@components/PostLayout";
import {getFileBySlug, getFilesWithLocales} from "@utils/mdx";
import {Path, PostMetadata} from "@ts/post";
import {MdxRemote} from "next-mdx-remote/types";

interface Props {
  frontMatter: PostMetadata;
  source: MdxRemote.Source;
}

export default function Blog({source, frontMatter}: Props): JSX.Element {
  const content = hydrate(source, {components: MDXComponents});

  return (
    <Layout
      customMeta={{
        title: `${frontMatter.title} - Ivan Sevilla`,
        description: frontMatter.summary,
        image: `https://www.oscarrier.me${frontMatter.cover}`,
        date: frontMatter.date,
        type: "article"
      }}
    >
      <PostLayout frontMatter={frontMatter}>{content}</PostLayout>
    </Layout>
  );
}

export async function getStaticPaths({
  locales
}: GetStaticPathsContext): Promise<{
  paths: Path[];
  fallback: boolean;
}> {
  if (typeof locales === "undefined") {
    throw new Error("💥 locales must not be undefined 💥");
  }

  const paths = await getFilesWithLocales(locales);

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({
  params,
  locale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  if (typeof params?.slug !== "string") {
    throw new Error("💥 Something went wrong, params must be an string 💥");
  }

  if (typeof locale !== "string") {
    throw new Error("💥 Something went wrong, locale must be an string 💥");
  }

  const post = await getFileBySlug(params?.slug, locale);

  return {
    props: post
  };
}
