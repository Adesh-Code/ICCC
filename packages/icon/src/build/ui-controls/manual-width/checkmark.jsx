import * as React from "react";
const SvgCheckmark = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="manual-width/checkmark">
      <path
        id="stroke"
        d="M4.75 7.65741L7.43182 10.25L11.75 5.25"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgCheckmark;
