import {GetStaticPropsContext, GetStaticPropsResult} from "next";
import useTranslation from "next-translate/useTranslation";
import Card from "@components/Card";
import Hero from "@components/Hero";
import PostList from "@components/PostList";
import Layout from "@components/Layout";
import {getAllFilesFrontMatter} from "@utils/mdx";
import {PostMetadata} from "@ts/post";
import {PROFILE_SRC} from "@constants/global";

interface Props {
  posts: Array<PostMetadata>;
}

export default function Home({posts}: Props): JSX.Element {
  const {t} = useTranslation("home");

  return (
    <Layout>
      <Hero
        image={PROFILE_SRC}
        alt={t("alt")}
        title={t("title")}
        description={t("description")}
      />
      <PostList>
        {posts.map((post, index) => (
          <Card
            key={post.slug}
            post={post}
            variant={index === 0 ? "wide" : "default"}
          />
        ))}
      </PostList>
    </Layout>
  );
}

export async function getStaticProps({
  locale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  if (typeof locale !== "string") {
    throw new Error("💥 Something went wrong, locale must be an string 💥");
  }

  const posts = await getAllFilesFrontMatter(locale);

  return {
    props: {
      posts
    }
  };
}
