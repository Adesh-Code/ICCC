import * as React from "react";
const SvgList = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="navigation/list">
      <path
        id="stroke"
        d="M8 5H21M3 5H3.5M8 12H21M3 12H3.5M8 19H21M3 19H3.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgList;
