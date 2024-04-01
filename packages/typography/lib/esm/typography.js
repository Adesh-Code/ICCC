var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// Libraries
import React from "react";
// Components
import MuiTypography from "@mui/material/Typography";
/**
 * @description iccc/typography
 *
 * @see Digital HIG Storybook: {@link https://storybook.digital-help-dev.autodesk.com/iccc/current/index.html?path=/docs/components-typography--api}
 */
const Typography = React.forwardRef((_a, ref) => {
    var { children, color, style, tabularNumeric = false, variant = 'body-copy-medium' } = _a, otherProps = __rest(_a, ["children", "color", "style", "tabularNumeric", "variant"]);
    /**
     * Utility for color processing: Default color set in theme data. Header variant type overrides this, and color prop overrides that.
     */
    const processColorStyle = (theme) => {
        let colorStyle = null;
        if (variant &&
            (variant.includes("display") || variant.includes("headline"))) {
            colorStyle = theme.tokens.colors["ink-on-background"];
        }
        if (color) {
            colorStyle = theme.tokens.colors[color];
        }
        return colorStyle;
    };
    return (React.createElement(MuiTypography, Object.assign({ ref: ref, variant: variant }, otherProps, { sx: [
            {
                color: (theme) => processColorStyle(theme)
            },
            tabularNumeric && {
                fontVariantNumeric: "tabular-nums"
            },
            style,
            otherProps.sx
        ] }), children));
});
export default Typography;
