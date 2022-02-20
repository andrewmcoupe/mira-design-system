import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as Icons from "@radix-ui/react-icons";

import IconButton from "./IconButton";

export default {
  title: "Components/IconButton",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["red", "green", "blue", "orange", "ghost"],
      },
    },
    icon: {
      control: {
        type: "select",
        options: Object.keys(Icons),
      },
    },
    ariaLabel: {
      defaultValue: "Mira icon",
      control: {
        type: "text",
      },
    },
    title: {
      defaultValue: "Mira icon",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (
  args: ComponentMeta<typeof IconButton>
) => <IconButton {...args} />;

export const Default = Template.bind({});
