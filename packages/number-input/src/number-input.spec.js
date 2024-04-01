import React from "react";
import PropTypes from "prop-types";
import { screen, render, fireEvent } from "@testing-library/react";
import { createSerializer, matchers } from "@emotion/jest";
import NumberInput from "./number-input";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer({ includeStyles: false }));

const arrange = (args) => {
  return render(
    <ThemeProvider theme={light}>
      <NumberInput {...args} />
    </ThemeProvider>
  );
};

const NumberInputMock = ({ value, ...otherProps }) => {
  const [num, setNum] = React.useState(value);
  return (
    <ThemeProvider theme={light}>
      <NumberInput value={num} onChange={setNum} {...otherProps} />
    </ThemeProvider>
  );
};
NumberInputMock.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

describe("NumberInput component", () => {
  it("renders a number input", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });
  it("accepts classnames", () => {
    const { container } = arrange({ className: "foo" });
    expect(container.firstChild).toHaveClass("foo");
    expect(container).toMatchSnapshot();
  });
  it("accepts error prop", () => {
    const { container } = arrange({ error: true });
    expect(container.firstChild).toHaveClass("Mui-error");
    expect(container).toMatchSnapshot();
  });
  it("accepts a controled value", () => {
    const { container } = arrange({ value: 32 });
    expect(screen.getByDisplayValue("32")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("changes the inputs value if a number is written", () => {
    const { container } = render(<NumberInputMock />);
    const input = screen.getByDisplayValue("0");
    fireEvent.change(input, { target: { value: 27 } });
    expect(screen.getByDisplayValue("27")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("accepts negative values", () => {
    const { container } = render(<NumberInputMock />);
    const input = screen.getByDisplayValue("0");
    fireEvent.change(input, { target: { value: -27 } });
    expect(screen.getByDisplayValue("-27")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("returns an empty string if 'NaN' is passed as the input value", () => {
    const { container } = render(<NumberInputMock />);
    const input = screen.getByDisplayValue("0");
    fireEvent.change(input, { target: { value: Number("sdfgdf") } });
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("empty strings", () => {
    const { container } = render(<NumberInputMock />);
    const input = screen.getByDisplayValue("0");
    fireEvent.change(input, { target: { value: "" } });
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("non numerical characters", () => {
    const { container } = render(<NumberInputMock />);
    const input = screen.getByDisplayValue("0");
    fireEvent.change(input, { target: { value: "home" } });
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("decrease the amount by click the minus button ", () => {
    const { container } = render(<NumberInputMock value={2} />);
    const subtractButton = container.querySelectorAll(".MuiSvgIcon-root")[0];
    fireEvent.click(subtractButton);
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });
  it("increase the amount by click the plus button", () => {
    const { container } = render(<NumberInputMock value={2} />);
    const addButton = container.querySelectorAll(".MuiSvgIcon-root")[1];
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    expect(screen.getByDisplayValue("4")).toBeInTheDocument();
  });
  it("adjusts to the maximum value when clicking a button if the current value exceeds the maximum value", () => {
    const { container } = render(<NumberInputMock max={10} value={12} />);
    const addButton = container.querySelectorAll(".MuiSvgIcon-root")[1];
    fireEvent.click(addButton);
    expect(screen.getByDisplayValue("10")).toBeInTheDocument();
  });
  it("adjusts to the minimun value when clicking a button if the current value is less the minimun value", () => {
    const { container } = render(<NumberInputMock min={10} value={8} />);
    const addButton = container.querySelectorAll(".MuiSvgIcon-root")[1];
    fireEvent.click(addButton);
    expect(screen.getByDisplayValue("10")).toBeInTheDocument();
  });
  it("accepts floating point numbers", () => {
    const { container } = render(<NumberInputMock step={1.3} />);
    const input = screen.getByDisplayValue("0");
    fireEvent.change(input, { target: { value: "3.2" } });
    expect(screen.getByDisplayValue("3.2")).toBeInTheDocument();
    const subtractButton = container.querySelectorAll(".MuiSvgIcon-root")[0];
    fireEvent.click(subtractButton);
    expect(screen.getByDisplayValue("1.9")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("accepts a custom onKeyDown function", () => {
    const onKeyDown = jest.fn();
    render(<NumberInputMock onKeyDown={onKeyDown} />);
    const input = screen.getByDisplayValue("0");
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(onKeyDown).toHaveBeenCalled();
  });
  it("should not update when another key is pressed", () => {
    const onChangeMock = jest.fn();
    render(<NumberInputMock />);
    const input = screen.getByDisplayValue("0");
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  it("does not trigger the onChange function when its not passed", () => {
    arrange();
    const input = screen.getByDisplayValue("0");
    fireEvent.change(input, { target: { value: 3 } });
    expect(screen.getByDisplayValue("3")).toBeInTheDocument();
  });
  it("will change to the minimum value if an empty string value is entered and the buttons are pressed", () => {
    const { container } = render(<NumberInputMock min={10} />);
    const input = screen.getByDisplayValue("0");
    fireEvent.change(input, { target: { value: "" } });
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    const addButton = container.querySelectorAll(".MuiSvgIcon-root")[1];
    fireEvent.click(addButton);
    expect(screen.getByDisplayValue("10")).toBeInTheDocument();
  });
});
