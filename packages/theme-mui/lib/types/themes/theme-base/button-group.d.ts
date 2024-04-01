import type { ThemeData } from "../../types";
export declare const makeButtonGroupStyles: ({ primitives, tokens }: ThemeData) => {
    MuiButtonGroup: {
        defaultProps: {
            disableElevation: boolean;
            variant: string;
        };
        styleOverrides: {
            root: {
                '& [class*="MuiButton-root"]': {
                    '& [class*="MuiSvgIcon-root"]': {
                        height: string;
                        width: string;
                    };
                    "&:hover, &:focus, &:active, &:focus-visible": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        minWidth: string;
                    };
                    "&:first-of-type": {
                        borderTopRightRadius: string;
                        borderBottomRightRadius: string;
                    };
                    "&:last-of-type": {
                        borderTopLeftRadius: string;
                        borderBottomLeftRadius: string;
                    };
                    "&:not(:first-of-type)": {
                        "&:hover, &:focus, &:active": {
                            minWidth: string;
                        };
                    };
                    "&:not(:last-of-type)": {
                        "&:hover, &:focus, &:active": {
                            minWidth: string;
                        };
                    };
                    "&:not(:first-of-type):not(:last-of-type)": {
                        borderRadius: string;
                    };
                    '&[class*="MuiButton-sizeSmall"]': {
                        padding: string;
                    };
                    '&[class*="MuiButton-sizeMedium"]': {
                        padding: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    alignItems: string;
                };
                '& [class*="MuiButtonGroup-grouped"]': {
                    minWidth: string;
                    "&:hover": {
                        boxShadow: string;
                    };
                    "&:focus": {
                        boxShadow: string;
                    };
                    "&:focus:focus-visible": {
                        boxShadow: string;
                    };
                    "&:active, &:focus:active": {
                        boxShadow: string;
                    };
                    "&:not(:last-of-type):hover": {
                        borderRight: string;
                    };
                };
                '& + [class*="MuiPopper-root"]': {
                    zIndex: number;
                    '& [class*="MuiPaper-root"]': {
                        marginTop: string;
                        boxShadow: string;
                        backgroundColor: string;
                        '& [class*="MuiList-root"]': {
                            padding: string;
                        };
                    };
                };
            };
            contained: {
                '& [class*="MuiButton-root"]': {
                    "& svg": {
                        color: string;
                    };
                    "&:not(:last-of-type)": {
                        marginRight: string;
                    };
                };
            };
            outlined: {
                '& [class*="MuiButton-root"]': {
                    "& svg": {
                        color: string;
                    };
                    "&:not(:last-of-type)": {
                        borderRightColor: string;
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=button-group.d.ts.map