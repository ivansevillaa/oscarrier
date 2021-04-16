import { GetServerSidePropsContext } from "next";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Heading as="h1">Home Page</Heading>
  );
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ""
    }
  };
}
