import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentProps } from "@stitches/react";

import Heading from "./Heading";

export default {
  title: "Components/Heading",
  // component: Heading,
  argTypes: {
    children: {
      control: "text",
      name: "Heading text",
      defaultValue: "The white husky howls at night",
    },
    as: {
      control: {
        type: "inline-radio",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
      name: "Heading element",
      defaultValue: "h1",
    },
    fluid: {
      control: "boolean",
      name: "Fluid",
      defaultValue: false,
      description: "Whether the heading should grow with the viewport",
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (
  args: ComponentMeta<typeof Heading>
) => <Heading {...args} />;

export const Default = Template.bind({});
export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
};
