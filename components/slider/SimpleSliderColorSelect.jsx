"use client";
// Import Swiper React components
import { Swiper } from "swiper/react";
import ImgFull from "/components/ImgOptimization/ImgFull";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./SimpleSlider.css";

// import './styles.css';



import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import "./Sec1Topmain.css";
// import required modules
import { SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const SimpleSliderColorSelect = ({   arrayColor, alt="anh gioi thieu" }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
          <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper "
                slidesPerView={1}
              >
                {arrayColor.map((item, i) => (
                  <SwiperSlide key={"thumb-" + i} className="text-center my-[20px]" >
                   
                      <ImgFull
                        src={item.src}
                        alt={"Màu " + item.alt?item.alt:alt}
                        priority
                      />
                    
                    <p className="tit text-l my-[10px]">{"VF 7 Màu " + item.alt?item.alt:alt}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            

            <Swiper
              loop={true}
              spaceBetween={5}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 w-[80%]"
              slidesPerView={4}

             
            >
              {arrayColor.map((item, i) => (
                <SwiperSlide key={"slide-" + i} className="items-center ">
                
                    <picture>
                      <source srcSet={item.srcColorIcon} type="image/webp" />
                      <img
                        title=""
                        alt={ item.alt?item.alt:alt}
                        width="80"
                        height = "80"
                        className="w-[60px] h-[60px] "
                        style={{ opacity: 1 }}
                        src={item.srcSet}
                      />
                    </picture>
                  
                </SwiperSlide>
              ))}
            </Swiper>

    </>
  );
};

export default SimpleSliderColorSelect;
