/* eslint-disable global-require */
import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import renderToString from "next-mdx-remote/render-to-string";
import MDXComponents from "@components/MDXComponents";
import {Path, PostMetadata} from "@ts/post";
import {MdxRemote} from "next-mdx-remote/types";

// TODO: improve functions. apply DRY.

export async function getFiles(): Promise<string[]> {
  return fs.readdirSync("content/blog");
}

export async function getFilesWithLocales(
  locales: Array<string>
): Promise<Path[]> {
  const paths: Array<Path> = [];

  const posts = await getFiles();

  posts.forEach(post => {
    locales.forEach(locale => {
      const fileToRead = `content/blog/${post}/index.${locale}.mdx`;

      if (fs.existsSync(fileToRead)) {
        paths.push({params: {slug: post}, locale});
      }
    });
  });

  return paths;
}

export async function getFileBySlug(
  slug: string,
  locale: string
): Promise<{source: MdxRemote.Source; frontMatter: PostMetadata}> {
  const src = fs.readFileSync(
    `content/blog/${slug}/index.${locale}.mdx`,
    "utf-8"
  );

  const {content, data} = matter(src);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-slug"),
        require("remark-code-titles")
      ],
      rehypePlugins: [mdxPrism]
    },
    scope: data
  });

  return {
    source: mdxSource,
    frontMatter: data as PostMetadata
  };
}

export async function getAllFilesFrontMatter(
  locale: string
): Promise<PostMetadata[]> {
  const files = await getFiles();

  const disordedFiles = files.reduce(
    (allPosts: Array<PostMetadata>, postSlug: string) => {
      const fileToRead = `content/blog/${postSlug}/index.${locale}.mdx`;

      if (!fs.existsSync(fileToRead)) {
        return [...allPosts];
      }

      const source = fs.readFileSync(fileToRead, "utf-8");
      const {data} = matter(source);

      return [
        {
          ...(data as PostMetadata),
          slug: postSlug.replace(".mdx", "")
        },
        ...allPosts
      ];
    },
    []
  );

  const orderedFiles = disordedFiles.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return orderedFiles;
}
