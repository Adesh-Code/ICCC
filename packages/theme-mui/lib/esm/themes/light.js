import { getThemeBase } from "./theme-base";
/* TODO: [Typescript] remove ignores once theme-data is migrated */
// @ts-ignore
import lightComponentTokens from "@iccc/theme-data/lib/build/json/light/component-tokens.json";
// @ts-ignore
import lightDesignTokens from "@iccc/theme-data/lib/build/json/light/design-tokens.json";
const themeData = Object.assign(Object.assign({}, lightDesignTokens), { tokens: Object.assign(Object.assign({}, lightDesignTokens.tokens), lightComponentTokens.tokens) });
const theme = getThemeBase({
    themeData
});
export default theme;
