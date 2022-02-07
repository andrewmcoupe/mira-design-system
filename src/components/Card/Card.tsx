import React from "react";
import { styled } from "../../../stitches.config";
import type { WithChildren } from "../../utils/types";

const CardBase = styled("article", {
  borderRadius: "$2",
  border: "1px solid $gray7",
  backgroundColor: "$loContrast",
  padding: "$4",
});

const CardWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const CardHeader = styled("header", {
  fontWeight: "$bold",
  fontSize: "$5",
});

const CardBody = styled("section", {
  flex: "1",
});

const CardFooter = styled("footer", {
  fontWeight: "bold",
  fontSize: "$2",
});

const Card = (props: WithChildren) => (
  <CardBase>
    <CardWrapper>{props.children}</CardWrapper>
  </CardBase>
);

Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
