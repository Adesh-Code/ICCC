import React from "react";
import PropTypes from "prop-types";
import Example from "./Example";
import Grid from "@mui/material/Grid";

/**
 * Renders a design token key and value
 */
export default function Role(props) {
  // Please note: Not using theme-mui
  return (
    <Grid container sx={{ borderBottom: "1px solid #ddd", my: 2, py: 2 }}>
      <Grid item xs={6}>
        {props.name}
      </Grid>
      <Grid item xs={6}>
        <Example {...props} />
      </Grid>
    </Grid>
  );
}

Role.propTypes = {
  name: PropTypes.string
};
