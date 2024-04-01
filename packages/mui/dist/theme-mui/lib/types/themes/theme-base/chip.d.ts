import type { ThemeData } from "../../types";
export declare const makeChipStyles: ({ primitives, tokens }: ThemeData) => {
    MuiChip: {
        styleOverrides: {
            root: {
                "&:hover": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                };
                "&.DhigChip--selected": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                    color: string;
                };
                "&:has(svg:hover), &:has(svg:focus-visible)": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    boxShadow: string;
                    backgroundColor: string;
                };
                '& [class*="MuiChip-avatar"]': {
                    margin: string;
                    height: string;
                    width: string;
                    color: string;
                };
                '& [class*="MuiChip-icon"]': {
                    margin: string;
                    fontSize: string;
                    color: string;
                    height: string;
                    width: string;
                };
                '& [class*="MuiChip-deleteIcon"]': {
                    "&:hover, &:focus:not(:focus-visible):hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        color: string;
                        backgroundColor: string;
                    };
                    "&:focus-visible": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        boxShadow: string;
                        outline: string;
                    };
                    "&:focus:not(:focus-visible)": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        boxShadow: string;
                        outline: string;
                    };
                    "&:active, &:focus:not(:focus-visible):active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    tabIndex: number;
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    color: string;
                    fontSize: string;
                    outlineOffset: string;
                    borderRadius: string;
                    margin: string;
                    display: string;
                    position: string;
                    zIndex: number;
                    padding: string;
                };
                "&.Mui-disabled": {
                    opacity: number;
                };
                transitionTimingFunction: string;
                transitionDuration: string;
                fontWeight: number;
                width: string;
                padding: string;
                backgroundColor: string;
                color: string;
                fontFamily: string;
                fontSize: string;
                letterSpacing: string;
                lineHeight: string;
            };
            clickable: {
                "&:hover": {
                    boxShadow: string;
                    color: string;
                };
                "&:focus-visible": {
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    boxShadow: string;
                    backgroundColor: string;
                };
                "&:active": {
                    boxShadow: string;
                };
            };
            deletable: {
                "&:focus-visible": {
                    boxShadow: string;
                    backgroundColor: string;
                };
            };
            colorError: {
                backgroundColor: string;
                color: string;
                border: string;
                "&.DhigChip--selected": {
                    backgroundColor: string;
                    color: string;
                };
            };
            label: {
                padding: string;
            };
        };
    };
};
//# sourceMappingURL=chip.d.ts.map