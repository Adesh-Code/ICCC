import { getThemeBase } from "./theme-base";
import type { PaletteMode, ThemeData } from "../types";
/* TODO: [Typescript] remove ignores once theme-data is migrated */
// @ts-ignore
import darkComponentTokens from "@iccc/theme-data/lib/build/json/dark/component-tokens.json";
// @ts-ignore
import darkDesignTokens from "@iccc/theme-data/lib/build/json/dark/design-tokens.json";

interface ThemeOptions {
  paletteMode: PaletteMode;
  themeData: ThemeData;
}

const themeOptions: ThemeOptions = {
  paletteMode: "dark",
  themeData: {
    ...darkDesignTokens,
    tokens: {
      ...darkDesignTokens.tokens,
      ...darkComponentTokens.tokens
    }
  }
};

const theme = getThemeBase(themeOptions);

export default theme;
