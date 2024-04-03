import * as React from "react";
const SvgAdd = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/add">
      <path
        id="stroke"
        d="M12 4V12M12 20V12M12 12H4M12 12H20"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </g>
  </svg>
);
export default SvgAdd;
