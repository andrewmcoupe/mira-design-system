import { styled, theme } from "../../../stitches.config";

type ColorKeys = keyof typeof theme["colors"];

const unfilledCompoundStylesFor = (color: ColorKeys) => ({
  backgroundColor: "transparent",
  color: `$${color}`,
  borderColor: `$${color}`,
});

const Badge = styled("span", {
  padding: "$1",
  borderRadius: "$pill",
  border: "solid 1px currentColor",
  px: "$2",

  defaultVariants: {
    color: "red",
    unfilled: false,
  },
  compoundVariants: [
    {
      unfilled: true,
      color: "red",
      css: unfilledCompoundStylesFor("red10"),
    },
    {
      unfilled: true,
      color: "blue",
      css: unfilledCompoundStylesFor("blue10"),
    },
    {
      unfilled: true,
      color: "green",
      css: unfilledCompoundStylesFor("green10"),
    },
    {
      unfilled: true,
      color: "contrast",
      css: unfilledCompoundStylesFor("hiContrast"),
    },
  ],
  variants: {
    unfilled: {
      true: {
        backgroundColor: "transparent",
      },
    },
    color: {
      red: {
        backgroundColor: "$red10",
        color: "white",
      },
      green: {
        backgroundColor: "$green10",
        color: "white",
      },
      blue: {
        backgroundColor: "$blue10",
        color: "white",
      },
      contrast: {
        backgroundColor: "$hiContrast",
        color: "$loContrast",
      },
    },
  },
});

export default Badge;
