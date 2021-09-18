/* eslint-disable react/jsx-props-no-spreading */
import {ReactNode} from "react";
import {Heading, Link, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";

import {Image} from "./Image";
import {Highlighted} from "./Text";
import {
  IndexKeyToTheEnd,
  IndexKeyToStart,
  IDKeyToStart,
  SameErrorBoundary,
  ResetUI
} from "./BlogDemo";

export default {
  // common
  h2: (props: unknown): JSX.Element => (
    <Heading size="lg" marginTop="10" marginBottom="6" {...props} />
  ),
  h3: (props: unknown): JSX.Element => (
    <Heading as="h3" size="md" marginTop="5" marginBottom="3" {...props} />
  ),
  p: (props: unknown): JSX.Element => <Text fontSize="lg" my="7" {...props} />,
  a: (props: unknown): JSX.Element => (
    <Link color="teal.500" isExternal {...props} />
  ),
  ul: ({children}: {children: ReactNode}): JSX.Element => (
    <List spacing="1">{children}</List>
  ),
  li: ({children}: {children: ReactNode}): JSX.Element => (
    <ListItem fontSize="lg">
      <ListIcon as={ArrowForwardIcon} w="5" h="5" color="teal.500" />
      {children}
    </ListItem>
  ),
  Image,
  Highlighted,

  // react-key-prop demo
  IndexKeyToTheEnd,
  IndexKeyToStart,
  IDKeyToStart,

  // react-error-boundary demo
  SameErrorBoundary,
  ResetUI
};
