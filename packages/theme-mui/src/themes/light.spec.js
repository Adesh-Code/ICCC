import themeLight from "./light";

describe("Theme MUI JSON", () => {
  it("yields correct light theme data", () => {
    expect(themeLight).toMatchSnapshot();
  });
});
