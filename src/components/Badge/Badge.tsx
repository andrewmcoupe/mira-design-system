import { styled } from "../../../stitches.config";

const Badge = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "$2",
  maxWidth: "max-content",
  padding: "3px 8px",
  borderRadius: "$1",

  defaultVariants: {
    color: "red",
  },
  variants: {
    color: {
      red: {
        backgroundColor: "$red4",
        color: "$red11",
      },
      green: {
        backgroundColor: "$green4",
        color: "$green11",
      },
      blue: {
        backgroundColor: "$blue4",
        color: "$blue11",
      },
      orange: {
        backgroundColor: "$orange4",
        color: "$orange11",
      },
      contrast: {
        backgroundColor: "$gray9",
        color: "$loContrast",
      },
    },
  },
});

export default Badge;
