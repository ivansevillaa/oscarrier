import Image from "next/image";
import Link from "next/link";
import useNextBlurhash from "use-next-blurhash";
import {
  chakra,
  Box,
  Heading,
  Text,
  useMultiStyleConfig
} from "@chakra-ui/react";
import {format} from "date-fns";
import {PostMetadata} from "@ts/post";
import {CardVariantType} from "@ts/card";

interface Props {
  post: PostMetadata;
  variant: CardVariantType;
}

export default function Card({post, variant}: Props): JSX.Element {
  const [blurDataUrl] = useNextBlurhash(post.blurHash);
  const styles = useMultiStyleConfig("Card", {variant});
  const NextImage = chakra(Image);

  return (
    <chakra.article __css={styles.article}>
      <Link href={`/blog/${post.slug}`} passHref>
        <chakra.a href="replace" __css={styles.anchor}>
          <Box __css={styles.imageWrapper}>
            <NextImage
              src={post.cover}
              alt="post picture"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              layout="fill"
              objectFit="cover"
              __css={styles.image}
            />
          </Box>
          <Box __css={styles.infoWrapper}>
            {/* TODO: add locale for date and create a Date component */}
            <chakra.small fontSize="sm">
              {format(new Date(post.date.replace(/-/g, "/")), "MMMM d, y")}
            </chakra.small>
            <Heading fontSize="3xl" marginBottom="3">
              {post.title}
            </Heading>
            <Text>{post.summary}</Text>
          </Box>
        </chakra.a>
      </Link>
    </chakra.article>
  );
}
