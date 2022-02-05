import { styled } from "../../../stitches.config";

const Text = styled("span", {
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  display: "block",

  defaultVariants: {
    size: "medium",
    color: "contrast",
  },

  variants: {
    color: {
      pink: {
        color: "$pink10",
      },
      green: {
        color: "$green10",
      },
      blue: {
        color: "$blue10",
      },
      contrast: {
        color: "$hiContrast",
      },
    },
    size: {
      1: {
        fontSize: "$2",
      },
      2: {
        fontSize: "$3",
      },
      3: {
        fontSize: "$5",
      },
      4: {
        fontSize: "$7",
      },
      5: {
        fontSize: "$9",
      },
    },
  },
});

export default Text;
