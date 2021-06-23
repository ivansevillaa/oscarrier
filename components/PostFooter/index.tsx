import {
  Box, Link, List, ListItem, chakra
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { TwitterShareButton } from "react-share";

function generateDiscussUrl(slug: string) {
  // TODO: move this to a constant o .env file
  return `https://twitter.com/search?q=${encodeURIComponent(
    // TODO: maybe is better pass the route as params using useRouter
    `https://oscarrier.vercel.app/${slug}`
  )}`;
}

function generateEditUrl(slug: string) {
  // TODO: add locale, and pass the route as params using useRouter
  return `https://github.com/ivansevillaa/oscarrier/edit/main/content/blog/${slug}/index.en.mdx`;
}

interface Props {
  slug: string;
  title: string;
}

function PostFooter({ slug, title }: Props) {
  const { t } = useTranslation("post");
  const TwitterShare = chakra(TwitterShareButton);

  return (
    <Box d="flex" flexDir="column" alignItems="flex-end" mt="20">
      <List>
        <ListItem mb="2">
          {/* TODO: create a base style for Link */}
          <Link
            href={generateDiscussUrl(slug)}
            isExternal
            color="teal.500"
            fontSize="lg"
            _hover={{
              textTransform: "none"
            }}
          >
            {t("discussTw")}
          </Link>
          <Box as="span">
            {" • "}
          </Box>
          <Link
            href={generateEditUrl(slug)}
            isExternal
            color="teal.500"
            fontSize="lg"
            _hover={{
              textTransform: "none"
            }}
          >
            {t("edit")}
          </Link>
        </ListItem>
      </List>
      {/* TODO: use useRouter, move via to a constant */}
      {/* TODO: add styles */}
      <TwitterShare
        url={`https://oscarrier.vercel.app/${slug}`}
        title={title}
        via="oscarrier"
        resetButtonStyle={false}
        fontSize="lg"
      >
        {t("shareTw")}
      </TwitterShare>
    </Box>
  );
}

export default PostFooter;
