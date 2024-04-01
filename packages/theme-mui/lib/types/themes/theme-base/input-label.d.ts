import type { ThemeData } from "../../types";
export declare const makeInputLabelStyles: ({ primitives, tokens }: ThemeData) => {
    MuiInputLabel: {
        styleOverrides: {
            root: {
                maxWidth: string;
                "& .DhigInputLabel--hintText, &:not(.Mui-required) > [class*='MuiTypography']": {
                    paddingLeft: string;
                    color: string;
                };
                "&.Mui-error": {
                    color: string;
                };
                "&.Mui-disabled": {
                    opacity: number;
                };
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                lineHeight: string;
                marginBottom: string;
                color: string;
            };
            formControl: {
                "&[class*='MuiInputLabel-root']": {
                    position: string;
                    left: string;
                    top: string;
                    transform: string;
                };
            };
            shrink: {
                transform: string;
                transformOrigin: string;
            };
            filled: {
                transform: string;
                '&[class*="MuiInputLabel-shrink"]': {
                    transform: string;
                };
                marginLeft: string;
            };
            outlined: {
                transform: string;
                '&[class*="MuiInputLabel-shrink"]': {
                    transform: string;
                };
            };
        };
    };
};
//# sourceMappingURL=input-label.d.ts.map