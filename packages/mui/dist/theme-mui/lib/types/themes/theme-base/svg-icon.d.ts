import type { ThemeData } from "../../types";
export declare const makeSvgIconStyles: ({ primitives, tokens }: ThemeData) => {
    MuiSvgIcon: {
        defaultProps: {
            fontSize: string;
        };
        styleOverrides: {
            root: {
                color: string;
                display: string;
                fontSize: string;
                verticalAlign: string;
                height: string;
                width: string;
                "&[class*='MuiSvgIcon-fontSizeExtra-large']": {
                    height: string;
                    width: string;
                };
                "& g#error": {
                    fill: string;
                    color: string;
                };
                "& g#lock": {
                    fill: string;
                };
                "& use.dhig--icons--edit-marker-left": {
                    stroke: string;
                    color: string;
                };
                "& use.dhig--icons--edit-marker-right": {
                    stroke: string;
                    color: string;
                };
                "& use.dhig--display-icons--error": {
                    fill: string;
                    color: string;
                };
                "& use.dhig--ui-controls--error": {
                    fill: string;
                    color: string;
                };
                "& use.dhig--ui-controls--manual-width--error": {
                    fill: string;
                    color: string;
                };
                "& use.dhig--display-icons--lock": {
                    fill: string;
                };
            };
            fontSizeSmall: {
                height: string;
                width: string;
            };
            fontSizeMedium: {
                height: string;
                width: string;
            };
            fontSizeLarge: {
                height: string;
                width: string;
            };
        };
    };
};
//# sourceMappingURL=svg-icon.d.ts.map