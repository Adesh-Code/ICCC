import * as React from "react";
const SvgGraph = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="miscellaneous/graph">
      <path
        id="stroke"
        d="M1 11L8 6L15 9L23 1M1.00002 17V21M4.34785 14.5V21M7.69567 11V21M11.5218 13V21M15.3478 14.5V21M19.1739 11V21M23 7V21"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgGraph;
