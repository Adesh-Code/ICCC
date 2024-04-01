import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Combobox from "./combobox";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const onInputChangeMock = jest.fn();

const options = ["Alfa", "Bravo", "Charlie", "Delta", "Echo"];

const arrange = (props) => {
  const args = {
    id: "test-combobox",
    options,
    ...props
  };

  return render(
    <ThemeProvider theme={light}>
      <Combobox
        {...args}
        onInputChange={(event, value, reason) => onInputChangeMock(value)}
      />
    </ThemeProvider>
  );
};

describe("Combobox", () => {
  it("mounts the combobox component", () => {
    arrange();
    const combobox = screen.getByRole("combobox");
    expect(combobox).toMatchSnapshot();
  });

  it("doesn't automatically display dropdown on focus ", () => {
    arrange();
    const combobox = screen.getByRole("combobox");
    combobox.focus();
    expect(screen.queryByText("Alfa")).not.toBeInTheDocument();
  });

  it("displays dropdown when results of search query are found", async () => {
    arrange();
    const input = screen.getByRole("combobox");
    fireEvent.change(input, { target: { value: "a" } });
    expect(onInputChangeMock).toHaveBeenCalledWith("a");
    await screen.findByRole("listbox");
    expect(screen.getByText("Alfa")).toBeInTheDocument();

    // select a valid option from combobox dropdown
    fireEvent.click(screen.getByText("Alfa"));
    expect(onInputChangeMock).toHaveBeenCalledWith("Alfa");

    // open dropdown and check for selected option
    const button = screen.getByTitle("Open");
    fireEvent.click(button);
    await screen.findByRole("listbox");
    const selectedOption = (await screen.findAllByRole("option"))[0];
    expect(selectedOption.lastChild).toHaveClass("DhigCombobox--checkedIcon");
  });

  it("accepts classnames", () => {
    const { container } = arrange({
      className: "foo"
    });
    const combobox = container.firstChild;
    expect(combobox).toHaveClass("foo");
  });

  it("displays checkboxes in dropdown for multi-select", async () => {
    arrange({ multiple: true });
    const input = screen.getByRole("combobox");
    fireEvent.change(input, { target: { value: "a" } });
    const listbox = await screen.findByRole("listbox");
    const checkbox = await screen.getAllByRole("checkbox")[0];
    expect(listbox).toContainElement(checkbox);
  });

  it("displays correct fixed behaviour for multi-select", () => {
    const { container } = arrange({
      multiple: true,
      layout: "fixed",
      defaultValue: [options[0], options[1]]
    });
    const combobox = container.firstChild;
    expect(combobox).toHaveClass("DhigCombobox--multiple");
    expect(combobox).toHaveClass("DhigCombobox--layout--fixed");
  });

  it("displays correct grow behaviour for multi-select", () => {
    const { container } = arrange({
      multiple: true,
      layout: "grow",
      defaultValue: [options[0], options[1]]
    });
    const combobox = container.firstChild;
    expect(combobox).toHaveClass("DhigCombobox--multiple");
    expect(combobox).toHaveClass("DhigCombobox--layout--grow");
  });

  it("renders an addendum", async () => {
    arrange({ addendum: "Lorem ipsum" });
    const input = screen.getByRole("combobox");
    fireEvent.change(input, { target: { value: "a" } });
    await screen.findByRole("listbox");
    expect(screen.getByRole("presentation").firstChild.lastChild).toHaveClass(
      "DhigCombobox--addendum"
    );
  });

  it("displays correct error styles", () => {
    const { container } = arrange({
      error: true,
      defaultValue: options[0]
    });
    const combobox = container.firstChild.firstChild.firstChild;
    expect(combobox).toHaveClass("Mui-error");
  });
});
