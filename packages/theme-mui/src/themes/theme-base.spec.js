import { getThemeBase } from "./theme-base";
import lightComponentTokens from "@iccc/theme-data/lib/build/json/light/component-tokens.json";
import lightDesignTokens from "@iccc/theme-data/lib/build/json/light/design-tokens.json";

describe("getThemeBase", () => {
  it("generates correct breakpoints", () => {
    const themeBase = getThemeBase({
      themeData: {
        ...lightDesignTokens,
        tokens: {
          ...lightDesignTokens.tokens,
          ...lightComponentTokens.tokens
        }
      }
    });

    const { breakpoints } = themeBase;

    expect(breakpoints.values).toEqual({
      xs: 0,
      sm: 0,
      md: 560,
      lg: 1040,
      xl: 1520
    });
  });

  it("generates correct transitions", () => {
    const themeBase = getThemeBase({
      themeData: {
        ...lightDesignTokens,
        tokens: {
          ...lightDesignTokens.tokens,
          ...lightComponentTokens.tokens
        }
      }
    });

    const { duration, easing } = themeBase.transitions;

    expect(duration).toEqual({
      enter: "375ms",
      fade: "375ms",
      leave: "375ms",
      morph: "312.5ms",
      "state-activate": "187.5ms",
      "state-blur": "250ms"
    });

    expect(easing).toEqual({
      "state-activate": "cubic-bezier(0.2, 0, 0.4, 1)",
      "state-blur": "cubic-bezier(0.2, 0, 0.8, 1)",
      leave: "cubic-bezier(0.6, 0, 1, 1)",
      enter: "cubic-bezier(0, 0, 0.4, 1)",
      morph: "cubic-bezier(0.2, 0, 0.8, 1)",
      fade: "cubic-bezier(0.2, 0, 0.8, 1)"
    });
  });
});
