import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import Text from "../Text/Text";
import Button from "../Button/Button";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Card>;

export const Default = () => (
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
    <Card.Header>
      <Text>Card Header</Text>
    </Card.Header>
    <Card.Body css={{ my: "$2" }}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        malesuada nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed eu malesuada nunc. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed eu malesuada nunc.
      </Text>
    </Card.Body>
    <Card.Footer>
      <Button variant={"green"}>Learn more</Button>
    </Card.Footer>
  </Card>
);
