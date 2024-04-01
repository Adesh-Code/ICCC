import * as React from "react";
import type { ThemeData } from "../../types";
export declare const makeCheckboxStyles: ({ primitives, tokens }: ThemeData) => {
    MuiCheckbox: {
        defaultProps: {
            checkedIcon: React.JSX.Element;
            icon: React.JSX.Element;
            indeterminateIcon: React.JSX.Element;
        };
        styleOverrides: {
            root: {
                padding: string;
                margin: string;
                outlineOffset: number;
                '& [class*="MuiSvgIcon-fontSizeSmall"]': {
                    height: string;
                    width: string;
                };
                "&.Mui-disabled": {
                    opacity: number;
                    color: string;
                };
                "&:hover": {
                    backgroundColor: string;
                };
                "&:hover > svg": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    outline: string;
                };
                "&:focus, &.Mui-focusVisible, &:focus-visible > svg": {
                    outline: string;
                    outlineOffset: string;
                    borderRadius: string;
                    transition: string;
                };
                "&:active > svg": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    outline: string;
                };
                '&.Mui-checked:not([class*="MuiCheckbox-indeterminate"])': {
                    "& > svg": {
                        color: string;
                        background: string;
                    };
                    "& span": {
                        background: string;
                    };
                };
                "& > svg": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    height: string;
                    width: string;
                    padding: string;
                    border: string;
                    borderRadius: string;
                    boxSizing: string;
                };
                "& + [class*=\"MuiFormControlLabel-label\"]": {
                    color: string;
                    paddingLeft: string;
                    fontSize: string;
                    lineHeight: string;
                };
            };
            colorSecondary: {
                color: string;
            };
        };
    };
};
//# sourceMappingURL=checkbox.d.ts.map