import type { ThemeData } from "../../types";
export declare const makeFormControlLabelStyles: ({ primitives, tokens }: ThemeData) => {
    MuiFormControlLabel: {
        styleOverrides: {
            root: {
                marginLeft: number;
                "&.Mui-disabled": {
                    opacity: number;
                    '& [class*="MuiCheckbox-root"]': {
                        "&.Mui-disabled": {
                            opacity: number;
                        };
                    };
                };
                "&.Mui-error": {
                    '& [class*="MuiFormControlLabel-label"]': {
                        color: string;
                    };
                    '& [class*="MuiCheckbox-root"]': {
                        "& > svg": {
                            outline: string;
                            outlineOffset: string;
                            borderRadius: string;
                        };
                    };
                };
                '& [class*="MuiFormControlLabel-label"][class*="MuiTypography-smallprint"]': {
                    fontSize: string;
                };
            };
            label: {
                "&.Mui-disabled": {
                    color: string;
                };
            };
        };
    };
};
//# sourceMappingURL=form-control-label.d.ts.map