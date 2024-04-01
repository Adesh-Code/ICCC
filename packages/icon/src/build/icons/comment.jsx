import * as React from "react";
const SvgComment = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/comment">
      <path
        id="stroke"
        d="M18.5 8.5H5.5M12 12.5H5.5M2 4V17H5.5V23L11.5 17H22V4H2Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgComment;
