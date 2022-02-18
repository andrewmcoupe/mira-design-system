import React from "react";
import { ComponentMeta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "Components/Select",
} as ComponentMeta<typeof Select>;

export const Default = () => (
  <Select
    defaultValue={"Select..."}
    onChange={(event) => console.log(event.currentTarget.value)}
  >
    <option value="Select..." disabled={true}>
      Select...
    </option>
    <option value="One husky on the wall">One husky on the wall</option>
    <option value="Two">Two</option>
    <option value="Three">Three</option>
  </Select>
);

export const Disabled = () => (
  <Select
    disabled={true}
    defaultValue={"Select..."}
    onChange={(event) => console.log(event.currentTarget.value)}
  >
    <option value="Select..." disabled={true}>
      Select...
    </option>
    <option value="One husky on the wall">One husky on the wall</option>
    <option value="Two">Two</option>
    <option value="Three">Three</option>
  </Select>
);
