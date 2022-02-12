import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "./Badge";

export default {
  title: "Components/Badge",
  argTypes: {
    children: {
      control: "text",
      name: "Text",
      defaultValue: "Ice the husky",
    },
    unfilled: {
      control: "boolean",
      name: "Unfilled",
      defaultValue: false,
    },
    color: {
      control: "select",
      options: ["red", "green", "blue", "orange", "contrast"],
      defaultValue: "red",
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (
  args: ComponentMeta<typeof Badge>
) => <Badge {...args} />;

export const Default = Template.bind({});
