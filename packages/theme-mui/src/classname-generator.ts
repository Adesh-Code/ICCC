/* istanbul ignore file: MUI implementation details */

import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";

// Handles prefix for Mui v5. Experimental!
// https://mui.com/material-ui/experimental-api/classname-generator/
export const configureClassnameGenerator = ({ prefix }: { prefix: string }) => {
  ClassNameGenerator.configure((componentName: string) => {
    // Some MUI components with dynamic behaviors do not apply prefixes correctly
    // Choosing the lesser of two evils which is to exclude CSS scoping
    const excludedComponents: string[] = [
      "MuiTooltip",
      "MuiDataGrid",
      "MuiPieArc",
      "MuiPieArcLabel"
    ];
    return prefix && !excludedComponents.includes(componentName)
      ? `${prefix}-${componentName}`
      : componentName;
  });
};
