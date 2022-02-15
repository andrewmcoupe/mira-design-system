import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@fontsource/poppins";
import { darkTheme, globalStyles } from "../../stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
