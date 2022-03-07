import { styled } from "../../../stitches.config";
import React, { PropsWithChildren, ReactElement } from "react";
import { WithChildren } from "../../utils/types";

const DEFAULT_TAG = "ul";

const StyledList = styled(DEFAULT_TAG, {
  margin: "0",
  padding: "0",
  listStylePosition: "inside",
  color: "$hiContrast",
});

export const List = (props: WithChildren<{ variant?: "ul" | "ol" }>) => {
  const childrenArray = React.Children.toArray(props.children);

  /* If the children are not list item elements then throw */
  if (childrenArray?.some((child) => (child as ReactElement).type !== "li")) {
    throw new Error('List children must be of type "li"');
  }

  const { variant = "ul" } = props;

  return <StyledList as={variant}>{props.children}</StyledList>;
};

export default List;
