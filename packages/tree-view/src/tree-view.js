import React from "react";
import PropTypes from "prop-types";
import MuiTreeView from "@mui/lab/TreeView";

import {
  availableSizes,
  availableVariants,
  sizes,
  variants
} from "./constants";

const treeViewWithDigitalHig = (BaseMuiTreeView) => {
  const TreeView = React.forwardRef(
    ({ size, variant, className, ...otherProps }, ref) => {
      const muiTreeViewPresets = {
        // children,
        // className,
        // defaultCollapseIcon,
        // defaultEndIcon,
        // defaultExpanded,
        // defaultExpandIcon,
        // defaultParentIcon,
        // defaultSelected,
        // disabledItemsFocusable,
        // disabledSelection,
        // expanded,
        // id,
        // multiSelect,
        // onNodeFocus,
        // onNodeSelect,
        // onNodeToggle,
        // selected,
        // sx
      };

      const classnames = (className && className.split(" ")) || [];

      classnames.push(`DhigTreeView--variant--${variant}`);
      classnames.push(`DhigTreeView--size--${size}`);

      return (
        <BaseMuiTreeView
          className={classnames.join(" ")}
          {...muiTreeViewPresets}
          {...otherProps}
          ref={ref}
        />
      );
    }
  );

  TreeView.displayName = "TreeView";

  TreeView.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(availableSizes),
    variant: PropTypes.oneOf(availableVariants)
  };

  TreeView.defaultProps = {
    size: sizes.DEFAULT,
    variant: variants.MINIMAL
  };

  return TreeView;
};

const TreeView = treeViewWithDigitalHig(MuiTreeView);

export default TreeView;
