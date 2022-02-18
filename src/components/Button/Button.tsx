import { styled } from "../../../stitches.config";
import * as Icons from "@radix-ui/react-icons";
import { ComponentProps, CSS } from "@stitches/react";
import React from "react";

const StyledButton = styled("button", {
  borderRadius: "$3",
  padding: "0 $3",
  fontSize: "$4",
  cursor: "pointer",
  userSelect: "none",
  height: "44px",
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
        backgroundColor: "$gray4",
        color: "$hiContrast",

        "&:hover": {
          backgroundColor: "$gray4",
        },
      },
    },
  },
});

type ButtonProps = {
  icon?: keyof typeof Icons;
} & ComponentProps<typeof StyledButton>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, ...props }, forwardedRef) => {
    if (icon) {
      const IconElement = Icons[icon];
      return (
        <StyledButton
          {...props}
          variant={props.variant}
          css={{ width: 44, padding: "0 8px" }}
          ref={forwardedRef}
        >
          <div>
            <IconElement width={22} height={22} />
          </div>
        </StyledButton>
      );
    }

    // @ts-ignore
    return <StyledButton {...props} ref={forwardedRef} />;
  }
);

Button.displayName = "Button";

export default Button;
