import React from "react";
import LinearProgress, { LinearProgressLabel } from "./linear-progress";
import { createSerializer, matchers } from "@emotion/jest";
import { screen, render } from "@testing-library/react";


expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer({ includeStyles: false }));

const arrange = (args) => {
  return render(
      <LinearProgress {...args} />
  );
};

describe("Linear progress", () => {
  it("renders a linear progress", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("renders the linear progress in medium size", () => {
    arrange({
      size: "medium"
    });
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveClass("icccLinearProgress--size--medium");
  });

  it("renders percentage for determinate variant", () => {
    const { container } = arrange({
      variant: "determinate",
      value: 25,
      children: (
        <LinearProgressLabel
          variant="determinate"
          label="Determinate label"
          value={25}
        />
      )
    });
    expect(container).toHaveTextContent("25%");
    expect(container).toHaveTextContent("Determinate label");
  });

  it("renders label with percentage", () => {
    const { container } = arrange({
      variant: "determinate",
      value: 25,
      children: <LinearProgressLabel variant="determinate" value={25} />
    });
    expect(container).toHaveTextContent("25%");
  });

  it("accepts classnames", () => {
    arrange({
      className: "foo"
    });
    const progress = screen.getAllByRole("progressbar")[0];
    expect(progress).toHaveClass("foo");
  });
});
