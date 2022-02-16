import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentProps } from "@stitches/react";

import Text from "./Text";

export default {
  title: "Components/Text",
  argTypes: {
    children: {
      control: "text",
      name: "Text",
      defaultValue: "The white husky howls at night",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    color: {
      control: "select",
      options: ["red", "green", "blue", "contrast", "gradient"],
      defaultValue: "contrast",
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (
  args: ComponentMeta<typeof Text>
) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "1",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "2",
};
export const Large = Template.bind({});
Large.args = {
  size: "3",
};
export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: "4",
};

export const Gradient = Template.bind({});
ExtraLarge.args = {
  color: "gradient",
};
