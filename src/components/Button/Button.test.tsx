import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Pill", () => {
  it("should render the correct text", () => {
    const { getByText } = render(<Button>Hello World</Button>);
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("should call the onClick handler", () => {
    const mockOnClickHandler = jest.fn();
    const { getByText } = render(
      <Button onClick={mockOnClickHandler}>Hello World</Button>
    );

    const button = getByText("Hello World");
    fireEvent.click(button);

    expect(mockOnClickHandler).toHaveBeenCalledTimes(1);
  });
});
