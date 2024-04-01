import type { Breakpoints } from "@mui/material/styles";
import type { ThemeData } from "../../types";
export declare const makeGridStyles: ({ breakpoints, primitives, tokens }: ThemeData & {
    breakpoints: Breakpoints;
}) => {
    MuiGrid: {
        styleOverrides: {
            root: {
                "&[class*='MuiGrid-container']": {
                    maxWidth: string;
                };
            };
        };
    };
    MuiGrid2: {
        defaultProps: {
            spacing: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
        };
    };
};
//# sourceMappingURL=grid.d.ts.map