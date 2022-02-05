import { styled } from "../../../stitches.config";

const Button = styled("button", {
  borderRadius: "$2",
  padding: "$2",
  fontSize: "$3",
  cursor: "pointer",

  "&:hover": {
    outlineOffset: "1px",
  },

  "&:focus": {
    outlineOffset: "1px",
    outlineColor: "$pink11",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.5",
  },

  defaultVariants: {
    variant: "red",
  },
  variants: {
    pill: {
      true: {
        borderRadius: "$pill",
      },
    },
    size: {
      large: {
        fontSize: "$2",
        padding: "$3",
      },
    },
    stretch: {
      true: {
        width: "100%",
      },
    },
    variant: {
      red: {
        backgroundColor: "$red10",
        color: "white",
        border: "1px solid $red10",

        "&:hover": {
          backgroundColor: "$red11",
        },
      },
      transparentRed: {
        backgroundColor: "transparent",
        color: "$red10",
        border: "1px solid $red10",

        "&:hover": {
          backgroundColor: "$red11",
        },
      },
      green: {
        backgroundColor: "$green10",
        border: "1px solid $green10",
        color: "white",
        "&:hover": {
          backgroundColor: "$green11",
        },
      },
      blue: {
        backgroundColor: "$blue10",
        border: "1px solid $blue10",
        color: "white",
        "&:hover": {
          backgroundColor: "$blue11",
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
