import { styled } from "../../../stitches.config";

const Button = styled("button", {
  borderRadius: "$3",
  padding: "$3",
  fontSize: "$4",
  cursor: "pointer",
  userSelect: "none",
  height: "33px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "max-content",
  border: "none",

  "&:hover": {
    opacity: "0.8",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.5",
  },

  defaultVariants: {
    variant: "red",
  },
  variants: {
    stretch: {
      true: {
        width: "100%",
      },
    },
    variant: {
      red: {
        backgroundColor: "$red10",
        color: "white",
      },
      transparentRed: {
        backgroundColor: "transparent",
        color: "$red10",
      },
      green: {
        backgroundColor: "$green10",
        color: "white",
      },
      blue: {
        backgroundColor: "$blue10",
        color: "white",
      },
      orange: {
        backgroundColor: "$orange10",
        color: "white",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$hiContrast",

        "&:hover": {
          backgroundColor: "$gray4",
        },
      },
    },
  },
});

export default Button;
