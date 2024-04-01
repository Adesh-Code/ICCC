import * as React from "react";
const SvgCollapsePanel = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="navigation/collapse-panel">
      <path
        id="stroke"
        d="M17.3333 8L12.75 12.165M12.75 12.165L17.3333 16.33M12.75 12.165H23.25M8.75 23H1.75V1H8.75V23Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgCollapsePanel;
