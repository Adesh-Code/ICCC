import React from "react";
import TableRow from "./table-row";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

const arrange = (tableRowProps) => {
  const utils = render(
    <table>
      <tbody>
        <TableRow {...tableRowProps}>
          <td>Cell content</td>
        </TableRow>
      </tbody>
    </table>
  );
  return {
    ...utils,
    firstRow: utils.container.firstChild.firstChild.firstChild
  };
};

describe("Table row", () => {
  it("renders", () => {
    const { firstRow } = arrange();
    expect(firstRow).toMatchSnapshot();
  });

  it("accepts classnames", () => {
    const { firstRow } = arrange({
      className: "bar"
    });
    expect(firstRow).toHaveClass("bar");
  });

  it("renders activated", () => {
    const { firstRow } = arrange({
      activated: true
    });
    expect(firstRow).toHaveClass("DhigTableRow--activated");
  });

  it("renders highlighted", () => {
    const { firstRow } = arrange({
      highlighted: true
    });
    expect(firstRow).toHaveClass("DhigTableRow--highlighted");
  });

  it("renders with interactions enabled", () => {
    const { firstRow } = arrange();
    expect(firstRow).toHaveClass("DhigTableRow--enableInteractions");
    expect(firstRow).toHaveAttribute("tabindex", "0");
    expect(firstRow).toHaveAttribute("role", "button");
  });

  it("renders with interactions disabled", () => {
    const { firstRow } = arrange({
      enableInteractions: false
    });
    expect(firstRow).not.toHaveClass("DhigTableRow--enableInteractions");
  });

  it("accepts an onclick function when interactions are enabled", () => {
    const handleClick = jest.fn();
    const { firstRow } = arrange({
      enableInteractions: true,
      onClick: handleClick
    });
    fireEvent.click(firstRow);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
