import * as React from "react";
const SvgCircleHalf = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/circle-half">
      <path
        id="fill"
        d="M22 12C22 17.5228 17.5228 22 12 22V2C17.5228 2 22 6.47715 22 12Z"
        fill="currentColor"
      />
      <path
        id="stroke"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgCircleHalf;
