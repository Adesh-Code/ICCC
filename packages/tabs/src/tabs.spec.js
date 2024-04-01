import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Tab from "@mui/material/Tab";
import Tabs from "./tabs";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = ({ children = <Tab label="label" />, ...otherProps } = {}) => {
  const utils = render(
    <ThemeProvider theme={light}>
      <Tabs {...otherProps}>{children}</Tabs>
    </ThemeProvider>
  );
  return utils;
};

describe("Tabs component", () => {
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.error = jest.fn((error) => {
      throw new Error(error);
    });
  });

  it("renders tabs", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("does not render if no children are provided", () => {
    expect(() => arrange({ children: null })).toThrow();
  });

  it("accepts classnames", () => {
    const { container } = arrange({
      className: "foo"
    });
    const tabs = container.firstChild;
    expect(tabs).toHaveClass("foo");
  });

  it("renders the default style variant", () => {
    const { container } = arrange();
    const tabs = container.firstChild;
    expect(tabs).toHaveClass("DhigTabs--styleVariant--default");
  });

  it("renders the quiet style variant", () => {
    const { container } = arrange({ styleVariant: "quiet" });
    const tabs = container.firstChild;
    expect(tabs).toHaveClass("DhigTabs--styleVariant--quiet");
  });

  it("renders the quiet style variant with the underline extended", () => {
    const { container } = arrange({
      styleVariant: "quiet",
      extendedUnderline: true
    });
    const tabs = container.firstChild;
    expect(tabs).toHaveClass("DhigTabs--extendedUnderline");
  });

  it("chooses the correct tab on click", async () => {
    arrange({
      children: [
        <Tab key={0} value={0} label="Tab 0" />,
        <Tab key={1} value={1} label="Tab 1" />,
        <Tab key={2} value={2} label="Tab 2" />
      ],
      value: 1
    });

    const tab1 = screen.getByText("Tab 1");
    expect(tab1).toHaveAttribute("aria-selected", "true");

    const tab2 = screen.getByText("Tab 2");
    fireEvent.click(tab2);

    await waitFor(() => {
      expect(tab2).toHaveAttribute("aria-selected", "true");
    });
  });

  it("accepts custom onChange", async () => {
    let value = 0;
    arrange({
      children: [
        <Tab key={0} value={0} label="Tab 0" />,
        <Tab key={1} value={1} label="Tab 1" />,
        <Tab key={2} value={2} label="Tab 2" />
      ],
      value,
      onChange: (event) => (value = event.target.value)
    });
    const tab2 = screen.getByText("Tab 2");
    fireEvent.click(tab2);
    await waitFor(() => {
      expect(tab2).toHaveAttribute("aria-selected", "true");
    });
  });

  it("renders with accessibility props", () => {
    arrange({
      "aria-label": "aria-label-test"
    });
    const tabs = screen.getByRole("tablist");
    expect(tabs).toHaveAttribute("aria-label", "aria-label-test");
  });

  it("applies the correct styles to the selected tab", () => {
    arrange();
    const tab = screen.getByRole("tab");
    fireEvent.click(tab);
    expect(tab).toHaveClass("Mui-selected");
  });
});
