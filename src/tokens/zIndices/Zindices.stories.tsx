import React from "react";
import { theme } from "../../../stitches.config";

const { zIndices: stitchesZindices } = theme;

export default {
  title: "Tokens/ZIndices",
  argTypes: {},
};

export const ZIndices = () => {
  return Object.keys(stitchesZindices).map((z, index) => {
    return (
      <div
        key={z}
        style={{
          position: "relative",
          // @ts-ignore
          zIndex: stitchesZindices[z].value,
          background: "white",
          border: "solid 2px black",
          padding: 8,
          height: "100px",
          width: "100px",
          marginTop: `-${index * 10}px`,
          marginLeft: `${index * 10}px`,
        }}
      >
        <span style={{ width: 100 }}>
          {/* @ts-ignore*/}
          {stitchesZindices[z].token}
        </span>
      </div>
    );
  });
};
