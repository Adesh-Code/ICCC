import themeDark from "./dark";

describe("Theme MUI JSON", () => {
  it("yields correct dark theme data", () => {
    expect(themeDark).toMatchSnapshot();
  });
});
