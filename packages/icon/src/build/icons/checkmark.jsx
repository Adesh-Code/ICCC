import * as React from "react";
const SvgCheckmark = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/checkmark">
      <path
        id="stroke"
        d="M21 5L8.14286 18L3 12.8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgCheckmark;
