import React from "react";
import PropTypes from "prop-types";
import { availableOrders, orders } from "./constants";
import Checkbox from "@mui/material/Checkbox";
import DownIcon from "@iccc/icon/lib/build/icons/down";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiTableHead from "@mui/material/TableHead";
import SvgIcon from "@mui/material/SvgIcon";
import TableCell from "@mui/material/TableCell";
import TableRow from "@iccc/table-row";
import TableSortLabel from "@mui/material/TableSortLabel";
import UpIcon from "@iccc/icon/lib/build/icons/up";

export const tableHeadWithDigitalHig = (BaseTableHead) => {
  const TableHead = React.forwardRef(
    (
      {
        CheckboxProps,
        enableSelect,
        enableSort,
        headCells,
        onRequestSort,
        onSelectAllClick,
        order,
        orderBy,
        rowCount,
        selectedRowCount,
        ...otherProps
      },
      ref
    ) => {
      const muiTableHeadApiPresets = {
        // children,
        // classes,
        // component,
        // sx,
      };

      const createSortHandler =
        (property) => /* istanbul ignore next */ (event) => {
          /* istanbul ignore next */ onRequestSort(event, property);
        };

      return (
        <BaseTableHead {...muiTableHeadApiPresets} {...otherProps}>
          <TableRow enableInteractions={false}>
            {enableSelect && (
              <TableCell
                className={`DhigTableHead--cell${
                  enableSelect
                    ? "--enableSelect"
                    : /* istanbul ignore next */ ""
                }`}
              >
                <FormControlLabel
                  className="DhigTableHead--checkbox"
                  control={
                    <Checkbox
                      indeterminate={
                        selectedRowCount > 0 && selectedRowCount < rowCount
                      }
                      checked={rowCount > 0 && selectedRowCount === rowCount}
                      onChange={onSelectAllClick}
                      {...CheckboxProps}
                    />
                  }
                  label=""
                />
              </TableCell>
            )}
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.align || "left"}
                className={
                  enableSort && !headCell.disableInteractions
                    ? "DhigTableHead--cell--sort"
                    : "DhigTableHead--cell"
                }
                onClick={
                  enableSort && !headCell.disableInteractions
                    ? createSortHandler(headCell.id)
                    : undefined
                }
              >
                {enableSort ? (
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={createSortHandler(headCell.id)}
                    IconComponent={() => (
                      <SvgIcon>
                        {
                          /* istanbul ignore next */ order === orders.ASC ? (
                            <UpIcon />
                          ) : (
                            <DownIcon />
                          )
                        }
                      </SvgIcon>
                    )}
                  >
                    {headCell.label}
                  </TableSortLabel>
                ) : (
                  headCell.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </BaseTableHead>
      );
    }
  );

  TableHead.displayName = "TableHead";

  TableHead.defaultProps = {
    enableSelect: false,
    enableSort: false
  };

  TableHead.propTypes = {
    /** Class names to apply to the table head component. */
    className: PropTypes.string,
    /** Props to forward to the checkbox. */
    CheckboxProps: PropTypes.object,
    /**
     * If true, a checkbox will be displayed, allowing all rows
     * in the table component to be selected at once.
     * The `selectedRowCount`, `onSelectAllClick`, and `rowCount` props
     * must also be provided, with the `CheckboxProps` optional.
     */
    enableSelect: PropTypes.bool,
    /**
     * If true, the table head will have sort capabilities.
     * The `onRequestSort`, `order`, and `orderBy` props must also be provided.
     */
    enableSort: PropTypes.bool,
    /** The cells to be displayed. */
    headCells: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        align: PropTypes.string,
        label: PropTypes.node.isRequired
      })
    ).isRequired,
    /** Callback function for sorting the table component. */
    onRequestSort: PropTypes.func,
    /** Function for when checkbox is clicked. */
    onSelectAllClick: PropTypes.func,
    /** Table sort order. */
    order: PropTypes.oneOf(availableOrders),
    /** ID of row to order by. */
    orderBy: PropTypes.string,
    /** Number of rows in the table component. */
    rowCount: PropTypes.number,
    /** Number of selected rows in table component. */
    selectedRowCount: PropTypes.number
  };

  return TableHead;
};

const TableHead = tableHeadWithDigitalHig(MuiTableHead);

export default TableHead;
