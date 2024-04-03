import * as React from "react";
const SvgChatOnline = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="miscellaneous/chat-online">
      <circle id="fill" cx={19.5} cy={17.5} r={4.5} fill="currentColor" />
      <path
        id="stroke"
        d="M18.5 8.5H5.5M12 12.5H5.5M13 17H11.5L5.5 23V17H2V4H22V11"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgChatOnline;
