import React from "react";
import TableHead from "./table-head";
import { render, screen } from "@testing-library/react";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = ({
  headCells = [
    { id: "name", label: "Dessert (100g serving)", align: "right" },
    { id: "calories", label: "Calories" },
    { id: "fat", label: "Fat (g)" },
    { id: "carbs", label: "Carbs (g)" },
    { id: "protein", label: "Protein (g)" }
  ],
  rowCount = 3,
  ...otherProps
} = {}) => {
  return render(
    <ThemeProvider theme={light}>
      <table>
        <TableHead headCells={headCells} rowCount={rowCount} {...otherProps} />
      </table>
    </ThemeProvider>
  );
};

describe("Table head", () => {
  it("renders", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("renders with checkbox", () => {
    arrange({ enableSelect: true });
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders without enable select class name", () => {
    arrange();
    const firstCell = screen.getAllByRole("columnheader")[0];
    expect(firstCell).not.toHaveClass("DhigTableHead--cell--enableSelect");
  });

  it("renders with enable select class name", () => {
    arrange({ enableSelect: true });
    const firstCell = screen.getAllByRole("columnheader")[0];
    expect(firstCell).toHaveClass("DhigTableHead--cell--enableSelect");
  });

  it("renders indeterminate checkbox when not all rows are selected", () => {
    arrange({
      enableSelect: true,
      selectedRowCount: 1
    });
    const checkbox = screen.getByRole("checkbox");
    const checkboxIcon = checkbox.parentElement.lastChild.firstChild.firstChild;
    expect(checkboxIcon).toHaveAttribute("id", "indeterminate");
  });

  it("renders with sort label", () => {
    arrange({
      enableSort: true,
      onRequestSort: () => {},
      order: "asc",
      orderBy: "name"
    });
    const sortButton = screen.getAllByRole("button")[0];
    expect(sortButton).toHaveClass("MuiTableSortLabel-root");
  });

  it("renders with sort class name", () => {
    arrange({
      enableSort: true,
      onRequestSort: () => {},
      order: "asc",
      orderBy: "name"
    });
    const secondCell = screen.getAllByRole("columnheader")[1];
    expect(secondCell).toHaveClass("DhigTableHead--cell--sort");
  });

  it("handles alignment", () => {
    arrange();
    const row = screen.getByRole("row");
    expect(row.firstChild).toHaveClass("MuiTableCell-alignRight");
    expect(row.lastChild).toHaveClass("MuiTableCell-alignLeft");
  });
});
