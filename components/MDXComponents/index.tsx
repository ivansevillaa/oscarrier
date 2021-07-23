/* eslint-disable react/jsx-props-no-spreading */
import { Heading, Text, Link } from "@chakra-ui/react";

import { Highlighted } from "./Text";
import {
  IndexKeyToTheEnd, IndexKeyToStart, IDKeyToStart, SameErrorBoundary, ResetUI
} from "./BlogDemo";

export default {
  // common
  h2: (props: unknown) => <Heading size="lg" marginTop="10" marginBottom="6" {...props} />,
  p: (props: unknown) => <Text fontSize="lg" my="7" {...props} />,
  a: (props: unknown) => <Link color="teal.500" isExternal {...props} />,
  Highlighted,

  // react-key-prop demo
  IndexKeyToTheEnd,
  IndexKeyToStart,
  IDKeyToStart,

  // react-error-boundary demo
  SameErrorBoundary,
  ResetUI
};
