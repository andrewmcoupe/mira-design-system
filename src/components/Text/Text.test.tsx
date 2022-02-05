import React from "react";
import { render } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  it("should render the correct text", () => {
    const { getByText } = render(<Text>Hello Mira</Text>);

    expect(getByText("Hello Mira")).toBeTruthy();
  });
});
