import type { ThemeData } from "../../types";
export declare const makeOutlinedInputStyles: ({ primitives, tokens }: ThemeData) => {
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                boxShadow: string;
                borderRadius: string;
                outline: string;
                '&:not(.Mui-disabled) [class*="MuiOutlinedInput-input"]:before': {
                    left: number;
                    right: number;
                    bottom: number;
                    display: string;
                    height: string;
                    content: string;
                    position: string;
                };
                '& [class*="MuiSelect-icon"], [class*="MuiNativeSelect-icon"]': {
                    color: string;
                    marginRight: string;
                };
                "&.Mui-error": {
                    boxShadow: string;
                    '&:hover, & [class*="MuiOutlinedInput-input"]:focus-visible:before': {
                        boxShadow: string;
                    };
                    "&.Mui-focused": {
                        boxShadow: string;
                    };
                };
                "&.Mui-disabled": {
                    opacity: number;
                    "& .MuiSvgIcon-root": {
                        color: string;
                    };
                };
            };
            input: {
                padding: string;
                height: string;
                "&.Mui-error": {
                    "&:focus:before": {
                        boxShadow: string;
                    };
                    "&:hover:before": {
                        boxShadow: string;
                    };
                };
                "&[aria-expanded='true']": {
                    borderBottomWidth: string;
                    borderRadius: string;
                    boxShadow: string;
                    "&:before": {
                        boxShadow: string;
                    };
                    "&.Mui-error": {
                        boxShadow: string;
                        "&:before": {
                            boxShadow: string;
                        };
                    };
                };
                "&:hover:before": {
                    borderBottomWidth: string;
                    boxShadow: string;
                    transitionTimingFunction: string;
                    transitionDuration: string;
                };
                "&:focus:before, &:focus-visible:before": {
                    borderBottomWidth: string;
                    borderRadius: string;
                    boxShadow: string;
                };
            };
            notchedOutline: {
                border: number;
                borderRadius: string;
            };
        };
    };
};
//# sourceMappingURL=outlined-input.d.ts.map