import React from "react";
import Table from "./table";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const arrange = (tableRowProps) => {
  const utils = render(
    <Table {...tableRowProps}>
      <tbody>
        <tr>
          <td>Foo</td>
        </tr>
      </tbody>
    </Table>
  );
  return {
    ...utils,
    table: utils.container.firstChild.firstChild
  };
};

describe("Table", () => {
  it("renders", () => {
    const { table } = arrange();
    expect(table).toMatchSnapshot();
  });

  it("accepts classnames", () => {
    const { table } = arrange({ className: "bar" });
    expect(table).toHaveClass("bar");
  });

  it("renders loud palette", () => {
    const { table } = arrange({ loud: true });
    expect(table).toHaveClass("DhigTable--loud");
  });

  it("renders zebra styling", () => {
    const { table } = arrange({ zebra: true });
    expect(table).toHaveClass("DhigTable--zebra");
  });

  it("renders bordered variant", () => {
    const { table } = arrange({ bordered: true });
    expect(table).toHaveClass("DhigTable--bordered");
  });
});
