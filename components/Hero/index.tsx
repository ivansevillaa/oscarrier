import Image from "next/image";
import {Box, chakra, Heading, Text} from "@chakra-ui/react";

interface Props {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export default function Hero({
  image,
  alt,
  title,
  description
}: Props): JSX.Element {
  const NextImage = chakra(Image);

  return (
    <chakra.section
      alignItems="center"
      display="flex"
      flexDirection="column"
      gridGap="2"
      marginY="16"
    >
      <Box height="150px" position="relative" width="150px">
        <NextImage
          src={image}
          alt={alt}
          layout="fill"
          priority
          objectFit="cover"
          borderRadius="100%"
        />
      </Box>
      <Heading as="h1">{title}</Heading>
      <Text role="paragraph" fontSize="xl" maxWidth="50ch" textAlign="center">
        {description}
      </Text>
    </chakra.section>
  );
}
