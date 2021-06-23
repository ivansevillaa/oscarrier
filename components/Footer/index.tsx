import useTranslation from "next-translate/useTranslation";
import LanguageSelector from "@components/LanguageSelector";
import { chakra, List, ListItem } from "@chakra-ui/react";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <chakra.footer
      alignItems="center"
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      gridGap="6"
      justifyContent={{ base: "center", sm: "space-between" }}
      marginTop="12"
    >
      <List
        display="flex"
        gridGap="4"
      >
        <ListItem>
          <a href="https://twitter.com/oscarrier" target="_blank" rel="noreferrer">{t("twitter")}</a>
        </ListItem>
        <ListItem>
          <a href="https://github.com/ivansevillaa" target="_blank" rel="noreferrer">{t("github")}</a>
        </ListItem>
        <ListItem>
          <a href="https://www.buymeacoffee.com/oscarrier" target="_blank" rel="noreferrer">{t("coffee")}</a>
        </ListItem>
      </List>
      <LanguageSelector />
    </chakra.footer>
  );
}
