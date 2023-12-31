"use client";

import Menu from "./menu/menu";
import "./navpc.css";
export default function NavPc({ menus }) {
  return (
    <nav className="nav__pc text-Tmd  hidden lg:block  text-key w-full ">
      <Menu
        bgClass="bgclass flex flex-nowrap items-center bg-w w-full overflow-x-auto scrollBar "
        itemsClass="menu-items mx-[10px] bg-w  border-b-[1px] text-m "
        menus={menus}
      />
    </nav>
  );
}
