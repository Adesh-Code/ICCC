import * as React from "react";
const SvgLink = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="actions/link">
      <path
        id="stroke"
        d="M12.2633 5.69841L15.1325 2.8292C16.2381 1.7236 18.0383 1.7236 19.1439 2.8292L21.1708 4.85613C22.2764 5.96173 22.2764 7.76187 21.1708 8.86747L15.6712 14.3671C14.5656 15.4727 12.7654 15.4727 11.6598 14.3671L10 12.6957M11.591 18.4189L8.86747 21.1424C7.76187 22.248 5.96173 22.248 4.85613 21.1424L2.8292 19.1155C1.7236 18.0099 1.7236 16.2098 2.8292 15.1042L8.32884 9.60453C9.43444 8.49893 11.2346 8.49893 12.3402 9.60453L14 11.2644"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </g>
  </svg>
);
export default SvgLink;
