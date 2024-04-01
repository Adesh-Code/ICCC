import tailwindConfig from "../tailwind.config.cjs";

describe("Tailwind config", () => {
  it("generates expected CSS variables for both themes", () => {
    const pluginsConfig = tailwindConfig.plugins;

    const mockTheme = {
      "colors.background.light": "#ffffff",
      "colors.background.dark": "#000000",
      "colors.text-on-background.light": "#000000",
      "colors.text-on-background.dark": "#ffffff"
    };

    const mockData = {
      addUtilities: jest.fn(),
      theme: jest.fn((path) => mockTheme[path])
    };

    const resolvedPlugins = pluginsConfig.map((plugin) => {
      plugin(mockData);
      return mockData.addUtilities.mock.calls.map((call) => call[0]);
    });

    expect(resolvedPlugins).toMatchSnapshot();
  });

  it("generates correct theme values", () => {
    const themeConfig = tailwindConfig.theme;
    expect(themeConfig).toMatchSnapshot();
  });
});
