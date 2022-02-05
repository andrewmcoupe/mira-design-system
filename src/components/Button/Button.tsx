import { styled } from "../../../stitches.config";

const Button = styled("button", {
  borderRadius: "$2",
  padding: "$2",
  fontSize: "$1",
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
    color: "primary",
  },
  variants: {
    pill: {
      true: {
        borderRadius: "$pill",
      }
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
    color: {
      primary: {
        backgroundColor: "$pink11",
        color: "white",
        border: "1px solid $pink11",
        "&:hover": {
          outline: "solid 1px $pink11",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$pink11",
        border: "none",
        "&:hover": {
          outline: "solid 1px $pink11",
        },
      },
      secondary: {
        border: "1px solid $pink11",
        backgroundColor: "transparent",
        color: "$pink11",
        "&:hover": {
          outline: "solid 1px $pink11",
        },
      },
    },
  },
});

export default Button;
