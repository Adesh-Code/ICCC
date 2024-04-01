import React from "react";
import type { ThemeData } from "../../types";
export declare const makeTreeViewStyles: ({ primitives, tokens }: ThemeData) => {
    MuiTreeView: {
        defaultProps: {
            defaultCollapseIcon: React.JSX.Element;
            defaultExpandIcon: React.JSX.Element;
        };
        styleOverrides: {
            root: {
                position: string;
                "&.DhigTreeView--variant--flat": {
                    borderBottom: string;
                    borderTop: string;
                    '& [class*="MuiTreeItem-root"]:first-of-type > div.DhigTreeItem': {
                        hr: {
                            display: string;
                        };
                    };
                    "& hr": {
                        position: string;
                        left: string;
                        width: string;
                        zIndex: number;
                    };
                };
                "&.DhigTreeView--size--dense": {
                    '& [class*="MuiTreeItem-content"]': {
                        padding: string;
                    };
                    '& [class*="MuiTreeItem-label"]': {
                        fontFamily: string;
                        fontSize: string;
                        fontWeight: number;
                        letterSpacing: string;
                        lineHeight: string;
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=tree-view.d.ts.map