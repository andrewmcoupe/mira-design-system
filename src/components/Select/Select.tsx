import React, { ReactElement, useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { CSS } from "@stitches/react";
import { styled } from "../../../stitches.config";

/* The element displayed in the browser */
const Presentational = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "$gray3",
  borderRadius: "$2",
  height: "33px",
  padding: "$1",
  color: "$gray11",
  width: "auto",
});

/* The native select element */
const NativeSelect = styled("select", {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  cursor: "pointer",

  [`&:hover + ${Presentational}`]: {
    color: "$gray12",
  },

  [`&:focus + ${Presentational}`]: {
    outline: "1px solid $gray11",
  },

  [`&:disabled + ${Presentational}`]: {
    opacity: 0.7,
    cursor: "not-allowed",
    pointerEvents: "none",
    background: "$gray4",
  },
});

const Wrapper = styled("div", {
  position: "relative",
  width: "max-content",
});

const IconWrapper = styled("span", {
  marginLeft: "$2",
});

type SelectProps = React.ComponentProps<typeof NativeSelect> & {
  css?: CSS;
};

const StyledSelect = React.forwardRef<
  React.ElementRef<typeof NativeSelect>,
  SelectProps
>(({ css, ...props }, forwardedRef: React.ForwardedRef<HTMLSelectElement>) => {
  const [value, setValue] = useState(() => {
    if (props.defaultValue) {
      return props.defaultValue;
    }
  });

  const childrenArray = React.Children.toArray(props.children);

  /* If the children are not option elements then throw */
  if (
    childrenArray?.some((child) => (child as ReactElement).type !== "option")
  ) {
    throw new Error('Select children must be of type "option"');
  }

  return (
    <Wrapper>
      <NativeSelect
        {...props}
        // @ts-ignore
        css={css}
        ref={forwardedRef}
        onChange={(event) => {
          setValue(event.currentTarget.value);
          props.onChange?.(event);
        }}
      >
        {props.children}
      </NativeSelect>
      <Presentational>
        {value}
        <IconWrapper>
          <ChevronDownIcon />
        </IconWrapper>
      </Presentational>
    </Wrapper>
  );
});

StyledSelect.displayName = "Select";

export default StyledSelect;
