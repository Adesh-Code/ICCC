import * as React from "react";
const SvgIndeterminate = (props) => (
  <svg
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="indeterminate">
      <path
        id="stroke"
        d="M1 8L9 8.00001"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgIndeterminate;
