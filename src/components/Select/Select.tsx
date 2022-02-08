import React, { ReactElement, useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { CSS } from "@stitches/react";
import { styled } from "../../../stitches.config";
import { WithChildren } from "../../utils/types";

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
});

const Wrapper = styled("div", {
  position: "relative",
  width: "max-content",
});

const IconWrapper = styled("span", {
  marginLeft: "$2",
});

type SelectProps = WithChildren<
  {
    defaultSelected?: string;
  } & JSX.IntrinsicElements["select"]
>;

type SelectProps2 = React.ComponentProps<typeof NativeSelect> & {
  css?: CSS;
};

type foo = SelectProps2["css"];

const StyledSelect = React.forwardRef<
  React.ElementRef<typeof NativeSelect>,
  SelectProps2
>(({ css, ...props }, forwardedRef: React.ForwardedRef<HTMLSelectElement>) => {
  const [value, setValue] = useState(() => {
    if (props.defaultValue) {
      return props.defaultValue;
    }

    // return "";
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
