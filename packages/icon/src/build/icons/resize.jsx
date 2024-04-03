import * as React from "react";
const SvgResize = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/resize">
      <path
        id="stroke"
        d="M18 14L14 18M18 7L7 18"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </g>
  </svg>
);
export default SvgResize;
