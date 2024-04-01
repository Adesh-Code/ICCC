import React from "react";
import PropTypes from "prop-types";
import MuiTableRow from "@mui/material/TableRow";

export const defaultProps = {
  activated: false,
  enableInteractions: true,
  highlighted: false,
  selected: false
};

/**
 * Makes a Digital HIG table row component using the provided MUITableRow as base
 */
export const tableRowWithDigitalHig = (BaseMuiTableRow) => {
  /**
   * Table row component
   *
   * @param {Object} props
   * @param {string} [props.activated] - Whether to show the row in a activated state
   * @param {string} [props.className] - Class names to apply to the icon component
   * @param {bool} [props.enableInteractions] - Whether to allow row interactions
   * @param {string} [props.highlighted] - Whether to show the row in a highlighted state
   * @param {func} [props.onClick] - `onClick` function, used if interactions are allowed
   * @param {...*} [otherProps] - Additional arguments to pass to table row
   */
  const TableRow = ({
    activated,
    className,
    enableInteractions,
    highlighted,
    onClick,
    ...otherProps
  }) => {
    // https://mui.com/material-ui/api/table-row/
    // List out complete MUI API props and fillout values for props that will be
    // preset in the component; all the others will be received from the parent
    const muiTableRowApiPresets = {
      // children,
      // classes,
      // component,
      // hover,
      // selected,
      // sx
    };

    const classnames = (className && className.split(" ")) || [];
    enableInteractions && classnames.push("DhigTableRow--enableInteractions");
    activated && classnames.push("DhigTableRow--activated");
    highlighted && classnames.push("DhigTableRow--highlighted");

    const additionalProps = enableInteractions
      ? {
          tabIndex: 0,
          role: "button",
          onClick
        }
      : {};

    return (
      <BaseMuiTableRow
        {...muiTableRowApiPresets}
        {...additionalProps}
        {...otherProps}
        className={classnames.join(" ")}
      />
    );
  };

  TableRow.propTypes = {
    activated: PropTypes.bool,
    className: PropTypes.string,
    enableInteractions: PropTypes.bool,
    highlighted: PropTypes.bool,
    onClick: PropTypes.func
  };

  TableRow.defaultProps = {
    ...defaultProps
  };

  return TableRow;
};

const TableRow = tableRowWithDigitalHig(MuiTableRow);

export default TableRow;
