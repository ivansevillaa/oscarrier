import { GetServerSidePropsContext } from "next";
import useTranslation from "next-translate/useTranslation";
import { Heading } from "@chakra-ui/react";
import Card from "@components/Card";
import PostList from "@components/PostList";

export default function Home() {
  const { t } = useTranslation("home");

  // TODO: remove this with the integration
  const BLOG_POSTS = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];

  return (
    <>
      <Heading as="h1">{t("title")}</Heading>
      <PostList>
        {BLOG_POSTS.map((post, index) => (
          <Card post={post} variant={index == 0 ? "wide" : "default"} />
        ))}
      </PostList>
    </>
  );
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ""
    }
  };
}
