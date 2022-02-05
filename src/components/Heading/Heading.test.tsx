import React from "react";
import { render } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading", () => {
  it("should render the correct text", () => {
    const { getByText } = render(<Heading>Hello Mira</Heading>);

    expect(getByText("Hello Mira")).toBeInTheDocument();
  });
});
