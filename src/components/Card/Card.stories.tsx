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

// const Template: ComponentStory<typeof Card> = (
//   args: ComponentMeta<typeof Card>
// ) => <Card {...args} />;

export const WithHeaderAndFooter = () => (
  <Card>
    <Card.Header>
      <Text>Card Header</Text>
    </Card.Header>
    <Card.Body>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        malesuada nunc.
      </Text>
    </Card.Body>
    <Card.Footer>
      <Button>Learn more</Button>
    </Card.Footer>
  </Card>
);
