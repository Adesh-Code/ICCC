import * as React from "react";
const SvgTag = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="utility/tag">
      <g id="stroke">
        <path
          d="M12.1429 3H3V12.1429L13.8571 23L23 13.8571L12.1429 3Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        <path
          d="M9.00011 8.00011C9.00011 8.55239 8.55239 9.00011 8.00011 9.00011C7.44782 9.00011 7.00011 8.55239 7.00011 8.00011C7.00011 7.44782 7.44782 7.00011 8.00011 7.00011C8.55239 7.00011 9.00011 7.44782 9.00011 8.00011Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);
export default SvgTag;
