import { getThemeBase } from "./theme-base";
/* TODO: [Typescript] remove ignores once theme-data is migrated */
// @ts-ignore
import darkComponentTokens from "@iccc/theme-data/lib/build/json/dark/component-tokens.json";
// @ts-ignore
import darkDesignTokens from "@iccc/theme-data/lib/build/json/dark/design-tokens.json";
const themeOptions = {
    paletteMode: "dark",
    themeData: Object.assign(Object.assign({}, darkDesignTokens), { tokens: Object.assign(Object.assign({}, darkDesignTokens.tokens), darkComponentTokens.tokens) })
};
const theme = getThemeBase(themeOptions);
export default theme;
