import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";

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
      
      sx={{
        cursor: "default"
      }}
    >
      {status}
    </Alert>
  </Tooltip>
);

const ComponentTitle = ({ name, status }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px"
      }}
    >
      <h1>
        {name}
      </h1>
      {status === "Stable" && <ReadyToBeUsed status="Stable" />}
      {status === "In Progress" && <ReadyToBeUsed status="In Progress" />}
    </Box>
);

ReadyToBeUsed.propTypes = {
  status: PropTypes.string.isRequired
};

ComponentTitle.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string
};

export default ComponentTitle;
