import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentProps } from "@stitches/react";
import { theme } from "../../../stitches.config";

const { radii } = theme;

export default {
  title: "Tokens/Radii",
  argTypes: {},
};

export const Radii = () => {
  return Object.keys(radii).map((r) => {
    return (
      <div
        key={r}
        style={{
          border: `solid 2px gray`,
          // @ts-ignore
          borderRadius: `${radii[r]}`,
          padding: "1rem",
          marginBottom: 16,
        }}
      >
        {r}
      </div>
    );
  });
};
