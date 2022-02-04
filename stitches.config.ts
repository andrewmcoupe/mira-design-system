import { createStitches, createTheme, globalCss } from "@stitches/react";
import {
  yellow,
  gray,
  blue,
  red,
  green,
  pink,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  pinkDark,
} from "@radix-ui/colors";

export const globalStyles = globalCss({
  "*": { margin: 0 },
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

export const { styled, getCssText } = createStitches({
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
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...yellow,
      ...pink,
    },
    fontSizes: {
      1: "1rem",
      "1.5": "1.5rem",
      2: "2rem",
      "2.5": "2.5rem",
      3: "3rem",
      "3.5": "3.5rem",
      4: "4rem",
      "4.5": "4.5rem",
    },
    space: {
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
  },
});

const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...pinkDark,
  },
});
