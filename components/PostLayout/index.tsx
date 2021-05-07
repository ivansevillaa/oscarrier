import { ReactNode } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import useTranslation from "next-translate/useTranslation";
import { PostMetadata } from "@ts/post";

interface Props {
  children: ReactNode;
  frontMatter: PostMetadata;
}

export default function PostLayout({ children, frontMatter }: Props) {
  const { t } = useTranslation("post");

  return (
    <Box maxWidth="840px" margin="0 auto">
      <Heading
        as="h1"
        marginBottom="8"
        textAlign="center"
      >
        {frontMatter.title}
      </Heading>
      {/* TODO: use locales, and create a Date component */}
      <Text fontSize="sm">
        {t("author", { date: format(new Date(frontMatter.date), "MMMM d y") })}
      </Text>
      {children}
    </Box>
  );
}
