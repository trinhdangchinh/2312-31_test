"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./dropDown";

const MenuItems = ({ items, depthLevel, itemsClass }) => {
  const [dropdown, setDropdown] = useState(false);
  let itemRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        itemRef.current &&
        !itemRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className={` ${itemsClass}`}
      ref={itemRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.children.length != 0 ? (
        <>
          <button
            className=" text-left px-[0.7rem] py-1 w-full pl-2 lg:w-max "
            type="button"
            aria-haspopup="menu"
            onClick={() => {
              setDropdown((prev) => !prev);
            }}
          >
            {items.label}
            {depthLevel > 0 ? (
              <span className="ml-[3px] ">&raquo;</span>
            ) : (
              <span className="ml-[3px] arrow" />
            )}
          </button>
          <Dropdown
            submenus={items.children}
            dropdown={dropdown}
            depthLevel={depthLevel}
            itemsClass={itemsClass}
          />
        </>
      ) : (
        <a
          className="block text-left py-1 w-max "
          href={items.url}
          aria-label={items.label}
        >
          {items.label}
        </a>
      )}
    </li>
  );
};

export default MenuItems;
