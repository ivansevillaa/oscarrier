import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { locales, asPath } = useRouter();
  const { t } = useTranslation("common");

  return (
    <footer>

      <ul>
        <li>
          <a href="https://twitter.com/oscarrier" target="_blank" rel="noreferrer">{t("twitter")}</a>
        </li>
        <li>
          <a href="https://github.com/ivansevillaa" target="_blank" rel="noreferrer">{t("github")}</a>
        </li>
        { locales?.map((locale) => (
          <li key={locale}>
            <Link href={asPath} locale={locale} passHref>
              <a href="replace">{t(`${locale}`)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
