/* istanbul ignore file */
import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
/* TODO: [Typescript] remove ignores once icon is migrated */
// @ts-ignore
import CaretLeftIcon from "@iccc/icon/lib/build/icons/caret-left";
// @ts-ignore
import CaretRightIcon from "@iccc/icon/lib/build/icons/caret-right";
export const makePaginationStyles = ({ primitives, tokens }) => ({
    MuiPagination: {
        defaultProps: {
            shape: "rounded",
            variant: "outlined"
        },
        styleOverrides: {
            root: {
                '& + [class*="MuiTypography-root"]': {
                    lineHeight: primitives.lineHeights["compact"],
                    paddingTop: primitives.spacings["1"]
                },
                '&[single="true"]': {
                    "& .Mui-selected, & .Mui-selected.Mui-disabled": {
                        backgroundColor: "transparent",
                        border: 0,
                        color: tokens.colors["ink-on-background"],
                        opacity: tokens.opacities.default
                    }
                }
            },
            ul: {
                justifyContent: "center",
                "& li": {
                    margin: "0px 2px",
                    "&:focus-visible": {
                        outline: "none"
                    }
                }
            }
        }
    },
    MuiPaginationItem: {
        defaultProps: {
            shape: "rounded",
            slots: {
                // eslint-disable-next-line react/display-name
                previous: () => (React.createElement(SvgIcon, null,
                    React.createElement(CaretLeftIcon, null))),
                // eslint-disable-next-line react/display-name
                next: () => (React.createElement(SvgIcon, null,
                    React.createElement(CaretRightIcon, null)))
            },
            variant: "outlined"
        },
        styleOverrides: {
            root: Object.assign(Object.assign(Object.assign(Object.assign({ border: `${primitives.borderWidths["medium"]} solid transparent`, padding: `${primitives.spacings["1"]} ${primitives.spacings["3"]}` }, tokens.typography["short-copy-small"]), { lineHeight: primitives.lineHeights["default"], minWidth: primitives.spacings["7"], maxWidth: primitives.spacings["7"], height: primitives.spacings["7"], margin: 0, borderRadius: primitives.borderRadii.round }), tokens.transitions["state-blur"]), { color: tokens.colors["ink-on-background"], "&:hover": Object.assign({ backgroundColor: tokens.colors["activated-fill-subtle"] }, tokens.transitions["state-activate"]), "&:active": Object.assign({ backgroundColor: tokens.colors["activated-hover-fill-subtle"] }, tokens.transitions["state-activate"]), "&:focus-visible": Object.assign({ backgroundColor: tokens.colors["ink-on-fill-primary"], boxShadow: tokens.effects["focus-ring-reverse"] }, tokens.transitions["state-activate"]), "&.Mui-selected": Object.assign(Object.assign({ backgroundColor: tokens.colors["ink-on-fill-primary"], border: `${primitives.borderWidths["medium"]} solid ${tokens.colors["ink-on-background"]}` }, tokens.transitions["state-activate"]), { "&:hover": {
                        backgroundColor: tokens.colors["ink-on-fill-primary"]
                    }, "&:focus-visible": {
                        backgroundColor: tokens.colors["ink-on-fill-primary"]
                    } }), "&.Mui-disabled": {
                    border: 0
                } }),
            previousNext: {
                borderRadius: "50%",
                minWidth: primitives.spacings["6"],
                maxWidth: primitives.spacings["6"],
                height: primitives.spacings["6"],
                padding: "unset"
            },
            ellipsis: {
                cursor: "default",
                "&:hover, &:active, &:focus-visible": {
                    backgroundColor: "transparent"
                }
            },
            rounded: {
                borderRadius: primitives.borderRadii.small
            }
        }
    }
});
