export const makeMenuItemStyles = ({ primitives, tokens }) => ({
    MuiMenuItem: {
        styleOverrides: {
            root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ boxShadow: `0px 0px 0px 2px ${primitives.colors.detail.transparent}, 0px 0px 0px 1px ${primitives.colors.detail.transparent}`, color: tokens.colors["text-on-background"], minHeight: "auto", paddingTop: primitives.spacings["2"], paddingBottom: primitives.spacings["2"], position: "relative", whiteSpace: "normal", marginLeft: ".125rem", marginRight: ".125rem", paddingLeft: primitives.spacings["3"] }, tokens.typography["short-copy-medium"]), { "& .DhigSelect--checkedIcon": {
                    position: "absolute",
                    right: primitives.spacings["2"]
                }, "& .DhigSelect--option": {
                    marginRight: primitives.spacings["6"],
                    width: "100%"
                } }), tokens.transitions["enter"]), { "&:hover": Object.assign({ backgroundColor: tokens.colors["hover-fill-subtle"] }, tokens.transitions["state-blur"]), "&:focus, &:focus-visible": {
                    boxShadow: tokens.effects["focus-ring-thin"],
                    backgroundColor: primitives.colors.detail.transparent
                }, "&.Mui-selected": {
                    backgroundColor: tokens.colors["activated-fill-subtle"],
                    "&.Mui-focusVisible, &:focus, &:focus-visible": {
                        backgroundColor: tokens.colors["activated-fill-subtle"],
                        "&:hover": {
                            backgroundColor: tokens.colors["activated-hover-fill-subtle"]
                        },
                        "&:active": {
                            backgroundColor: tokens.colors["activated-pressed-fill-subtle"]
                        }
                    }
                }, display: "flex", flexDirection: "row", justifyContent: "flex-start", padding: `${primitives.spacings["2"]} ${primitives.spacings["5"]}`, border: `2px solid ${primitives.colors.detail.transparent}` }), tokens.transitions["state-blur"]), { "&:hover, &:active, &:focus-visible": Object.assign({}, tokens.transitions["state-activate"]), "&:active": {
                    backgroundColor: tokens.colors["pressed-fill-subtle"],
                    boxShadow: `0px 0px 0px 2px ${primitives.colors.detail.transparent}`
                }, "&.DhigSplitButton--menuItem--focused": {
                    backgroundColor: primitives.colors.detail.transparent,
                    "&:hover": {
                        backgroundColor: tokens.colors["hover-fill-subtle"]
                    },
                    "&:active": {
                        backgroundColor: tokens.colors["pressed-fill-subtle"]
                    }
                }, '& [class*="MuiSvgIcon-root"]': {
                    paddingRight: primitives.spacings["2"]
                }, "& .DhigSplitButton--icon--checkmark": {
                    paddingLeft: primitives.spacings["3"],
                    paddingRight: primitives.spacings["0"],
                    marginLeft: "auto",
                    width: primitives.spacings["4"]
                }, "& .MuiTypography-root": {
                    color: tokens.colors["ink-on-background"]
                } })
        }
    }
});
