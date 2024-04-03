import * as React from "react";
const SvgBarChart = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="miscellaneous/bar-chart">
      <path
        id="stroke"
        d="M1 1V23H23M4 12H8V20H4V12ZM11 3H15V20H11V3ZM18 8H22V20H18V8Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgBarChart;
