import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressButton, { ActionButtonProps } from "./ProgressButton";

export default {
  title: "Components/ProgressButton",
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Click me",
    },
    progressColor: {
      defaultValue: "red",
      control: {
        type: "inline-radio",
        options: ["red", "green", "blue"],
      },
    },
    variant: {
      defaultValue: "red",
      control: {
        type: "inline-radio",
        options: ["red", "green", "blue", "orange"],
      },
    },
  },
} as ComponentMeta<typeof ProgressButton>;

export const Template: ComponentStory<typeof ProgressButton> = (
  args: ActionButtonProps
  // @ts-ignore
) => <ProgressButton {...args} />;

export const WithOnCompleteCallback = () => (
  <ProgressButton
    progressColor={"red"}
    variant={"green"}
    onProgressComplete={() => alert("Do something cool")}
  >
    Click me
  </ProgressButton>
);
