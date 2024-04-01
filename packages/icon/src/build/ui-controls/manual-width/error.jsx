import * as React from "react";
const SvgError = (props) => (
  <svg
    viewBox="0 0 14 16"
    fill="inherit"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="error">
      <g id="group">
        <path
          id="fill-background"
          d="M0.707106 7.29289L6.29289 1.70711C6.68342 1.31658 7.31658 1.31658 7.70711 1.70711L13.2929 7.29289C13.6834 7.68342 13.6834 8.31658 13.2929 8.70711L7.70711 14.2929C7.31658 14.6834 6.68342 14.6834 6.29289 14.2929L0.707107 8.70711C0.316583 8.31658 0.316582 7.68342 0.707106 7.29289Z"
          fill="inherit"
        />
        <path
          id="fill-foreground"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.75 4.5C7.75 4.08579 7.41421 3.75 7 3.75C6.58579 3.75 6.25 4.08579 6.25 4.5V8.5C6.25 8.91421 6.58579 9.25 7 9.25C7.41421 9.25 7.75 8.91421 7.75 8.5V4.5ZM7.75 11C7.75 10.5858 7.41421 10.25 7 10.25C6.58579 10.25 6.25 10.5858 6.25 11V11.125C6.25 11.5392 6.58579 11.875 7 11.875C7.41421 11.875 7.75 11.5392 7.75 11.125L7.75 11Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
export default SvgError;
