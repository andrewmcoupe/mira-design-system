import React from "react";
import { ComponentMeta } from "@storybook/react";

import Label from "./Label";
import { Input } from "../index";

export default {
  title: "Components/Label",
} as ComponentMeta<typeof Label>;

export const Default = () => <Label>Label</Label>;
export const WithInput = () => (
  <>
    <Label htmlFor={"username"} css={{ marginRight: "$2" }}>
      GitHub username
    </Label>
    <Input id={"username"} icon={"GitHubLogoIcon"} />
  </>
);
