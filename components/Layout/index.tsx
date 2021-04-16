import { ReactNode } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { chakra, Flex } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <chakra.main flexGrow={1}>
        {children}
      </chakra.main>
      <Footer />
    </Flex>
  );
}
