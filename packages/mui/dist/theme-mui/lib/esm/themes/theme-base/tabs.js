import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
/* TODO: [Typescript] remove ignores once icon is migrated */
// @ts-ignore
import LeftCaretIcon from "@iccc/icon/lib/build/ui-controls/caret-left";
// @ts-ignore
import RightCaretIcon from "@iccc/icon/lib/build/ui-controls/caret-right";
export const makeTabsStyles = ({ primitives, tokens }) => {
    const getTabStyles = (variant = "default") => {
        const { tab } = tokens;
        const padding = variant === "quiet"
            ? `${primitives.spacings["3"]} ${primitives.spacings["4"]}`
            : `${primitives.spacings["4"]} ${primitives.spacings["6"]}`;
        return Object.assign(Object.assign({}, tab.default), { fontSize: primitives.fontSizes["3"], fontWeight: primitives.fontWeights.stout, lineHeight: primitives.lineHeights.compact, padding, textTransform: "none", "&:hover": Object.assign({}, tab.hover), "&:focus-visible": Object.assign({}, tab.focus), "&:active": Object.assign({}, tab.pressed), "&.Mui-selected": Object.assign(Object.assign({}, tab.active), (variant === "quiet"
                ? {
                    backgroundColor: primitives.colors.detail.transparent
                }
                : {})), "&.Mui-selected:focus-visible": Object.assign(Object.assign({}, tab.focus), { backgroundColor: tokens.colors["fill-elevation-1"], color: tokens.colors["ink-on-background"] }), "&.Mui-disabled": {
                opacity: tokens.opacities.disabled
            } });
    };
    return {
        MuiTabs: {
            defaultProps: {
                slots: {
                    // eslint-disable-next-line react/display-name
                    StartScrollButtonIcon: () => (React.createElement(SvgIcon, { fontSize: "small" },
                        React.createElement(LeftCaretIcon, null))),
                    // eslint-disable-next-line react/display-name
                    EndScrollButtonIcon: () => (React.createElement(SvgIcon, { fontSize: "small" },
                        React.createElement(RightCaretIcon, null)))
                }
            },
            styleOverrides: {
                root: {
                    position: "relative",
                    "&.DhigTabs--styleVariant--default": Object.assign(Object.assign({}, tokens.tabs.default), { '&[class*="MuiTabs-vertical"] [class*="MuiTabs-scroller"] [class*="MuiTab-root"]': {
                            maxWidth: "none",
                            alignContent: "flex-start",
                            flexWrap: "wrap"
                        }, '& [class*="MuiTab-root"]': getTabStyles() }),
                    "&.DhigTabs--styleVariant--quiet": Object.assign(Object.assign({}, tokens.tabs.quiet), { '& [class*="MuiTabs-scroller"]': {
                            marginLeft: `-${primitives.spacings["4"]}`,
                            '& [class*="MuiTabs-indicator"]': {
                                top: "unset",
                                bottom: primitives.spacings["0"],
                                background: "transparent",
                                "&:after": {
                                    width: `calc( 100% - ${primitives.spacings["7"]} )`,
                                    height: "2px",
                                    content: "''",
                                    background: tokens.colors["ink-on-background"]
                                }
                            }
                        }, "&.DhigTabs--extendedUnderline": {
                            overflow: "unset",
                            "&:before, &:after": {
                                boxShadow: tokens.effects["divider-0-bottom"],
                                content: "''",
                                height: "100%",
                                position: "absolute",
                                width: "calc((100vw - 100%) / 2)"
                            },
                            "&:before": {
                                right: "100%"
                            },
                            "&:after": {
                                left: "100%"
                            },
                            '& [class*="MuiTabs-scroller"]': {
                                marginLeft: primitives.spacings["0"]
                            },
                            '&[class*="MuiTabs-vertical"]': {
                                overflow: "hidden"
                            }
                        }, '&[class*="MuiTabs-vertical"]': {
                            boxShadow: tokens.effects["divider-0-left"],
                            '& [class*="MuiTabs-scroller"]': {
                                marginLeft: primitives.spacings["0"],
                                '& [class*="MuiTabs-indicator"]': {
                                    background: tokens.colors["ink-on-background"]
                                },
                                '& [class*="MuiTab-root"]': {
                                    maxWidth: "none",
                                    alignContent: "flex-start",
                                    flexWrap: "wrap",
                                    "&.Mui-selected": {
                                        boxShadow: "none",
                                        "&:focus:active": {
                                            boxShadow: tokens.effects["tab-highlight-left"]
                                        }
                                    }
                                }
                            }
                        }, '& [class*="MuiTab-root"]': getTabStyles("quiet") }),
                    "& [class*='MuiTabs-scroller'] + [class*='MuiTabScrollButton-root']": {
                        background: `linear-gradient(270deg, ${tokens.colors["fade-gradient-opaque"]} 0%, ${tokens.colors["fade-gradient-semi-opaque"]} 33.33%, ${tokens.colors["fade-gradient-semi-transparent"]} 66.67%, ${tokens.colors["fade-gradient-transparent"]} 100%)`,
                        right: primitives.spacings["0"],
                        left: "unset"
                    }
                },
                indicator: {
                    left: primitives.spacings["0"],
                    top: primitives.spacings["0"],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }
        },
        MuiTab: {
            defaultProps: {
                wrapped: true,
                tabIndex: 0
            },
            styleOverrides: {
                root: {
                    border: `${primitives.borderWidths.large} solid transparent`,
                    minWidth: "unset"
                }
            }
        },
        MuiTabScrollButton: {
            styleOverrides: {
                root: {
                    color: tokens.colors["ink-on-background"],
                    height: "100%",
                    width: primitives.spacings["8"],
                    position: "absolute",
                    zIndex: 1,
                    background: `linear-gradient(270deg, ${tokens.colors["fade-gradient-transparent"]} 0%, ${tokens.colors["fade-gradient-semi-transparent"]} 33.33%, ${tokens.colors["fade-gradient-semi-opaque"]} 66.67%, ${tokens.colors["fade-gradient-opaque"]} 100%)`,
                    left: primitives.spacings["0"],
                    '& [class*="MuiSvgIcon"]': {
                        display: "none"
                    },
                    "&:hover": {
                        '& [class*="MuiSvgIcon"]': {
                            display: "inline-block"
                        }
                    },
                    // Not addding theming for breakpoints; this is only to override the MUI default.
                    "@media (max-width: 599.95px)": {
                        [`&[class*="MuiTabs-scrollButtonsDesktop"]`]: {
                            display: "flex"
                        }
                    }
                }
            }
        }
    };
};
