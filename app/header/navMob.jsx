"use client";
import React, { useState } from "react";
import { CloseIcon, HamburIcon } from "../../public/icon/icon";
import Menu from "./menu/menu";

export default function NavMob({ menus }) {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div
        className="w-[30px] h-[30px] text-key l-[-50%] translate-x-[50%] top-[50%] translate-y-[50%]  "
        onClick={() => setDisplay(!display)}
      >
        {display ? <CloseIcon /> : <HamburIcon />}
      </div>
      <div
        id="nav__mb"
        className={
          "nav__mb nav__mb-showhide bg-w fixed top-[70px] left-0 w-[100%] z-50 px-[7vw] py-[4vh] h-[100vh-80px] border-solid border-2 " +
          (display ? "" : "hidden")
        }
      >
        {/* <Accordion2 /> */}
        <Menu menus={menus}></Menu>
      </div>
    </>
  );
}
