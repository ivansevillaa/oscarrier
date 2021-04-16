import { GetServerSidePropsContext } from "next";
import useTranslation from "next-translate/useTranslation";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <Heading as="h1">{t("title")}</Heading>
  );
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ""
    }
  };
}
