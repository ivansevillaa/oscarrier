import Link from "next/link";
import { Button, useColorMode } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("common");

  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle
        {" "}
        {colorMode == "light" ? "Dark" : "Light"}
      </Button>
      <Link href="/" passHref>
        <a href="replace">{t("home")}</a>
      </Link>
      <Link href="/about" passHref>
        <a href="replace">{t("about")}</a>
      </Link>
    </header>
  );
}
