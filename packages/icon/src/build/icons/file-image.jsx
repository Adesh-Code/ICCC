import * as React from "react";
const SvgFileImage = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="miscellaneous/file-image">
      <circle id="fill" cx={16} cy={8} r={3} fill="currentColor" />
      <path
        id="stroke"
        d="M2 13.6667L2 2L22 2V22H2L2 13.6667ZM2 13.6667C9.75219 13.6667 17.0628 14.8809 21.9517 21.93"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default SvgFileImage;
