import { render, screen, fireEvent } from "@testing-library/react";
import { CustomButton } from ".";

describe("CustomButton", () => {
  it("it should call handleClick", () => {
    const handleClickSpy = jest.spyOn(console, "log");

    render(<CustomButton />);

    const button = screen.getByText("Button");

    fireEvent.click(button);

    expect(handleClickSpy).toHaveBeenCalledTimes(1);
  });
});
