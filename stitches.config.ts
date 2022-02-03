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
      1: "14px",
      2: "16px",
      3: "18px",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
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
