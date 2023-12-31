"use client";
import React from "react";
// import { useRef } from "react";
import { useState } from "react";

const PausePlayVideo = ({ id, posterSrc, videoSrc }) => {
  const [show, setShow] = useState(true);
  //   const videoRef = useRef();
  return (
    <>
      <video
        id={id}
        width="100%"
        // autoPlay
        onClick={(e) => {
          setShow(true);
          e.target.pause();
        }}
        muted={false}
        data-poster={posterSrc}
        // controls
        poster={posterSrc}
      >
        <source
          className="lazy-pcvideo"
          data-src={posterSrc}
          type="video/mp4"
          src={videoSrc}
        />
      </video>
      <div
        className={
          "pdp-technology_vfe34__video--play w-full h-full  text-center text-Tlg items-center py-[5px] absolute top-[50%] translate-y-[-50%] z-10  " +
          (show ? "" : "hidden")
        }
        onClick={(e) => {
          setShow(false);
          document.getElementById(id).play();
        }}
      >
        <div className=" w-[20%] max-w-[120px] h-[20%] max-h-[80px] bg-red-600 text-w shadow-indigo-500/40 rounded-2xl absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] cursor-pointer ">
          <p className=" p-[5%] block  absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] ">
            ►
          </p>
        </div>
      </div>
    </>
  );
};

export default PausePlayVideo;
