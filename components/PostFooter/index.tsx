import {Box, Link, List, ListItem, chakra} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import {TwitterShareButton} from "react-share";

function generateEditUrl(slug: string) {
  // TODO: add locale, and pass the route as params using useRouter
  return `https://github.com/ivansevillaa/oscarrier/edit/main/content/blog/${slug}/index.en.mdx`;
}

interface Props {
  slug: string;
  title: string;
}

function PostFooter({slug, title}: Props): JSX.Element {
  const {t} = useTranslation("post");
  const TwitterShare = chakra(TwitterShareButton);

  return (
    <Box d="flex" flexDir="column" alignItems="flex-end" mt="20">
      <List>
        <ListItem mb="2">
          {/* TODO: create a base style for Link */}
          {/* TODO: use useRouter, move via to a constant */}
          <TwitterShare
            url={`https://oscarrier.me/blog/${slug}`}
            title={title}
            via="oscarrier"
            resetButtonStyle={false}
            fontSize="lg"
            color="teal.500"
          >
            {t("shareTw")}
          </TwitterShare>
          <Box as="span">{" • "}</Box>
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
    </Box>
  );
}

export default PostFooter;
