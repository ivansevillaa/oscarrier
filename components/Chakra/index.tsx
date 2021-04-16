import { ReactNode } from "react";

import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from "@chakra-ui/react";

interface Props {
  cookies?: string;
  children: ReactNode;
}

export default function Chakra({ cookies, children }: Props) {
  const colorModeManager = typeof cookies == "string"
    ? cookieStorageManager(cookies)
    : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

Chakra.defaultProps = {
  cookies: undefined
};
