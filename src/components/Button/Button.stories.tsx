import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentProps } from "@stitches/react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    size: {
      control: {
        type: "select",
        options: ["default", "l"],
      },
      description: "The size of the button",
    },
    stretch: {
      control: {
        type: "boolean",
      },
      description: "Whether the button should stretch to fill its container",
    },
    color: {
      control: { type: "select", options: ["primary", "secondary", "ghost"] },
      description: "The color of the button",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args: ComponentMeta<typeof Button>
) => <Button {...args}>Mira button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Ghost = Template.bind({});
Ghost.args = {
  color: "ghost",
};

export const Stretch = Template.bind({});
Stretch.args = {
  stretch: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "l",
};

export const AllTogetherNow = () => (
  <section
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "16px",
      alignItems: "start",
    }}
  >
    <Button color="primary">Primary button</Button>
    <Button color="secondary">Secondary button</Button>
    <Button color="ghost">Ghost button</Button>
    <Button stretch>Stretch button</Button>
    <Button size="l">Large primary button</Button>
    <Button color={"secondary"} size="l">
      Large secondary button
    </Button>
    <Button color={"ghost"} size="l">
      Large ghost button
    </Button>
  </section>
);
