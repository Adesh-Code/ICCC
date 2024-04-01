import type { ThemeData } from "../../types";
export declare const makeFormControlStyles: ({ primitives, tokens }: ThemeData) => {
    MuiFormControl: {
        styleOverrides: {
            root: {
                '& label + [class*="MuiInput-formControl"]': {
                    marginTop: number;
                };
                "& legend": {
                    marginBottom: string;
                    fontSize: string;
                    color: string;
                };
                "& .DhigTextInput--count": {
                    color: string;
                    fontSize: string;
                    textAlign: string;
                    margin: string;
                };
                "& [class*='MuiFormLabel-colorSuccess'] + * + [class*='MuiFormHelperText-root']": {
                    color: string;
                    fontWeight: number;
                };
                "& [class*='MuiInputLabel-root'].Mui-focused": {
                    color: string;
                };
            };
        };
    };
};
//# sourceMappingURL=form-control.d.ts.map