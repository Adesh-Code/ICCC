import type { ThemeData } from "../../types";
export declare const makeTypographyStyles: ({ tokens }: Pick<ThemeData, "tokens">) => {
    MuiTypography: {
        defaultProps: {
            component: string;
        };
        styleOverrides: {
            root: {
                color: string;
            };
            colorPrimary: {
                color: string;
            };
            colorError: {
                color: string;
            };
        };
    };
};
//# sourceMappingURL=typography.d.ts.map