import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Flyout from "./flyout";
import MuiMenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = ({
  children = <Button>button</Button>,
  menuItems = [
    { children: "Item 1" },
    { children: "Item 2" },
    { children: "Item 3" }
  ],
  open = true,
  ...otherProps
} = {}) =>
  render(
    <ThemeProvider theme={light}>
      <Flyout {...otherProps} menuItems={menuItems} open={open}>
        {children}
      </Flyout>
    </ThemeProvider>
  );

describe("Flyout component", () => {
  it("renders", () => {
    arrange();
    const flyout = screen.getByRole("tooltip");
    expect(flyout).toMatchSnapshot();
  });

  it("accepts children", () => {
    const { getAllByRole } = arrange({
      children: (
        <>
          <MuiMenuItem>One</MuiMenuItem>
          <MuiMenuItem>Two</MuiMenuItem>
        </>
      )
    });
    const flyout = getAllByRole("menuitem")[0];
    fireEvent.mouseDown(flyout);
    expect(screen.getByText(`Two`)).toBeInTheDocument();
  });

  it("renders a selected icon", () => {
    arrange();
    const itemToSelect = screen.getAllByRole("menuitem")[0];
    fireEvent.click(itemToSelect);
    expect(itemToSelect).toHaveClass("Mui-selected");
  });
});
