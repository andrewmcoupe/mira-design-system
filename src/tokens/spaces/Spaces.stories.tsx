import React from "react";
import { theme } from "../../../stitches.config";

const { space } = theme;

export default {
  title: "Tokens/Spaces",
  argTypes: {},
};

export const Spaces = () => {
  return Object.keys(space).map((s) => {
    return (
      <div key={s} style={{ display: "flex", gap: 8 }}>
        <span style={{ width: 100 }}>
          {/* @ts-ignore*/}
          {space[s].token} - {space?.[s]?.value}
        </span>
        <div
          key={s}
          style={{
            marginBottom: 16,
            height: 32,
            // @ts-ignore
            width: space?.[s]?.value,
            background: "gray",
          }}
        />
      </div>
    );
  });
};
