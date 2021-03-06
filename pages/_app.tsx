import {useEffect} from "react";
import {useRouter} from "next/router";
import Chakra from "@components/Chakra";
import {pageview} from "@utils/gtag";

import type {AppProps} from "next/app";

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}
