import { ReactNode } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { chakra, Flex } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Flex
      flexDirection="column"
      margin="0 auto"
      maxWidth="1140px"
      minHeight="100vh"
      // TODO: remove padding for desktop view
      paddingX="4"
    >
      <Header />
      <chakra.main flexGrow={1}>
        {children}
      </chakra.main>
      <Footer />
    </Flex>
  );
}
