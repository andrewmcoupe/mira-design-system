import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentProps } from "@stitches/react";
import { theme } from "../../../stitches.config";

const { borderWidths } = theme;

export default {
  title: "Tokens/Borders",
  argTypes: {},
};

export const Borders = () => {
  return Object.keys(borderWidths).map((border) => {
    return (
      <div
        key={border}
        style={{
          // @ts-ignore
          border: `${borderWidths[border]} solid gray`,
          padding: "1rem",
          marginBottom: 16,
        }}
      >
        {border}
      </div>
    );
  });
};
