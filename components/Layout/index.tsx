import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { chakra, Flex, Divider } from "@chakra-ui/react";
import { CustomMeta, Meta } from "@ts/meta";

interface Props {
  children: ReactNode;
  customMeta?: CustomMeta;
}

export default function Layout({ children, customMeta }: Props) {
  const { asPath, locale } = useRouter();

  // TODO: move to locales files or constant file
  const meta: Meta = {
    title: "Oscarrier",
    description: "JavaScript developer. I like to create web products and write things that I think are interesting.",
    image: "https://www.oscarrier.me/images/profile.jpg",
    type: "website",
    ...customMeta
  };

  // TODO: move "https://oscarrier.me" to a constant or something, check other places where I use that
  // TODO: move "@oscarrier" to a constant or something (maybe a global
  // file also the title and other could be to a global file)
  return (
    <Flex
      flexDirection="column"
      margin="0 auto"
      maxWidth="1140px"
      minHeight="100vh"
      paddingX={{ base: "4", xl: 0 }}
      marginBottom="14"
    >
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        <meta property="og:url" content={`https://oscarrier.me/${locale}${asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Oscarrier" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@oscarrier" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <chakra.main flexGrow={1} marginBottom="32">
        {children}
      </chakra.main>
      <Divider />
      <Footer />
    </Flex>
  );
}
