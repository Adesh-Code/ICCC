import type { ThemeData } from "../../types";
export declare const makeSnackbarStyles: ({ primitives, tokens }: ThemeData) => {
    MuiSnackbar: {
        defaultProps: {
            anchorOrigin: {
                vertical: string;
                horizontal: string;
            };
        };
        styleOverrides: {
            anchorOriginBottomCenter: {
                [x: string]: {
                    bottom: string;
                };
            };
            anchorOriginTopRight: {
                [x: string]: {
                    top: string;
                    right: string;
                };
            };
        };
    };
    MuiSnackbarContent: {
        styleOverrides: {
            root: {
                [x: string]: string | {
                    minWidth: string;
                };
                display: string;
                justifyContent: string;
                alignItems: string;
                backgroundColor: string;
                backgroundImage: string;
                boxShadow: string;
                padding: string;
                minWidth: string;
                minHeight: string;
                margin: string;
            };
            message: {
                [x: string]: string | {
                    marginRight: string;
                    fontSize: string;
                    minWidth?: undefined;
                    maxWidth?: undefined;
                    '& [class*="MuiLink"]'?: undefined;
                    display?: undefined;
                    padding?: undefined;
                    '& [class*="MuiContainer-root"]'?: undefined;
                    justifyContent?: undefined;
                } | {
                    minWidth: string;
                    maxWidth: string;
                    '& [class*="MuiLink"]': {
                        cursor: string;
                    };
                    marginRight?: undefined;
                    fontSize?: undefined;
                    display?: undefined;
                    padding?: undefined;
                    '& [class*="MuiContainer-root"]'?: undefined;
                    justifyContent?: undefined;
                } | {
                    display: string;
                    padding: string;
                    '& [class*="MuiContainer-root"]': {
                        minWidth: string;
                        maxWidth: string;
                        padding: string;
                        marginLeft: string;
                        '& [class*="MuiTypography-root"] + [class*="MuiTypography-root"]': {
                            cursor: string;
                            marginTop: string;
                        };
                    };
                    marginRight?: undefined;
                    fontSize?: undefined;
                    minWidth?: undefined;
                    maxWidth?: undefined;
                    '& [class*="MuiLink"]'?: undefined;
                    justifyContent?: undefined;
                } | {
                    minWidth: string;
                    justifyContent: string;
                    marginRight?: undefined;
                    fontSize?: undefined;
                    maxWidth?: undefined;
                    '& [class*="MuiLink"]'?: undefined;
                    display?: undefined;
                    padding?: undefined;
                    '& [class*="MuiContainer-root"]'?: undefined;
                };
                display: string;
                alignItems: string;
                justifyContent: string;
                padding: string;
                marginRight: string;
                '& [class*="MuiSvgIcon-root"]': {
                    marginRight: string;
                    fontSize: string;
                };
                '& > [class*="MuiTypography-root"]': {
                    minWidth: string;
                    maxWidth: string;
                    '& [class*="MuiLink"]': {
                        cursor: string;
                    };
                };
                '& > [class*="MuiContainer-root"]': {
                    display: string;
                    padding: string;
                    '& [class*="MuiContainer-root"]': {
                        minWidth: string;
                        maxWidth: string;
                        padding: string;
                        marginLeft: string;
                        '& [class*="MuiTypography-root"] + [class*="MuiTypography-root"]': {
                            cursor: string;
                            marginTop: string;
                        };
                    };
                };
            };
            action: {
                [x: string]: string | {
                    marginRight: string;
                    alignSelf: string;
                    paddingLeft?: undefined;
                    cursor?: undefined;
                    marginLeft?: undefined;
                } | {
                    paddingLeft: string;
                    marginRight?: undefined;
                    alignSelf?: undefined;
                    cursor?: undefined;
                    marginLeft?: undefined;
                } | {
                    padding: string;
                    borderRadius: string;
                    border: string;
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:focus": {
                        outline: string;
                    };
                    "&:focus-visible": {
                        "&:hover, &:active": {
                            backgroundColor: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        border: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                    boxShadow: string;
                    cursor: string;
                    fontSize: string;
                    marginRight?: undefined;
                    alignSelf?: undefined;
                    paddingLeft?: undefined;
                    marginLeft?: undefined;
                } | {
                    cursor: string;
                    marginRight?: undefined;
                    alignSelf?: undefined;
                    paddingLeft?: undefined;
                    marginLeft?: undefined;
                } | {
                    marginLeft: string;
                    marginRight?: undefined;
                    alignSelf?: undefined;
                    paddingLeft?: undefined;
                    cursor?: undefined;
                };
                margin: string;
                padding: string;
                alignSelf: string;
                '&:not(:has( > [class*="MuiSvgIcon-root"]))': {
                    marginRight: string;
                    alignSelf: string;
                };
                '& [class*="MuiSvgIcon-root"]': {
                    padding: string;
                    borderRadius: string;
                    border: string;
                    "&:hover": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:active": {
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        backgroundColor: string;
                    };
                    "&:focus": {
                        outline: string;
                    };
                    "&:focus-visible": {
                        "&:hover, &:active": {
                            backgroundColor: string;
                        };
                        transitionTimingFunction: string;
                        transitionDuration: string;
                        border: string;
                    };
                    transitionTimingFunction: string;
                    transitionDuration: string;
                    backgroundColor: string;
                    boxShadow: string;
                    cursor: string;
                    fontSize: string;
                };
                '& [class*="MuiTypography-root"] [class*="MuiLink"]': {
                    cursor: string;
                };
                '& [class*="MuiTypography-root"] + [class*="MuiSvgIcon-root"]': {
                    marginLeft: string;
                };
            };
        };
    };
};
//# sourceMappingURL=snackbar.d.ts.map