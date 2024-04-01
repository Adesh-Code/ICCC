import type { ThemeData } from "../../types";
export declare const makeFilledInputStyles: ({ primitives, tokens }: ThemeData) => {
    MuiFilledInput: {
        styleOverrides: {
            root: {
                backgroundColor: string;
                borderTopLeftRadius: number;
                borderTopRightRadius: number;
                boxShadow: string;
                "&:hover": {
                    backgroundColor: string;
                    boxShadow: string;
                };
                "&.Mui-focused": {
                    backgroundColor: string;
                    boxShadow: string;
                };
                '& + [class*="MuiFormHelperText-root"]': {
                    marginLeft: string;
                };
                "&.Mui-error": {
                    marginLeft: number;
                    '& div[class*="MuiFilledInput-input"]': {
                        borderRadius: string;
                        boxShadow: string;
                        padding: string;
                        "&:focus": {
                            backgroundColor: string;
                        };
                        "&:hover, &:active:not(.Mui-disabled), &[aria-expanded='true'][class*=\"MuiSelect-filled\"]": {
                            "&:not(.Mui-disabled):not(:focus):not(:focus-visible)": {
                                borderBottom: string;
                                "& + input + .MuiSelect-icon": {
                                    marginRight: string;
                                };
                            };
                        };
                    };
                };
                '& [class*="MuiSelect-icon"], [class*="MuiNativeSelect-icon"]': {
                    color: string;
                    marginRight: string;
                    position: string;
                    right: number;
                    pointerEvents: string;
                };
                '&:not(.Mui-disabled) [class*="MuiFilledInput-input"]:before': {
                    left: number;
                    right: number;
                    bottom: number;
                    display: string;
                    height: string;
                    content: string;
                    position: string;
                };
                '&[class*="MuiSelect-root"]:not(.Mui-disabled, .Mui-error):before': {
                    borderBottom: string;
                    left: string;
                };
                '&[class*="MuiSelect-root"]:hover:not(.Mui-disabled, .Mui-error):before': {
                    borderBottom: string;
                };
            };
            input: {
                padding: string;
                borderBottom: string;
                height: string;
                "&:focus, &:focus-visible": {
                    borderRadius: string;
                    boxShadow: string;
                    backgroundColor: string;
                    "&[aria-expanded='true']": {
                        boxShadow: string;
                    };
                };
                "&[data-active='true']:not(.Mui-error)": {
                    borderBottom: string;
                };
            };
            underline: {
                borderBottom: number;
                "&:hover:before": {
                    borderBottom: string;
                    left: string;
                };
                "&:hover:focus-within:before": {
                    borderBottom: number;
                };
                "&:before, &:after, &.Mui-disabled:before, &.Mui-error:before, &:focus:before, &:focus-visible:before, &:active:before": {
                    borderBottom: number;
                };
            };
        };
    };
};
//# sourceMappingURL=filled-input.d.ts.map