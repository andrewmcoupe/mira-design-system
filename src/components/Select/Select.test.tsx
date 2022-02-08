import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

describe("Select", () => {
  it("should throw an error if option elements are not used as children", () => {
    const RenderSelect = () =>
      render(
        <Select>
          <p>Cry me an error</p>
        </Select>
      );

    expect(RenderSelect).toThrowError(
      'Select children must be of type "option"'
    );
  });

  it("should render the correct number of children", () => {
    const { getByText, getAllByRole } = render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );

    expect(getAllByRole("option").length).toBe(2);
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should invoke the onChange prop when an option is selected", async () => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(
      <Select onChange={mockOnChange}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );

    const option2 = getByRole("option", {
      name: "Option 2",
    }) as HTMLOptionElement;
    const selectElement = getByRole("combobox");

    // Select option 2 from the options
    userEvent.selectOptions(selectElement, "Option 2");

    expect(option2.selected).toBe(true);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
