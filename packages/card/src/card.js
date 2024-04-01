import React from "react";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import MuiCard from "@mui/material/Card";

import { appearances } from "./constants";

const cardWithDigitalHig = (BaseMuiCard) => {
  const Card = React.forwardRef(
    (
      { children, className, framed, quiet, twoColumns, ...otherProps },
      ref
    ) => {
      // MUI Card API: https://mui.com/material-ui/api/card/
      const muiCardApiPresets = {
        // children
        // classes
        // raised
        // sx
      };

      /**
       * Determines additional classnames related to "quiet" version, "framed"
       * version, and 2 col handling.
       */
      className = `${className}${quiet ? " MuiCard--quiet" : ""}`;
      className = `${className}${framed ? " MuiCard--framed" : ""}`;
      className = `${className}${twoColumns ? " MuiCard--twoColumns" : ""}`;

      // Adding an appearance classname to bring button to parity with accordion
      // component API, but still dependant on changes resulting from
      // https://jira.autodesk.com/browse/EXPM-1100
      let appearance = appearances.DEFAULT;
      if (quiet && framed) {
        appearance = appearances.QUIET_AND_FRAMED;
      }
      if (quiet && !framed) {
        appearance = appearances.QUIET;
      }
      if (!quiet && framed) {
        appearance = appearances.FRAMED;
      }
      className = `${className} DhigCard--appearance--${appearance}`;

      return (
        <BaseMuiCard
          {...muiCardApiPresets}
          {...otherProps}
          className={className}
          ref={ref}
        >
          {children}
        </BaseMuiCard>
      );
    }
  );

  Card.displayName = "Card";

  Card.defaultProps = {
    className: "",
    framed: false,
    quiet: false,
    twoColumns: false
  };

  Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    framed: PropTypes.bool,
    quiet: PropTypes.bool,
    twoColumns: PropTypes.bool
  };

  return Card;
};

export const CardDivider = (props) => (
  <div className="DhigCard--divider">
    <Divider light {...props} />
  </div>
);

const Card = cardWithDigitalHig(MuiCard);

export default Card;
