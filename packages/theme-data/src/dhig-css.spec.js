import fs from "fs";
import path from "path";
import prettier from "prettier";

const utilityCssPath = path.resolve(
  __dirname,
  "../lib/build/css/dhig-utility.css"
);

const componentCssPath = path.resolve(
  __dirname,
  "../lib/build/css/dhig-tw-components.css"
);

describe("Tailwind CSS files", () => {
  it("matches the utility snapshot", () => {
    const cssContent = fs.readFileSync(utilityCssPath, "utf8");
    const formattedCss = prettier.format(cssContent, { parser: "css" });
    expect(formattedCss).toMatchSnapshot();
  });

  it("matches the component snapshot", () => {
    const cssContent = fs.readFileSync(componentCssPath, "utf8");
    const formattedCss = prettier.format(cssContent, { parser: "css" });
    expect(formattedCss).toMatchSnapshot();
  });
});
