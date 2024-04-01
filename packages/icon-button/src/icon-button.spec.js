import React from "react";
import { render, screen } from "@testing-library/react";
import IconButton from "./icon-button";
import SvgIcon from "@mui/material/SvgIcon";
import SyncIcon from "@iccc/icon/lib/build/icons/sync";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = (props) => {
  const utils = render(
    <ThemeProvider theme={light}>
      <IconButton {...props}>
        <SvgIcon titleAccess="test">
          <SyncIcon />
        </SvgIcon>
      </IconButton>
    </ThemeProvider>
  );
  return utils;
};

describe("IconButton component", () => {
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.error = jest.fn((error) => {
      throw new Error(error);
    });
  });

  it("renders a button", () => {
    const { container } = arrange();
    const button = screen.getByRole("button");
    expect(button).toHaveClass("DhigIconButton--variant--contained");
    expect(container).toMatchSnapshot();
  });

  it("accepts classnames", () => {
    arrange({
      className: "foo"
    });
    const button = screen.getByRole("button");
    expect(button).toHaveClass("foo");
  });

  it("renders a stretched button", () => {
    arrange({
      fullWidth: true
    });
    const button = screen.getByRole("button");
    expect(button).toHaveClass("DhigIconButton--fullWidth");
  });

  it("renders an outlined button", () => {
    arrange({
      variant: "outlined"
    });
    const button = screen.getByRole("button");
    expect(button).toHaveClass("DhigIconButton--variant--outlined");
  });
});
