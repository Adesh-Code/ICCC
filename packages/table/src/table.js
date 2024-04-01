import React from "react";
import PropTypes from "prop-types";
import MuiTable from "@mui/material/Table";
import MuiTableContainer from "@mui/material/TableContainer";

import {
  availableSizes,
  availableVerticalAlignments,
  sizes,
  verticalAlignments
} from "./constants";

export const defaultProps = {
  bordered: false,
  loud: false,
  size: sizes.MEDIUM,
  verticalAlignment: verticalAlignments.TOP,
  zebra: false
};

/**
 * Makes a Digital HIG table component using the provided MUITable as base
 */
export const tableWithDigitalHig = (BaseMuiTableContainer, BaseMuiTable) => {
  /**
   * Table component
   *
   * @param {Object} props
   * @param {string} [props.className] - Class names to apply to the icon component
   * @param {string} [props.loud] - Whether to enable loud palette
   * @param {string} [props.verticalAlignment] - Which vertical alignment option to use
   * @param {string} [props.zebra] - Whether to enable zebra styling
   * @param {...*} [otherProps] - Additional arguments to pass to table
   */
  const Table = ({
    bordered,
    className,
    loud,
    verticalAlignment,
    zebra,
    ...otherProps
  }) => {
    // https://mui.com/material-ui/api/table/
    // List out complete MUI API props and fillout values for props that will be
    // preset in the component; all the others will be received from the parent
    const muiTableApiPresets = {
      // children,
      // classes,
      // component,
      // padding,
      // size,
      // stickyHeader,
      // sx
    };

    const classnames = (className && className.split(" ")) || [];
    classnames.push(`DhigTable--verticalAlignment--${verticalAlignment}`);
    bordered && classnames.push("DhigTable--bordered");
    loud && classnames.push("DhigTable--loud");
    zebra && classnames.push("DhigTable--zebra");

    return (
      <BaseMuiTableContainer>
        <BaseMuiTable
          {...muiTableApiPresets}
          {...otherProps}
          className={classnames.join(" ")}
        />
      </BaseMuiTableContainer>
    );
  };

  Table.propTypes = {
    /**
     * Whether to enable bordered styling
     */
    bordered: PropTypes.bool,
    /**
     * Class names to apply to the table component
     */
    className: PropTypes.string,
    /**
     * Whether to enable loud palette
     */
    loud: PropTypes.bool,
    /**
     * Which size option to use
     */
    size: PropTypes.oneOf(availableSizes),
    /**
     * Which vertical alignment option to use
     */
    verticalAlignment: PropTypes.oneOf(availableVerticalAlignments),
    /**
     * Whether to enable zebra styling
     */
    zebra: PropTypes.bool
  };

  Table.defaultProps = {
    ...defaultProps
  };

  return Table;
};

const Table = tableWithDigitalHig(MuiTableContainer, MuiTable);

export default Table;
