import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  it("should call the onChange prop when typing", () => {
    const mockOnChangeHandler = jest.fn();
    const { getByRole } = render(<Input onChange={mockOnChangeHandler} />);

    const input = getByRole("textbox");
    userEvent.type(input, "Hello Mira"); // Type 10 characters (including spaces)

    expect(mockOnChangeHandler).toHaveBeenCalledTimes(10);
  });

  it("should attach a ref to the underlying input element if provided", () => {
    const expectedRefValue = "Hello Mira";
    const myRef = React.createRef<HTMLInputElement>();

    const { getByRole } = render(<Input ref={myRef} />);

    const input = getByRole("textbox");
    userEvent.type(input, expectedRefValue);

    expect(myRef.current?.value).toEqual(expectedRefValue);
  });

  it("should render an icon if provided on the props object", () => {
    const { getByRole, debug } = render(<Input icon={"EnterIcon"} />);

    const input = getByRole("textbox");
    const icon = input.previousSibling as SVGElement;

    expect(icon).toBeInTheDocument();
  });
});
