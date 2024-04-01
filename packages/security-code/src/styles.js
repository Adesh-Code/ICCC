const styles = ({ tokens, primitives }) => ({
  "&.DhigSecurityCode": {
    width: "56px",
    height: "72px",
    borderTop: `${primitives.borderWidths.medium} solid ${primitives.colors.tint["slate-450"]}`,
    borderBottom: "none"
  },
  '&.DhigSecurityCode [class*="MuiInputBase-input"][class*="MuiInputBase-inputAdornedEnd"]':
    {
      marginRight: "0"
    },
  "&.DhigSecurityCode[class*='MuiInput-root']:hover:before": {
    height: "2px",
    backgroundColor: tokens.colors["fill-engage"],
    boxShadow: "none",
    borderBottom: `${primitives.borderWidths.medium} solid ${primitives.colors.primary.black}`
  },
  "&.DhigSecurityCode:hover": {
    boxShadow: "none"
  },
  '&.DhigSecurityCode[class*="MuiInputBase-root"]': {
    boxShadow: `0px 1px 0px 0px ${primitives.colors.primary.white}`
  },
  '&.DhigSecurityCode[class*="MuiInputBase-root"]:before': {
    borderBottom: `1px solid ${primitives.colors.primary.black}`
  },
  "&.DhigSecurityCode input:focus": {
    boxShadow: `0px 2px 0px 0px ${tokens.colors["ink-focus"]} inset, 0px 0px 0px 2px ${tokens.colors["ink-focus"]} inset`
  },
  '&.DhigSecurityCode[class*="MuiInputBase-root"]:not(.Mui-disabled)::before': {
    boxShadow: "none"
  },
  '&.DhigSecurityCode [class*="MuiInputBase-input"]:before': {
    width: "56px"
  },
  "&.DhigSecurityCode input": {
    flexGrow: "1"
  },
  '&.DhigSecurityCode [class*="MuiInputBase-input"]': {
    padding: "0",
    width: "56px",
    height: "72px",
    fontSize: `${primitives.fontSizeFallbacks["6"]}`,
    fontWeight: primitives.fontWeights.default
  },
  '&.DhigSecurityCode--dense [class*="MuiInputBase-input"]': {
    padding: "0",
    width: "32px",
    height: "40px",
    fontSize: `${primitives.fontSizeFallbacks["3"]}`,
    fontWeight: primitives.fontWeights.default
  },
  "&.DhigSecurityCode--dense": {
    width: "32px",
    height: "40px"
  },
  '&.DhigSecurityCode--error[class*="MuiInputBase-root"]:before': {
    borderBottom: `1px solid ${primitives.colors.accent.clay}`
  },
  "&.DhigSecurityCode--error, &.DhigSecurityCode:first-of-type.DhigSecurityCode--error, &.DhigSecurityCode:last-child.DhigSecurityCode--error, &.DhigSecurityCode--error:before":
    {
      borderColor: primitives.colors.accent.clay
    },
  '&.DhigSecurityCode--error[class*="MuiInputBase-root"]:after': {
    boxShadow: `0px 1px 0px 0px ${primitives.colors.accent.clay}`
  },
  "&.DhigSecurityCode:first-of-type": {
    borderLeft: `${primitives.borderWidths.medium} solid ${primitives.colors.tint["slate-450"]}`
  },
  "&.DhigSecurityCode:last-child": {
    borderRight: `${primitives.borderWidths.medium} solid ${primitives.colors.tint["slate-450"]}`
  },
  "&.DhigSecurityCode:last-child [class*='MuiDivider-root'], &.DhigSecurityCode:focus-within [class*='MuiDivider-root']":
    {
      display: "none"
    }
});

export default styles;
