import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MuiMenuItem from "@mui/material/MenuItem";
import Select from "./select";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = (otherProps) => {
  const args = {
    defaultValue: "",
    options: [
      { children: "child", value: "20" },
      { children: "child2", value: "30" }
    ],
    ...otherProps
  };

  return render(
    <ThemeProvider theme={light}>
      <Select {...args} />
    </ThemeProvider>
  );
};

describe("Select component", () => {
  it("renders", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("does not render if no options are provided", () => {
    const { container } = arrange({ options: null });
    expect(container).toBeEmptyDOMElement();
  });

  it("renders a selected icon", () => {
    const { getAllByTitle } = arrange({
      open: true,
      value: "20",
      defaultValue: "20"
    });
    expect(getAllByTitle("Selected")[0]).toBeInTheDocument();
  });

  it("accepts a fixed width", () => {
    const { container } = arrange({ width: "200px" });
    expect(container.firstChild).toHaveStyle({ width: "200px" });
  });

  it("accepts children", () => {
    const { getAllByRole } = render(
      <ThemeProvider theme={light}>
        <Select defaultValue="">
          <MuiMenuItem value={40}>Forty</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
        </Select>
      </ThemeProvider>
    );
    const select = getAllByRole("button")[0];
    fireEvent.mouseDown(select);
    expect(screen.getByText(`Forty`)).toBeInTheDocument();
  });
});
