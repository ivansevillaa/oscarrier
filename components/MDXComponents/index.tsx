/* eslint-disable react/jsx-props-no-spreading */
// TODO: fix this and create components and use them
import { Heading } from "@chakra-ui/react";

export default {
  h1: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props: any) => <Heading size="lg" fontWeight="bold" {...props} />
};
