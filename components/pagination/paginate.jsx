import React from "react";

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination flex justify-center items-center mt-[20px] gap-[20px] ">
        <li onClick={previousPage} className="page-number">
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              "page-number Tsm px-[15px] py-[15px] rounded-[10px] cursor-pointer transition " +
              (number === currentPage ? "active bg-prim2 text-w" : "")
            }
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className="page-number">
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
