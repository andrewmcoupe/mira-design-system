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
      gradient: {
        backgroundColor: "rgb(255,48,48)",
        backgroundImage:
          "linear-gradient(90deg, rgba(255,48,48,1) 4%, rgba(118,226,43,1) 48%, rgba(75,225,255,1) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
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
        fontSize: "$4",
      },
      4: {
        fontSize: "$5",
      },
    },
  },
});

export default Text;
