import { getThemeBase } from "./theme-base";
import type { ThemeData } from "../types";
/* TODO: [Typescript] remove ignores once theme-data is migrated */
// @ts-ignore
import lightComponentTokens from "@iccc/theme-data/lib/build/json/light/component-tokens.json";
// @ts-ignore
import lightDesignTokens from "@iccc/theme-data/lib/build/json/light/design-tokens.json";

const themeData: ThemeData = {
  ...lightDesignTokens,
  tokens: {
    ...lightDesignTokens.tokens,
    ...lightComponentTokens.tokens
  },
};

const theme = getThemeBase({
  themeData
});

export default theme;
