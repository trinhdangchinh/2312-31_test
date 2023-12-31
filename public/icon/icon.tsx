import React from "react";
const HamburIcon = () => (
  <>
    <svg
      key="1"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bars"
      className="svg-inline--fa fa-bars fa-w-14"
      role="img"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </svg>
  </>
);
const CloseIcon = () => (
  <>
    <svg
      key="2"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="times"
      className="svg-inline--fa fa-times fa-w-11"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 352 352"
    >
      <path
        id="svg_1"
        d="m207.6,161l107.72,-107.72c6.23,-6.23 6.23,-16.34 0,-22.58l-25.03,-25.03c-6.23,-6.23 -16.34,-6.23 -22.58,0l-107.71,107.73l-107.72,-107.72c-6.23,-6.23 -16.34,-6.23 -22.58,0l-25.02,25.02c-6.23,6.23 -6.23,16.34 0,22.58l107.72,107.72l-107.72,107.72c-6.23,6.23 -6.23,16.34 0,22.58l25.03,25.03c6.23,6.23 16.34,6.23 22.58,0l107.71,-107.73l107.72,107.72c6.23,6.23 16.34,6.23 22.58,0l25.03,-25.03c6.23,-6.23 6.23,-16.34 0,-22.58l-107.73,-107.71z"
        fill="currentColor"
      ></path>
    </svg>
  </>
);

export { CloseIcon, HamburIcon };
