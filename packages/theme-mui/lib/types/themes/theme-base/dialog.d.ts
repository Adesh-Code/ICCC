import React from "react";
import type { Breakpoints } from "@mui/material/styles";
import type { ThemeData, PaletteMode } from "../../types";
import { TransitionProps } from '@mui/material/transitions';
export declare const makeDialogStyles: ({ breakpoints, paletteMode, primitives, tokens }: ThemeData & {
    breakpoints: Breakpoints;
} & {
    paletteMode: PaletteMode;
}) => {
    MuiBackdrop: {
        defaultProps: {
            TransitionComponent: React.ForwardRefExoticComponent<TransitionProps & {
                children: React.ReactElement<any, any>;
            } & React.RefAttributes<unknown>>;
        };
        styleOverrides: {
            root: {
                "&.DhigModal--backdrop--light": {
                    backgroundColor: string;
                };
                "&.DhigModal--backdrop--default": {
                    backgroundColor: string;
                };
            };
        };
    };
    MuiDialog: {
        defaultProps: {
            TransitionComponent: React.ForwardRefExoticComponent<TransitionProps & {
                children: React.ReactElement<any, any>;
            } & React.RefAttributes<unknown>>;
        };
        styleOverrides: {
            root: {
                display: string;
                alignItems: string;
                justifyContent: string;
                '& [class*="MuiPaper-root"]': {
                    color: string;
                };
                "& > [role='presentation']": {
                    [x: string]: {
                        width: string;
                        height: string;
                    };
                };
            };
            paper: {
                [x: string]: string | {
                    color: string;
                    backgroundColor: string;
                    borderRadius: string;
                    padding: string;
                    position: string;
                    top: string;
                    right: string;
                    "&:hover": {
                        backgroundColor: string;
                    };
                    "&:focus": {
                        boxShadow: string;
                    };
                    "&:focus:active": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    "&:active": {
                        backgroundColor: string;
                    };
                    "& svg": {
                        height: string;
                        width: string;
                    };
                } | {
                    marginBottom: string;
                    marginTop: string;
                    marginLeft?: undefined;
                    marginRight?: undefined;
                    '& [class*="MuiDialogContent-root"]'?: undefined;
                    backgroundColor?: undefined;
                    borderRadius?: undefined;
                    boxShadow?: undefined;
                    maxWidth?: undefined;
                    '& [class*="MuiDialogTitle-root"]'?: undefined;
                    '& [class*="MuiDialogActions-root"]'?: undefined;
                    paddingRight?: undefined;
                } | {
                    marginLeft: string;
                    marginRight: string;
                    marginBottom?: undefined;
                    marginTop?: undefined;
                    '& [class*="MuiDialogContent-root"]'?: undefined;
                    backgroundColor?: undefined;
                    borderRadius?: undefined;
                    boxShadow?: undefined;
                    maxWidth?: undefined;
                    '& [class*="MuiDialogTitle-root"]'?: undefined;
                    '& [class*="MuiDialogActions-root"]'?: undefined;
                    paddingRight?: undefined;
                } | {
                    '& [class*="MuiDialogContent-root"]': {
                        padding: string;
                        "& img": {
                            marginBottom: string;
                            height: string;
                            width: string;
                        };
                        "& [class*='MuiSvgIcon-root']": {
                            height: string;
                            paddingBottom: string;
                            width: string;
                        };
                        borderRadius?: undefined;
                        display?: undefined;
                        alignItems?: undefined;
                        justifyContent?: undefined;
                        overflow?: undefined;
                        marginBottom?: undefined;
                        "& :first-of-type"?: undefined;
                        "& ~ *"?: undefined;
                    };
                    marginBottom?: undefined;
                    marginTop?: undefined;
                    marginLeft?: undefined;
                    marginRight?: undefined;
                    backgroundColor?: undefined;
                    borderRadius?: undefined;
                    boxShadow?: undefined;
                    maxWidth?: undefined;
                    '& [class*="MuiDialogTitle-root"]'?: undefined;
                    '& [class*="MuiDialogActions-root"]'?: undefined;
                    paddingRight?: undefined;
                } | {
                    [x: string]: string | {
                        marginLeft: string;
                        marginRight: string;
                        maxHeight: string;
                        margin?: undefined;
                        borderRadius?: undefined;
                        padding?: undefined;
                        display?: undefined;
                        alignItems?: undefined;
                        justifyContent?: undefined;
                        overflow?: undefined;
                        marginBottom?: undefined;
                        "& :first-of-type"?: undefined;
                        "& ~ *"?: undefined;
                    } | {
                        margin: string;
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        maxHeight?: undefined;
                        borderRadius?: undefined;
                        padding?: undefined;
                        display?: undefined;
                        alignItems?: undefined;
                        justifyContent?: undefined;
                        overflow?: undefined;
                        marginBottom?: undefined;
                        "& :first-of-type"?: undefined;
                        "& ~ *"?: undefined;
                    } | {
                        borderRadius: string;
                        padding: string;
                        display: string;
                        alignItems: string;
                        justifyContent: string;
                        overflow: string;
                        marginBottom: string;
                        "& :first-of-type": {
                            maxWidth: string;
                            maxHeight: string;
                            overflow: string;
                        };
                        "& ~ *": {
                            color: string;
                        };
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        maxHeight?: undefined;
                        margin?: undefined;
                    };
                    backgroundColor: string;
                    borderRadius: string;
                    boxShadow: string;
                    maxWidth: string;
                    '& [class*="MuiDialogContent-root"]': {
                        borderRadius: string;
                        padding: string;
                        display: string;
                        alignItems: string;
                        justifyContent: string;
                        overflow: string;
                        marginBottom: string;
                        "& :first-of-type": {
                            maxWidth: string;
                            maxHeight: string;
                            overflow: string;
                        };
                        "& ~ *": {
                            color: string;
                        };
                        "& img"?: undefined;
                        "& [class*='MuiSvgIcon-root']"?: undefined;
                    };
                    marginBottom?: undefined;
                    marginTop?: undefined;
                    marginLeft?: undefined;
                    marginRight?: undefined;
                    '& [class*="MuiDialogTitle-root"]'?: undefined;
                    '& [class*="MuiDialogActions-root"]'?: undefined;
                    paddingRight?: undefined;
                } | {
                    [x: string]: {
                        position: string;
                        bottom: string;
                        margin: number;
                        borderBottomLeftRadius: string;
                        borderBottomRightRadius: string;
                        boxShadow: string;
                        borderTop: string;
                    };
                    marginBottom?: undefined;
                    marginTop?: undefined;
                    marginLeft?: undefined;
                    marginRight?: undefined;
                    '& [class*="MuiDialogContent-root"]'?: undefined;
                    backgroundColor?: undefined;
                    borderRadius?: undefined;
                    boxShadow?: undefined;
                    maxWidth?: undefined;
                    '& [class*="MuiDialogTitle-root"]'?: undefined;
                    '& [class*="MuiDialogActions-root"]'?: undefined;
                    paddingRight?: undefined;
                } | {
                    '& [class*="MuiDialogTitle-root"]': {
                        boxShadow: string;
                        paddingBottom: string;
                    };
                    '& [class*="MuiDialogActions-root"]': {
                        boxShadow: string;
                    };
                    '& [class*="MuiDialogContent-root"]': {
                        padding: string;
                        "& img"?: undefined;
                        "& [class*='MuiSvgIcon-root']"?: undefined;
                        borderRadius?: undefined;
                        display?: undefined;
                        alignItems?: undefined;
                        justifyContent?: undefined;
                        overflow?: undefined;
                        marginBottom?: undefined;
                        "& :first-of-type"?: undefined;
                        "& ~ *"?: undefined;
                    };
                    marginBottom?: undefined;
                    marginTop?: undefined;
                    marginLeft?: undefined;
                    marginRight?: undefined;
                    backgroundColor?: undefined;
                    borderRadius?: undefined;
                    boxShadow?: undefined;
                    maxWidth?: undefined;
                    paddingRight?: undefined;
                } | {
                    paddingRight: string;
                    marginBottom?: undefined;
                    marginTop?: undefined;
                    marginLeft?: undefined;
                    marginRight?: undefined;
                    '& [class*="MuiDialogContent-root"]'?: undefined;
                    backgroundColor?: undefined;
                    borderRadius?: undefined;
                    boxShadow?: undefined;
                    maxWidth?: undefined;
                    '& [class*="MuiDialogTitle-root"]'?: undefined;
                    '& [class*="MuiDialogActions-root"]'?: undefined;
                } | {
                    position: string;
                    "& [class*='MuiSvgIcon-root'] svg": {
                        color: string;
                        height: string;
                        width: string;
                    };
                    color: string;
                    backgroundColor: string;
                    borderRadius: string;
                    padding: string;
                    top: string;
                    right: string;
                    "&:hover": {
                        backgroundColor: string;
                    };
                    "&:focus": {
                        boxShadow: string;
                    };
                    "&:focus:active": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    "&:active": {
                        backgroundColor: string;
                    };
                    "& svg": {
                        height: string;
                        width: string;
                    };
                    marginBottom?: undefined;
                    marginTop?: undefined;
                    marginLeft?: undefined;
                    marginRight?: undefined;
                    '& [class*="MuiDialogContent-root"]'?: undefined;
                    boxShadow?: undefined;
                    maxWidth?: undefined;
                    '& [class*="MuiDialogTitle-root"]'?: undefined;
                    '& [class*="MuiDialogActions-root"]'?: undefined;
                    paddingRight?: undefined;
                };
                background: string;
                borderRadius: string;
                boxShadow: string;
                "&.DhigModal--type--alert": {
                    '& [class*="MuiDialogContent-root"]': {
                        padding: string;
                        "& img": {
                            marginBottom: string;
                            height: string;
                            width: string;
                        };
                        "& [class*='MuiSvgIcon-root']": {
                            height: string;
                            paddingBottom: string;
                            width: string;
                        };
                    };
                };
                "&.DhigModal--type--lightbox": {
                    [x: string]: string | {
                        marginLeft: string;
                        marginRight: string;
                        maxHeight: string;
                        margin?: undefined;
                        borderRadius?: undefined;
                        padding?: undefined;
                        display?: undefined;
                        alignItems?: undefined;
                        justifyContent?: undefined;
                        overflow?: undefined;
                        marginBottom?: undefined;
                        "& :first-of-type"?: undefined;
                        "& ~ *"?: undefined;
                    } | {
                        margin: string;
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        maxHeight?: undefined;
                        borderRadius?: undefined;
                        padding?: undefined;
                        display?: undefined;
                        alignItems?: undefined;
                        justifyContent?: undefined;
                        overflow?: undefined;
                        marginBottom?: undefined;
                        "& :first-of-type"?: undefined;
                        "& ~ *"?: undefined;
                    } | {
                        borderRadius: string;
                        padding: string;
                        display: string;
                        alignItems: string;
                        justifyContent: string;
                        overflow: string;
                        marginBottom: string;
                        "& :first-of-type": {
                            maxWidth: string;
                            maxHeight: string;
                            overflow: string;
                        };
                        "& ~ *": {
                            color: string;
                        };
                        marginLeft?: undefined;
                        marginRight?: undefined;
                        maxHeight?: undefined;
                        margin?: undefined;
                    };
                    backgroundColor: string;
                    borderRadius: string;
                    boxShadow: string;
                    maxWidth: string;
                    '& [class*="MuiDialogContent-root"]': {
                        borderRadius: string;
                        padding: string;
                        display: string;
                        alignItems: string;
                        justifyContent: string;
                        overflow: string;
                        marginBottom: string;
                        "& :first-of-type": {
                            maxWidth: string;
                            maxHeight: string;
                            overflow: string;
                        };
                        "& ~ *": {
                            color: string;
                        };
                    };
                };
                "&.DhigModal--type--modal": {
                    [x: string]: {
                        position: string;
                        bottom: string;
                        margin: number;
                        borderBottomLeftRadius: string;
                        borderBottomRightRadius: string;
                        boxShadow: string;
                        borderTop: string;
                    };
                };
                "&.DhigModal--styleVariant--subdivision": {
                    '& [class*="MuiDialogTitle-root"]': {
                        boxShadow: string;
                        paddingBottom: string;
                    };
                    '& [class*="MuiDialogActions-root"]': {
                        boxShadow: string;
                    };
                    '& [class*="MuiDialogContent-root"]': {
                        padding: string;
                    };
                };
                '& .DhigModal--closeButton--default ~ [class*="MuiDialogTitle-root"]': {
                    paddingRight: string;
                };
                "& .DhigModal--closeButton--default": {
                    color: string;
                    backgroundColor: string;
                    borderRadius: string;
                    padding: string;
                    position: string;
                    top: string;
                    right: string;
                    "&:hover": {
                        backgroundColor: string;
                    };
                    "&:focus": {
                        boxShadow: string;
                    };
                    "&:focus:active": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    "&:active": {
                        backgroundColor: string;
                    };
                    "& svg": {
                        height: string;
                        width: string;
                    };
                };
                "& .DhigModal--closeButton--outside": {
                    position: string;
                    "& [class*='MuiSvgIcon-root'] svg": {
                        color: string;
                        height: string;
                        width: string;
                    };
                    color: string;
                    backgroundColor: string;
                    borderRadius: string;
                    padding: string;
                    top: string;
                    right: string;
                    "&:hover": {
                        backgroundColor: string;
                    };
                    "&:focus": {
                        boxShadow: string;
                    };
                    "&:focus:active": {
                        backgroundColor: string;
                        boxShadow: string;
                    };
                    "&:active": {
                        backgroundColor: string;
                    };
                    "& svg": {
                        height: string;
                        width: string;
                    };
                };
            };
            paperWidthXs: {
                maxWidth: number;
            };
            paperWidthSm: {
                maxWidth: number;
            };
            paperWidthMd: {
                maxWidth: number;
            };
            paperWidthLg: {
                maxWidth: number;
            };
            paperWidthXl: {
                maxWidth: number;
            };
            paperScrollPaper: {
                [x: string]: {
                    maxHeight: string;
                };
            };
        };
    };
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                padding: string;
                "& .DhigModal--logo": {
                    filter: string;
                    height: string;
                    width: string;
                };
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                letterSpacing: string;
                lineHeight: string;
            };
        };
    };
    MuiDialogContent: {
        styleOverrides: {
            root: {
                padding: string;
                marginRight: string;
            };
        };
    };
    MuiDialogActions: {
        styleOverrides: {
            root: {
                padding: string;
            };
        };
    };
};
//# sourceMappingURL=dialog.d.ts.map