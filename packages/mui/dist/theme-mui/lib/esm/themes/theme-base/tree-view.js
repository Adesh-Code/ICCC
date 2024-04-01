import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
/* TODO: [Typescript] remove ignores once icon is migrated */
// @ts-ignore
import CaretDownIcon from "@iccc/icon/lib/build/ui-controls/caret-down-small";
// @ts-ignore
import CaretRight from "@iccc/icon/lib/build/ui-controls/caret-right-small";
export const makeTreeViewStyles = ({ primitives, tokens }) => ({
    MuiTreeView: {
        defaultProps: {
            defaultCollapseIcon: (React.createElement(SvgIcon, null,
                React.createElement(CaretDownIcon, null))),
            defaultExpandIcon: (React.createElement(SvgIcon, null,
                React.createElement(CaretRight, null)))
        },
        styleOverrides: {
            root: {
                position: "relative",
                "&.DhigTreeView--variant--flat": {
                    borderBottom: `${primitives.borderWidths.medium} solid ${tokens.colors["detail-1-opaque"]}`,
                    borderTop: `${primitives.borderWidths.medium} solid ${tokens.colors["detail-1-opaque"]}`,
                    '& [class*="MuiTreeItem-root"]:first-of-type > div.DhigTreeItem': {
                        hr: {
                            display: "none"
                        }
                    },
                    "& hr": {
                        position: "absolute",
                        left: primitives.spacings["0"],
                        width: "100%",
                        zIndex: 0
                    }
                },
                "&.DhigTreeView--size--dense": {
                    '& [class*="MuiTreeItem-content"]': {
                        padding: primitives.spacings["3"]
                    },
                    '& [class*="MuiTreeItem-label"]': Object.assign({}, tokens.typography["short-copy-small"])
                }
            }
        }
    }
});
