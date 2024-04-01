import React from "react";
import type { ThemeData } from "../../types";
export declare const makeTabsStyles: ({ primitives, tokens }: ThemeData) => {
    MuiTabs: {
        defaultProps: {
            slots: {
                StartScrollButtonIcon: () => React.JSX.Element;
                EndScrollButtonIcon: () => React.JSX.Element;
            };
        };
        styleOverrides: {
            root: {
                position: string;
                "&.DhigTabs--styleVariant--default": any;
                "&.DhigTabs--styleVariant--quiet": any;
                "& [class*='MuiTabs-scroller'] + [class*='MuiTabScrollButton-root']": {
                    background: string;
                    right: string;
                    left: string;
                };
            };
            indicator: {
                left: string;
                top: string;
                display: string;
                alignItems: string;
                justifyContent: string;
            };
        };
    };
    MuiTab: {
        defaultProps: {
            wrapped: boolean;
            tabIndex: number;
        };
        styleOverrides: {
            root: {
                border: string;
                minWidth: string;
            };
        };
    };
    MuiTabScrollButton: {
        styleOverrides: {
            root: {
                color: string;
                height: string;
                width: string;
                position: string;
                zIndex: number;
                background: string;
                left: string;
                '& [class*="MuiSvgIcon"]': {
                    display: string;
                };
                "&:hover": {
                    '& [class*="MuiSvgIcon"]': {
                        display: string;
                    };
                };
                "@media (max-width: 599.95px)": {
                    "&[class*=\"MuiTabs-scrollButtonsDesktop\"]": {
                        display: string;
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=tabs.d.ts.map