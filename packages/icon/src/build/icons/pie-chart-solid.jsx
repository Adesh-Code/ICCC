import * as React from "react";
const SvgPieChartSolid = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="miscellaneous/pie-chart-solid">
      <path
        id="fill"
        d="M23 12C23 5.92487 18.0751 1 12 1V12L19.7782 19.7782C21.7688 17.7876 23 15.0376 23 12Z"
        fill="currentColor"
      />
      <path
        id="stroke"
        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </g>
  </svg>
);
export default SvgPieChartSolid;
