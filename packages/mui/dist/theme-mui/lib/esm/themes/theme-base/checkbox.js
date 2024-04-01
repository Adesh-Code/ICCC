import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
/* TODO: [Typescript] remove ignores once icon is migrated */
// @ts-ignore
import CheckmarkIcon from "@iccc/icon/lib/build/ui-controls/checkmark";
// @ts-ignore
import IndeterminateIcon from "@iccc/icon/lib/build/ui-controls/indeterminate";
export const makeCheckboxStyles = ({ primitives, tokens }) => ({
    MuiCheckbox: {
        defaultProps: {
            checkedIcon: (React.createElement(SvgIcon, null,
                React.createElement(CheckmarkIcon, null))),
            icon: React.createElement(SvgIcon, null),
            indeterminateIcon: (React.createElement(SvgIcon, null,
                React.createElement(IndeterminateIcon, null)))
        },
        styleOverrides: {
            root: {
                padding: `${primitives.spacings["0"]}px`,
                margin: `${primitives.spacings["2"]} 0`,
                outlineOffset: 0,
                '& [class*="MuiSvgIcon-fontSizeSmall"]': {
                    height: primitives.spacings["4"],
                    width: primitives.spacings["4"]
                },
                "&.Mui-disabled": {
                    opacity: tokens.opacities.disabled,
                    color: tokens.colors["ink-on-background"]
                },
                "&:hover": {
                    backgroundColor: "inherit"
                },
                "&:hover > svg": Object.assign({ outline: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-hover"]}` }, tokens.transitions["state-activate"]),
                "&:focus, &.Mui-focusVisible, &:focus-visible > svg": {
                    outline: `${primitives.borderWidths.large} solid ${tokens.colors["ink-focus"]}`,
                    outlineOffset: primitives.borderWidths.medium,
                    borderRadius: primitives.borderRadii.small,
                    transition: `outline-color ${primitives.transitions.duration["2"]} ${primitives.transitions.easing.energetic}`
                },
                "&:active > svg": Object.assign({ outline: `${primitives.borderWidths.large} solid ${tokens.colors["fill-success"]}` }, tokens.transitions["state-activate"]),
                '&.Mui-checked:not([class*="MuiCheckbox-indeterminate"])': {
                    "& > svg": {
                        color: tokens.colors["ink-on-fill-primary"],
                        background: tokens.colors["fill-primary"]
                    },
                    "& span": {
                        background: tokens.colors["fill-primary"]
                    }
                },
                "& > svg": Object.assign({ height: primitives.spacings["5"], width: primitives.spacings["5"], padding: "2px", border: `${primitives.borderWidths.medium} solid ${tokens.colors["ink-on-background"]}`, borderRadius: primitives.borderRadii.small, boxSizing: "border-box" }, tokens.transitions["state-blur"]),
                [`& + [class*="MuiFormControlLabel-label"]`]: {
                    color: tokens.colors["ink-on-background"],
                    paddingLeft: primitives.spacings["2"],
                    fontSize: primitives.fontSizes["3"],
                    lineHeight: primitives.lineHeights.compact
                }
            },
            colorSecondary: {
                color: `${tokens.colors["ink-on-background"]}`
            }
        }
    }
});
