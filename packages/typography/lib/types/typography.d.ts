import React from "react";
import { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { availableVariants, availableColors } from "./constants";
export type TypographyProps = {
    /**
     * DHIG Typography text colors
     */
    color?: typeof availableColors[number];
    /**
     * DHIG Tabular numeric, displays a set of figures where numbers are all of the same size, allowing them to be easily aligned like in tables.
     */
    tabularNumeric?: boolean;
    /**
     * DHIG Typography tokens
     */
    variant?: typeof availableVariants[number];
} & Omit<MuiTypographyProps, "variant" | "color">;
/**
 * @description iccc/typography
 *
 * @see Digital HIG Storybook: {@link https://storybook.digital-help-dev.autodesk.com/iccc/current/index.html?path=/docs/components-typography--api}
 */
declare const Typography: React.ForwardRefExoticComponent<TypographyProps>;
export default Typography;
//# sourceMappingURL=typography.d.ts.map