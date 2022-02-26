import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentProps } from "@stitches/react";

import Heading from "./Heading";

export default {
  title: "Components/Heading",
  argTypes: {
    children: {
      control: "text",
      name: "Heading text",
      defaultValue: "The white husky howls at night",
    },
    size: {
      control: {
        type: "inline-radio",
        options: ["1", "2", "3", "4", "5", "6"],
      },
      name: "Heading element",
      defaultValue: "1",
    },
    gradient: {
      control: {
        type: "boolean",
      },
      name: "Gradient",
      defaultValue: "false",
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (
  args: ComponentMeta<typeof Heading>
) => <Heading {...args} />;

export const Default = Template.bind({});
