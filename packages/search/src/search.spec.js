import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within
} from "@testing-library/react";
import Search from "./search";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const onInputChangeMock = jest.fn();

const arrange = (props) => {
  const args = {
    id: "test-search",
    options: ["Alfa", "Bravo", "Charlie", "Delta", "Echo"],
    ...props
  };

  return render(
    <ThemeProvider theme={light}>
      <Search
        {...args}
        onInputChange={(event, value, reason) => onInputChangeMock(value)}
      />
    </ThemeProvider>
  );
};

describe("Search", () => {
  it("mounts the search component", () => {
    arrange();
    const search = screen.getByRole("combobox");
    expect(search).toMatchSnapshot();
  });

  it("doesn't automatically display dropdown on focus ", () => {
    arrange();
    const search = screen.getByRole("combobox");
    search.focus();
    expect(screen.queryByText("Alfa")).not.toBeInTheDocument();
  });

  it("displays dropdown when results of search query are found", async () => {
    const { container } = arrange();
    const search = container.firstChild;
    const input = within(search).getByRole("combobox");
    fireEvent.change(input, { target: { value: "a" } });
    expect(onInputChangeMock).toHaveBeenCalledWith("a");
    await waitFor(() => screen.getByRole("listbox"));
    expect(screen.getByText("Alfa")).toBeInTheDocument();
    // select a valid option from search dropdown
    fireEvent.click(screen.getByText("Alfa"));
    expect(onInputChangeMock).toHaveBeenCalledWith("Alfa");
  });

  it("accepts classnames", () => {
    const { container } = arrange({
      className: "foo"
    });
    const search = container.firstChild;
    expect(search).toHaveClass("foo");
  });
});
