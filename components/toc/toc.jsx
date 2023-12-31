"use client";

import { useHeadsObserver } from "./tocHooks";

import { useEffect, useState } from "react";
import Link from "next/link";

const getClassName = (level) => {
  switch (level) {
    case 2:
      return "head2 ml-[10px]";
    case 3:
      return "head3 ml-[20px] ";
    case 4:
      return "head4 ml-[30px] ";
    default:
      return null;
  }
};

function TOC() {
  const [headings, setHeadings] = useState([]);
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2"));
    elements.forEach((elem, i, arr) => {
      if (elem.id == "") {
        elem.id = `addID-${i}`;
      }
      arr[i] = {
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      };
    });

    // elements.map((elem) => ({
    //     id: elem.id,
    //     text: elem.innerText,
    //     level: Number(elem.nodeName.charAt(1))
    //   }))
    setHeadings(elements);
  }, []);
  // console.log(headings[3].text)
  return (
    <nav className=" p-[16px] self-start   max-h-[calc(100vh-70px)] overflow-auto  border-solid border-2 rounded-md bg-gray-200 ">
      <div className="co">
        <p>Mục lục</p>
      </div>
      <ul className="mt-[15px] ">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={"mt-[15px] line-clamp-1 " + getClassName(heading.level)}
          >
            <Link
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: "smooth",
                });
              }}
              style={{
                fontWeight: activeId === heading.id ? "bold" : "normal",
              }}
              aria-label={heading.text}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TOC;
