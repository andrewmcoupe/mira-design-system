import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import Text from "../Text/Text";
import StyledButton from "../Button/Button";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Card>;

export const CardBody = () => (
  <Card>
    <Card.Body>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        malesuada nunc.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        malesuada nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed eu malesuada nunc. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed eu malesuada nunc.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        malesuada nunc.
      </Text>
    </Card.Body>
  </Card>
);

export const WithHeaderAndFooter = () => (
  <Card>
    <Card.Header>Card Header</Card.Header>
    <Card.Body>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        malesuada nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed eu malesuada nunc. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed eu malesuada nunc.
      </Text>
    </Card.Body>
    <Card.Footer>
      <StyledButton variant={"green"}>Learn more</StyledButton>
    </Card.Footer>
  </Card>
);

export const WithFooterOnly = () => (
  <Card>
    <Card.Body>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        malesuada nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed eu malesuada nunc. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed eu malesuada nunc.
      </Text>
    </Card.Body>
    <Card.Footer>
      <StyledButton variant={"green"}>Learn more</StyledButton>
    </Card.Footer>
  </Card>
);
