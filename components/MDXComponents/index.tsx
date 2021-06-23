/* eslint-disable react/jsx-props-no-spreading */
import { Heading, Text, Link } from "@chakra-ui/react";

import { IndexKeyToTheEnd, IndexKeyToStart, IDKeyToStart } from "./BlogDemo";

export default {
  h2: (props: unknown) => <Heading size="lg" marginTop="10" marginBottom="6" {...props} />,
  p: (props: unknown) => <Text fontSize="lg" my="7" {...props} />,
  a: (props: unknown) => <Link color="teal.500" isExternal {...props} />,
  // react-key-prop demo
  IndexKeyToTheEnd,
  IndexKeyToStart,
  IDKeyToStart
};
