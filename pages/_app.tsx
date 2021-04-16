import type { AppProps } from "next/app";
import Chakra from "@components/Chakra";
import Layout from "@components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}
