import * as React from "react";
const SvgSeven = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/seven">
      <circle
        id="stroke"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        id="fill"
        d="M14.4057 8H9V9.14286H13.0229L9.99429 16H11.4686L14.4057 9.17714V8Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
export default SvgSeven;
