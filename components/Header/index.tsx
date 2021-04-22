import Link from "next/link";
import {
  IconButton, useColorMode, chakra, List, ListItem
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("common");

  return (
    <chakra.header
      alignItems="center"
      display="flex"
      gridGap="6"
      height="20"
    >
      <IconButton
        aria-label={`Toogle color mode to ${colorMode == "light" ? "dark" : "light"}`}
        icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
      <nav>
        <List>
          <ListItem>
            <Link href="/" passHref>
              <a href="replace">{t("home")}</a>
            </Link>
          </ListItem>
        </List>
      </nav>
    </chakra.header>
  );
}
