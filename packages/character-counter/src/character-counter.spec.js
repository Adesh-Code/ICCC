import React from "react";
import { CharacterCounter, useCount } from "./index";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "@mui/material/Input";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = (args) => {
  return render(
    <ThemeProvider theme={light}>
      <CharacterCounter {...args} />
    </ThemeProvider>
  );
};

const InputMock = () => {
  const maxLength = 10;
  const { value, count, exceeded, handleChange } = useCount(maxLength);
  return (
    <ThemeProvider theme={light}>
      <Input value={value} error={exceeded} onChange={handleChange} />
      <CharacterCounter count={count} maxLength={maxLength} />
    </ThemeProvider>
  );
};

describe("Character counter component", () => {
  it("renders", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("renders a count and maxLength", () => {
    arrange({
      count: 2,
      maxLength: 100
    });
    expect(screen.queryByText("2 / 100")).toBeInTheDocument();
  });
});

describe("Character counter hook", () => {
  it("updates count correctly", () => {
    render(<InputMock />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(input.value).toBe("Hello");
    expect(screen.queryByText("5 / 10")).toBeInTheDocument();
  });

  it("sets error correctly after max length is reached", () => {
    render(<InputMock />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Max length exceeded" } });
    expect(input.value).toBe("Max length exceeded");
    expect(input.parentElement).toHaveClass("Mui-error");
    expect(screen.queryByText("19 / 10")).toBeInTheDocument();
  });
});
