import type { ThemeData } from "../../types";
export declare const makeToggleButtonStyles: ({ primitives, tokens }: ThemeData) => {
    MuiToggleButton: {
        styleOverrides: {
            root: {
                color: string;
                fontWeight: number;
                padding: string;
                border: string;
                boxSizing: string;
                "&:hover": {
                    backgroundColor: string;
                };
                "&:active": {
                    backgroundColor: string;
                    border: string;
                };
                "&.Mui-selected": {
                    backgroundColor: string;
                    color: string;
                    "&:hover": {
                        backgroundColor: string;
                    };
                };
                "&.Mui-disabled": {
                    border: string;
                    color: string;
                };
                fontFamily: string;
                fontSize: string;
                letterSpacing: string;
                lineHeight: string;
            };
            sizeSmall: {
                fontSize: string;
                padding: string;
            };
        };
    };
};
//# sourceMappingURL=toggle-button.d.ts.map