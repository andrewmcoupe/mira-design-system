import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Button",
  argTypes: {
    children: {
      control: "text",
      name: "Button text",
      defaultValue: "Mira button",
    },
    size: {
      control: {
        type: "select",
        options: ["default", "large"],
      },
      description: "The size of the button",
    },
    stretch: {
      control: {
        type: "boolean",
      },
      description: "Whether the button should stretch to fill its container",
    },
    variant: {
      control: { type: "select", options: ["red", "green", "blue", "ghost"] },
      description: "The color of the button",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args: ComponentMeta<typeof Button>
) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "red",
};

export const Green = Template.bind({});
Green.args = {
  variant: "green",
};

export const Blue = Template.bind({});
Blue.args = {
  variant: "blue",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
};

export const Stretch = Template.bind({});
Stretch.args = {
  stretch: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Pill = Template.bind({});
Pill.args = {
  pill: true,
};
