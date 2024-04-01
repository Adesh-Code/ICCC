import * as React from "react";
const SvgRedo = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/redo">
      <path
        id="stroke"
        d="M16.03 17L22 11M22 11L16.03 5M22 11C22 11 17.3786 11 11 11C7 11 3 12 2 16.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgRedo;
