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
    outlineOffset: "1px",
  },

  "&:focus": {
    outlineOffset: "1px",
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

        "&:hover": {
          backgroundColor: "$red11",
        },
      },
      transparentRed: {
        backgroundColor: "transparent",
        color: "$red10",

        "&:hover": {
          backgroundColor: "$red11",
        },
      },
      green: {
        backgroundColor: "$green10",
        color: "white",

        "&:hover": {
          backgroundColor: "$green11",
        },
      },
      blue: {
        backgroundColor: "$blue10",
        color: "white",

        "&:hover": {
          backgroundColor: "$blue11",
        },
      },
      orange: {
        backgroundColor: "$orange10",
        color: "white",

        "&:hover": {
          backgroundColor: "$orange11",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        border: "none",
        color: "$hiContrast",
        "&:hover": {
          backgroundColor: "$gray4",
        },
      },
    },
  },
});

export default Button;
