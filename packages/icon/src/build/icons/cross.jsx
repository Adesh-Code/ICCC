import * as React from "react";
const SvgCross = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/cross">
      <path
        id="stroke"
        d="M19 5L12 12M12 12L5 19M12 12L5 5M12 12L19 19"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgCross;
