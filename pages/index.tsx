import { Button, useColorMode } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <header>
        <Button onClick={toggleColorMode}>
          Toggle
          {" "}
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <h1>Home Page</h1>
    </>
  );
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ""
    }
  };
}
