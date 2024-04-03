import * as React from "react";
const SvgIndeterminate = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="manual-width/indeterminate">
      <path
        id="stroke"
        d="M4 8L12 8.00001"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgIndeterminate;
