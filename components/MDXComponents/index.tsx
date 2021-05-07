// TODO: fix this and create components and use them
import { Heading } from "@chakra-ui/react";

export default {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <Heading size="lg" fontWeight="bold" {...props} />
};
