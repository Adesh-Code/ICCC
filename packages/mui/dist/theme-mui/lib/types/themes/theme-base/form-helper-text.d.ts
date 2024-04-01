import type { ThemeData } from "../../types";
export declare const makeFormHelperTextStyles: ({ primitives, tokens }: ThemeData) => {
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                display: string;
                alignItems: string;
                "& > svg": {
                    paddingRight: string;
                };
                "&.Mui-error": {
                    fontWeight: number;
                    opacity: number;
                };
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                lineHeight: string;
                marginTop: string;
                color: string;
            };
            contained: {
                marginLeft: number;
                marginRight: number;
            };
        };
    };
};
//# sourceMappingURL=form-helper-text.d.ts.map