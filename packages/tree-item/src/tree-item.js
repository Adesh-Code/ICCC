import React from "react";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import MuiTreeItem, { useTreeItem } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";

/*
 * Modified replica of MUI's internal component, TreeItemContent
 * https://github.com/mui/material-ui/blob/835e53eac76266ce37145a82365765190afc8709/packages/mui-lab/src/TreeItem/TreeItemContent.js
 * https://mui.com/material-ui/react-tree-view/#contentcomponent-prop
 */
const FlatContentComponent = React.forwardRef(function FlatContentComponent(
  props,
  ref
) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event) => {
    preventSelection(event);
  };

  const handleExpansionClick = (event) => {
    handleExpansion(event);
  };

  const handleSelectionClick = (event) => {
    handleSelection(event);
  };

  const classnames = (className && className.split(" ")) || [];

  classnames.push(classes.root);
  classnames.push("DhigTreeView--variant--flat");
  expanded && classnames.push(classes.expanded);
  selected && classnames.push(classes.selected);
  focused && classnames.push(classes.focused);
  disabled && classnames.push(classes.disabled);

  return (
    <div className="DhigTreeItem">
      <Divider light />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={classnames.join(" ")}
        onMouseDown={handleMouseDown}
        onClick={handleExpansionClick}
        ref={ref}
      >
        <div className={classes.iconContainer}>{icon}</div>
        <Typography
          onClick={handleSelectionClick}
          component="div"
          className={classes.label}
        >
          {label}
        </Typography>
      </div>
    </div>
  );
});

FlatContentComponent.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  /**
   * className applied to the root element.
   */
  className: PropTypes.string,
  /**
   * The icon to display next to the tree node's label. Either a parent or end icon.
   */
  displayIcon: PropTypes.node,
  /**
   * The icon to display next to the tree node's label. Either an expansion or collapse icon.
   */
  expansionIcon: PropTypes.node,
  /**
   * The icon to display next to the tree node's label.
   */
  icon: PropTypes.node,
  /**
   * The tree node label.
   */
  label: PropTypes.node,
  /**
   * The id of the node.
   */
  nodeId: PropTypes.string.isRequired
};

export const FlatTreeItem = (props) => (
  <MuiTreeItem ContentComponent={FlatContentComponent} {...props} />
);

export { MuiTreeItem as MinimalTreeItem };
