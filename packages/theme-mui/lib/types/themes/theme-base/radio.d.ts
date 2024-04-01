import type { ThemeData } from "../../types";
export declare const makeRadioStyles: ({ primitives, tokens }: ThemeData) => {
    MuiRadio: {
        styleOverrides: {
            root: {
                fontSize: string;
                padding: string;
                margin: string;
                borderRadius: string;
                "&:hover": {
                    outline: string;
                };
                "&:focus, &.Mui-focusVisible": {
                    outline: string;
                    outlineOffset: string;
                };
                "&:active": {
                    outline: string;
                };
                '& + [class*="MuiFormControlLabel-label"]': {
                    color: string;
                    paddingLeft: string;
                    fontSize: string;
                    lineHeight: string;
                };
                '& [class*="MuiSvgIcon-root"]': {
                    width: string;
                    height: string;
                    color: string;
                };
                "& .DhigRadio--icon--inner": {
                    width: string;
                    height: string;
                    position: string;
                };
                '&[class*="MuiRadio-colorSecondary"]:hover, &[class*="MuiRadio-colorSecondary"].Mui-checked:hover': {
                    backgroundColor: string;
                };
            };
        };
    };
};
//# sourceMappingURL=radio.d.ts.map