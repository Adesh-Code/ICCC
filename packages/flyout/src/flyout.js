import React from "react";
import PropTypes from "prop-types";
import CheckmarkIcon from "@iccc/icon/lib/build/ui-controls/checkmark";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MuiTooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import SvgIcon from "@mui/material/SvgIcon";

const Flyout = React.forwardRef(
  ({ children, menuItems, title, ...otherProps }, ref) => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    return (
      <MuiTooltip
        ref={ref}
        disableFocusListener
        disableHoverListener
        placement="bottom"
        classes={{
          popper: "DhigFlyout"
        }}
        title={
          title || (
            <Paper>
              {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
              <MenuList autoFocusItem>
                {menuItems.map(({ children, ...otherMenuItemProps }, index) => (
                  <MenuItem
                    key={index}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                    tabIndex={0}
                    {...otherMenuItemProps}
                  >
                    {children}
                    {index === selectedIndex && (
                      <SvgIcon>
                        <CheckmarkIcon />
                      </SvgIcon>
                    )}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          )
        }
        {...otherProps}
      >
        {children}
      </MuiTooltip>
    );
  }
);

Flyout.displayName = "Flyout";

Flyout.defaultProps = {
  disabled: false,
  className: "",
  menuItems: []
};

Flyout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  menuItems: PropTypes.array,
  title: PropTypes.node
};

export default Flyout;
