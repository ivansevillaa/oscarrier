import {
  Box, chakra, Flex, Heading, Text
} from "@chakra-ui/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import PROFILE_SRC from "constants/global";
import { format } from "date-fns";

interface Props {
  title: string;
  date: string;
  cover: string;
}

function PostHeader({ title, date, cover }: Props) {
  const { t } = useTranslation("post");
  const NextImage = chakra(Image);

  // TODO: move styles to styles.js
  return (
    <Box marginBottom="8">
      <Heading
        as="h1"
        marginBottom="8"
        marginTop="8"
        textAlign="center"
      >
        {title}
      </Heading>
      <Flex alignItems="center" marginBottom="6">
        <Box
          height="28px"
          marginRight="2"
          position="relative"
          width="28px"
        >
          <NextImage
            src={PROFILE_SRC}
            // alt={t("alt")} TODO: add alt
            layout="fill"
            objectFit="cover"
            borderRadius="100%"
          />
        </Box>
        {/* TODO: use locales, and create a Date component */}
        <Text fontSize="sm">
          {t("author", { date: format(new Date(date), "MMMM d y") })}
        </Text>
      </Flex>
      <Image
        src={cover}
        alt="post picture"
        height={480}
        width={840}
      />
    </Box>
  );
}

export default PostHeader;
