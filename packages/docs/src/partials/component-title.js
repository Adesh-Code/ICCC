import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { AlertIcon } from "@iccc/alert";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@iccc/typography";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

export const ReadyToBeUsed = ({ status }) => (
  <Tooltip
    arrow
    title={
      status === "Stable"
        ? "Ready to be used"
        : "Under development, API subject to change"
    }
  >
    <Alert
      variant="outlined"
      severity={status === "Stable" ? "success" : "warning"}
      icon={
        status === "Stable" ? (
          <AlertIcon severity="success" alt="stable icon" />
        ) : (
          <AlertIcon severity="warning" alt="in-progress icon" />
        )
      }
      sx={{
        cursor: "default"
      }}
    >
      {status}
    </Alert>
  </Tooltip>
);

const ComponentTitle = ({ name, status }) => (
  <ThemeProvider theme={light}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px"
      }}
    >
      <Typography component="h1" variant="headline-large">
        {name}
      </Typography>
      {status === "Stable" && <ReadyToBeUsed status="Stable" />}
      {status === "In Progress" && <ReadyToBeUsed status="In Progress" />}
    </Box>
  </ThemeProvider>
);

ReadyToBeUsed.propTypes = {
  status: PropTypes.string.isRequired
};

ComponentTitle.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string
};

export default ComponentTitle;
