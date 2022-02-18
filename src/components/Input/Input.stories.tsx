import React from "react";
import { ComponentMeta } from "@storybook/react";

import Input from "./Input";

export default {
  title: "Components/Input",
} as ComponentMeta<typeof Input>;

export const Default = () => <Input placeholder={"Type here..."} />;
export const WithIcon = () => (
  <Input placeholder={"Type here..."} icon={"ArrowRightIcon"} />
);
export const Invalid = () => (
  <Input placeholder={"Type here..."} state={"invalid"} />
);
export const InvalidWithIcon = () => (
  <Input placeholder={"Type here..."} state={"invalid"} icon={"EnterIcon"} />
);
export const Disabled = () => (
  <Input placeholder={"Type here..."} disabled={true} />
);
export const DisabledWithIcon = () => (
  <Input placeholder={"Type here..."} disabled={true} icon={"TrashIcon"} />
);
