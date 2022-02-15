import { styled } from "../../../stitches.config";

const Text = styled("span", {
  lineHeight: "1.5",
  margin: "0",
  fontWeight: 400,
  display: "block",
  marginBottom: "$2",

  defaultVariants: {
    size: "3",
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
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$7",
      },
    },
  },
});

export default Text;
