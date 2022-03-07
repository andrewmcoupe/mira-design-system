import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentProps } from "@stitches/react";

import List from "./List";

export default {
  title: "Components/List",
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
} as ComponentMeta<typeof List>;

export const Unordered = () => (
  <List>
    <li>The white husky howls at night</li>
    <li>The white husky howls at night</li>
    <li>The white husky howls at night</li>
    <li>The white husky howls at night</li>
  </List>
);

export const Ordered = () => (
  <List variant={"ol"}>
    <li>The white husky howls at night</li>
    <li>The white husky howls at night</li>
    <li>The white husky howls at night</li>
    <li>The white husky howls at night</li>
  </List>
);
