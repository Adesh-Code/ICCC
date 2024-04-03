import * as React from "react";
const SvgChat = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/chat">
      <path
        id="stroke"
        d="M18 8.75H22.5V17.2H18.725V21.1L14.825 17.2H10.5V15.25M1.5 3.75V12.2H5.275V16.1L9.175 12.2H15V3.75H1.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgChat;
