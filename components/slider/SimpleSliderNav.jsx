"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "./SimpleSlider.css";

// import './styles.css';

// import required modules
import { Pagination, Navigation,} from "swiper/modules";

const SimpleSliderNav = ({ children }) => {
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
            Pagination,
            Navigation,
          ]
        }
        className="SimpleSliderNav relative"
      >
      
        {children}
      </Swiper>
    </>
  );
};

export default SimpleSliderNav;
