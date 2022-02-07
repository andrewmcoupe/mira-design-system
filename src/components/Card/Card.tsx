import React from "react";
import { styled } from "../../../stitches.config";
import Button from "../Button/Button";

const CardBase = styled("article", {
  borderRadius: "$2",
  border: "1px solid $gray7",
  backgroundColor: "$loContrast",
});

const CardWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const CardHeader = styled("header", {
  fontWeight: "bold",
  fontSize: "$5",
  padding: "$2",
});

const CardBody = styled("section", {
  padding: "$2",
  flex: "1",
});

const CardFooter = styled("footer", {
  fontWeight: "bold",
  fontSize: "$2",
  padding: "$2",
});

type WithChildren<T = {}> = T & { children?: React.ReactNode };

const Card = (props: WithChildren) => (
  <CardBase>
    <CardWrapper>{props.children}</CardWrapper>
  </CardBase>
);

Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
