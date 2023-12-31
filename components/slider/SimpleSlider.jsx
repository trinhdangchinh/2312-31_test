"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

import NextPrevSwiper from "./NextPrevSwiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "./SimpleSlider.css";

// import './styles.css';

// import required modules
import // Pagination,
// Navigation,
"swiper/modules";

const SimpleSlider = ({ children, label = "Tin nổi bật" }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={
          [
            // Pagination,
            // Navigation,
          ]
        }
        className="SimpleSlider relative"
      >
        <NextPrevSwiper label={label} />
        {children}
      </Swiper>
    </>
  );
};

export default SimpleSlider;
