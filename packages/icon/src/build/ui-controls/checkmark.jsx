import * as React from "react";
const SvgCheckmark = (props) => (
  <svg
    viewBox="0 0 11 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="checkmark">
      <path
        id="stroke"
        d="M1 7.40791L4.18182 11.0005L10 4.5005"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgCheckmark;
