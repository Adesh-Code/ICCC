import * as React from "react";
const SvgExpandPanel = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="navigation/expand-panel">
      <path
        id="stroke"
        d="M18.4167 8L23 12.165M23 12.165L18.4167 16.33M23 12.165H12.5M8 23H1V1H8V23Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgExpandPanel;
