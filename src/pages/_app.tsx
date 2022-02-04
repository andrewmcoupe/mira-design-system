import type { AppProps } from "next/app";
import "@fontsource/recursive";
import { globalStyles } from "../../stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
