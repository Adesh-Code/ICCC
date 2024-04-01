import React from "react";
import type { ThemeData } from "../../types";
export declare const makePaginationStyles: ({ primitives, tokens }: ThemeData) => {
    MuiPagination: {
        defaultProps: {
            shape: string;
            variant: string;
        };
        styleOverrides: {
            root: {
                '& + [class*="MuiTypography-root"]': {
                    lineHeight: string;
                    paddingTop: string;
                };
                '&[single="true"]': {
                    "& .Mui-selected, & .Mui-selected.Mui-disabled": {
                        backgroundColor: string;
                        border: number;
                        color: string;
                        opacity: number;
                    };
                };
            };
            ul: {
                justifyContent: string;
                "& li": {
                    margin: string;
                    "&:focus-visible": {
                        outline: string;
                    };
                };
            };
        };
    };
    MuiPaginationItem: {
        defaultProps: {
            shape: string;
            slots: {
                previous: () => React.JSX.Element;
                next: () => React.JSX.Element;
            };
            variant: string;
        };
        styleOverrides: {
            root: {
                color: string;
                "&:hover": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
                "&:active": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
                "&:focus-visible": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                    boxShadow: string;
                };
                "&.Mui-selected": {
                    "&:hover": {
                        backgroundColor: string;
                    };
                    "&:focus-visible": {
                        backgroundColor: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                    border: string;
                };
                "&.Mui-disabled": {
                    border: number;
                };
                transitionTimingFunction: string;
                transitionDuration: string;
                lineHeight: string;
                minWidth: string;
                maxWidth: string;
                height: string;
                margin: number;
                borderRadius: string;
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                border: string;
                padding: string;
            };
            previousNext: {
                borderRadius: string;
                minWidth: string;
                maxWidth: string;
                height: string;
                padding: string;
            };
            ellipsis: {
                cursor: string;
                "&:hover, &:active, &:focus-visible": {
                    backgroundColor: string;
                };
            };
            rounded: {
                borderRadius: string;
            };
        };
    };
};
//# sourceMappingURL=pagination.d.ts.map