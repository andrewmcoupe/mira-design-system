import React from "react";
import { styled } from "../../../stitches.config";
import { Button } from "../index";
import * as Icons from "@radix-ui/react-icons";
import { ComponentProps } from "@stitches/react";

export const StyledIconButton = styled(Button, {
  width: 44,
  padding: "0 8px",
});

export type IconButtonProps = {
  icon?: keyof typeof Icons;
} & ComponentProps<typeof StyledIconButton>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, forwardedRef) => {
    const IconElement = Icons[props.icon ?? "TrashIcon"];
    return (
      // @ts-ignore
      <StyledIconButton {...props} ref={forwardedRef}>
        <IconElement width={22} height={22} />
      </StyledIconButton>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
