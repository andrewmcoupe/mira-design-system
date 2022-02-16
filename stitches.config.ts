import { createStitches, createTheme, globalCss } from "@stitches/react";

import {
  orange,
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  pinkDark,
  orangeDark,
} from "@radix-ui/colors";

export const globalStyles = globalCss({
  "*": { margin: 0, fontFamily: "$poppins, sans-serif" },
  "*::before": {
    boxSizing: "border-box",
  },
  "*::after": {
    boxSizing: "border-box",
  },
  body: {
    lineHeight: 1.5,
    WebkitFontSmoothing: "antialiased",
  },
  img: {
    display: "block",
    maxWidth: "100%",
  },
  picture: {
    display: "block",
    maxWidth: "100%",
  },
  video: {
    display: "block",
    maxWidth: "100%",
  },
  canvas: {
    display: "block",
    maxWidth: "100%",
  },
  svg: {
    display: "block",
    maxWidth: "100%",
  },
});

export const { styled, getCssText, theme, css } = createStitches({
  utils: {
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  theme: {
    fonts: {
      system: "system-ui",
      recursive: "Recursive",
      poppins: '"Poppins", sans-serif',
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...orange,
      cardBg: "white",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "27px",
      8: "35px",
      9: "59px",
      10: "72px",
      11: "96px",
    },
    space: {
      xs: "6px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
    },
    fontWeights: {
      1: "300",
      2: "400",
      3: "500",
      4: "600",
      5: "700",
      6: "800",
      7: "900",
      bold: "bold",
    },
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      circle: "50%",
      pill: "9999px",
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    loContrast: "hsl(206,10%,5%)",
    hiContrast: "hsl(206,10%,60%)",
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...pinkDark,
    ...orangeDark,
    cardBg: "hsl(206,10%,15%)",
  },
});
