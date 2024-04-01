import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TreeView from "@iccc/tree-view";
import { FlatTreeItem } from "./tree-item.js";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = ({ ...FlatTreeItemProps }) =>
  render(
    <ThemeProvider theme={light}>
      <TreeView variant="flat">
        <FlatTreeItem nodeId="1" label="Spreadsheets" {...FlatTreeItemProps}>
          <FlatTreeItem nodeId="2" label="Excel" {...FlatTreeItemProps} />
          <FlatTreeItem nodeId="3" label="Numbers" {...FlatTreeItemProps} />
        </FlatTreeItem>
      </TreeView>
    </ThemeProvider>
  );

describe("Flat Tree Item component", () => {
  it("renders", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });
  it("accepts classnames", () => {
    arrange({ className: "test-classname" });
    expect(screen.getByRole("treeitem")).toHaveClass("test-classname");
  });
  it("renders in a disabled state", () => {
    arrange({ disabled: true });
    expect(screen.getByRole("treeitem").firstChild.children[1]).toHaveClass(
      "Mui-disabled"
    );
  });
  it("expands when clicked", () => {
    arrange();
    const treeItemRoot = screen.getByRole("treeitem").firstChild.children[1];
    userEvent.click(treeItemRoot.children[1]);
    expect(treeItemRoot).toHaveClass(
      "Mui-expanded",
      "Mui-focused",
      "Mui-selected"
    );
  });
});
