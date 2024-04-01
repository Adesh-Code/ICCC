export const makePopoverStyles = ({ primitives, tokens }) => ({
    MuiPopover: {
        styleOverrides: {
            root: {
                '& [class*="MuiPaper-root"]': {
                    borderRadius: `${primitives.borderRadii.none} ${primitives.borderRadii.none} ${primitives.borderRadii.medium} ${primitives.borderRadii.medium}`,
                    marginTop: primitives.spacings["1"],
                    boxShadow: tokens.effects["elevation-0-popover"],
                    scrollbarWidth: "thin",
                    backgroundColor: tokens.colors["fill-elevation-0"],
                    '& [class*="MuiList-root"]': {
                        "& [class*='MuiListSubheader-root']": {
                            background: tokens.gradients["fill-category-title"],
                            marginLeft: "1px",
                            marginRight: "1px",
                            "&:not(:first-of-type)": {
                                borderTop: `${primitives.borderWidths.medium} solid ${tokens.colors["row-divider"]}`
                            }
                        }
                    }
                }
            }
        }
    }
});
