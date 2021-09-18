import {ChangeEvent} from "react";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import {Select} from "@chakra-ui/react";

export default function LanguageSelector(): JSX.Element {
  const {locales, locale: currentLocale, asPath, push} = useRouter();
  const {t} = useTranslation("common");

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    push(asPath, asPath, {locale: event.target.value});
  }

  return (
    <Select
      width="40"
      defaultValue={currentLocale}
      onChange={handleLanguageChange}
    >
      {locales?.map(locale => (
        <option key={locale} value={locale}>
          {t(`${locale}`)}
        </option>
      ))}
    </Select>
  );
}
