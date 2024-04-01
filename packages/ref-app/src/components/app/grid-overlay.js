import React, { useState } from "react";
import Button from "@mui/material/Button";
import { themeLight } from "@iccc/mui/dist/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./grid-overlay.css";

const light = createTheme(themeLight);

export const GridOverlay = () => {
  const [gridOverlayEnabled, setGridOverlayEnabled] = useState(false);

  return (
    <ThemeProvider theme={light}>
      <Button
        onClick={() => setGridOverlayEnabled(!gridOverlayEnabled)}
        variant="outlined"
      >
        Turn grid overlay {gridOverlayEnabled ? "off" : "on"}
      </Button>
      {gridOverlayEnabled && (
        <div className="grid-overlay-wrapper">
          <div className="grid-overlay"></div>
        </div>
      )}
    </ThemeProvider>
  );
};
