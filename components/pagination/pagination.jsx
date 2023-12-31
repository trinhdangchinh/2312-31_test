"use client";

import React, { useState, useEffect } from "react";

import Card from "../card";
import Paginate from "./paginate";

import parse from "html-react-parser";

const Pagination = ({ blogPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  //     blogPosts=(res.posts.nodes);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(blogPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {blogPosts ? (
        <>
          {currentPosts.map((currentPost, index) => (
            <div
              key={index}
              className="product_card col-span-12 md:col-span-4 mt-[5vh]  shadow-[0_0_10px_grey] h-fit"
            >
              <Card
                className=""
                src={currentPost.featuredImage.node.mediaItemUrl}
                title={currentPost.title}
                excerpt={parse(currentPost.excerpt)}
                date={currentPost.date}
                href={currentPost.uri}
              />
            </div>
          ))}
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
      <div className="item-center col-span-12">
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={blogPosts.length}
          currentPage={currentPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
};

export default Pagination;
