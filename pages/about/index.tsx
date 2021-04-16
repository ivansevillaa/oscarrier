import { GetServerSidePropsContext } from "next";
import useTranslation from "next-translate/useTranslation";
import { Text } from "@chakra-ui/react";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <Text>{t("greeting")}</Text>
  );
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ""
    }
  };
}
