import React from "react";
import { styled } from "../../../stitches.config";
import { ComponentProps } from "@stitches/react";
import * as Icons from "@radix-ui/react-icons";

export const StyledTextField = styled("input", {
  background: "$gray1",
  borderRadius: "$3",
  border: "1px solid $gray6",
  padding: "$1 $2",
  outline: "none",
  color: "$hiContrast",
  height: "30px",

  "&::placeholder": {
    color: "$gray10",
  },

  "&:focus": {
    boxShadow: "inset 0px 0px 0px 1px $colors$blue10",
  },

  "&:disabled": {
    opacity: 0.7,
    pointerEvents: "none",
    cursor: "not-allowed",
    background: "$gray4",
  },

  variants: {
    state: {
      invalid: {
        boxShadow: "inset 0px 0px 0px 1px $colors$red10",
      },
    },
  },
});

const IconInputWrapper = styled("div", {
  position: "relative",
  display: "inline-block",

  "& > svg": {
    position: "absolute",
    top: "50%",
    left: "calc($xs * 2)",
    transform: "translateY(-50%)",
    color: "$gray8",
    width: 22,
    height: 22,
    pointerEvents: "none",
  },
});

type StyledTextFieldProps = ComponentProps<typeof StyledTextField> & {
  icon?: keyof typeof Icons;
};

export const Input = React.forwardRef<HTMLInputElement, StyledTextFieldProps>(
  (props, forwardedRef) => {
    if (props.icon) {
      const IconElement = Icons[props.icon];
      return (
        <IconInputWrapper>
          <IconElement />
          <StyledTextField
            {...props}
            css={{ paddingLeft: "$5" }}
            ref={forwardedRef}
          />
        </IconInputWrapper>
      );
    }

    // @ts-ignore
    return <StyledTextField {...props} ref={forwardedRef} />;
  }
);
Input.displayName = "Input";

export default Input;
