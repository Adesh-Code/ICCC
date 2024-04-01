import type { ThemeData } from "../../types";
export declare const makeFormLabelStyles: ({ tokens }: Pick<ThemeData, "tokens">) => {
    MuiFormLabel: {
        styleOverrides: {
            root: {
                "&.Mui-error": {
                    color: string;
                };
                "&.Mui-disabled": {
                    color: string;
                };
            };
            asterisk: {
                display: string;
            };
        };
    };
};
//# sourceMappingURL=form-label.d.ts.map