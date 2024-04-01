import * as React from "react";
const SvgOne = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/one">
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
        d="M12.949 14.9143V8H11.8204L10 9L10 10.24L11.4684 9.55429V14.9143H10V16H11.4684H14.4417V14.9143H12.949Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
export default SvgOne;
