import Image from "next/image";
import {
  chakra, Box, Heading, Text, useMultiStyleConfig
} from "@chakra-ui/react";

interface Props {
  // TODO: update this prop when the integration with cms happen
  post: string;
  variant?: "wide" | "default";
}

export default function Card({ post, variant }: Props) {
  const styles = useMultiStyleConfig("Card", { variant });
  const NextImage = chakra(Image);

  // TODO: use real data
  return (
    <chakra.article __css={styles.article}>
      <Box __css={styles.imageWrapper}>
        <NextImage
          src="http://sigdeletras.com/images/blog/202004_react_leaflet/react.png"
          alt="post picture"
          layout="fill"
          objectFit="cover"
          __css={styles.image}
        />
      </Box>
      <Box __css={styles.infoWrapper}>
        <chakra.small fontSize="sm">January 18, 2021</chakra.small>
        <Heading fontSize="3xl" marginBottom="3">Super interesting title</Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Mollitia asperiores dolore
          repellat eos commodi. Harum maxime a eaque suscipit.
          Harum quo pariatur nemo iusto tempora, nihil ad fuga unde porro.
          {post}
        </Text>
      </Box>
    </chakra.article>
  );
}

Card.defaultProps = {
  variant: "default"
};
