import { ReactNode } from "react";
import { Box, chakra } from "@chakra-ui/react";
import PostFooter from "@components/PostFooter";
import PostHeader from "@components/PostHeader";
import Subscribe from "@components/Subscribe";
import { PostMetadata } from "@ts/post";

interface Props {
  children: ReactNode;
  frontMatter: PostMetadata;
}

export default function PostLayout({ children, frontMatter }: Props) {
  return (
    <chakra.section maxWidth="840px" margin="0 auto">
      <PostHeader
        title={frontMatter.title}
        date={frontMatter.date}
        cover={frontMatter.cover}
        blurHash={frontMatter.blurHash}
      />
      <Box>
        {children}
      </Box>
      <PostFooter slug={frontMatter.slug} title={frontMatter.title} />
      <Subscribe />
    </chakra.section>
  );
}
