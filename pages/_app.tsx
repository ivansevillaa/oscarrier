import type { AppProps } from "next/app";
import Chakra from "@components/Chakra";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}
