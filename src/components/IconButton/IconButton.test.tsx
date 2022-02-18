import React from "react";
import { render, fireEvent } from "@testing-library/react";
import IconButton from "./IconButton";

describe("IconButton", () => {
  it("should render an icon", () => {
    const { getByRole } = render(<IconButton icon={"DiscIcon"} />);
    const button = getByRole("button");
    const icon = button.querySelector("svg");

    expect(icon).toBeInTheDocument();
  });

  it("should attach a ref to the underlying button when provided", () => {
    const myRef = React.createRef<HTMLButtonElement>();
    const { getByRole, debug } = render(
      <IconButton id={"icon-button"} icon={"DiscIcon"} ref={myRef} />
    );

    expect(myRef.current?.id).toEqual("icon-button");
  });
});
