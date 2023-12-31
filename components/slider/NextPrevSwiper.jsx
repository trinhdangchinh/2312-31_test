import { useSwiper } from "swiper/react";

export default function NextPrevSwiper({ label = "" }) {
  const swiper = useSwiper();
  return (
    <>
      <div className="swiperNav w-full h-[14%] max-h-[25px] bg-gradient-to-b from-key flex justify-between absolute top-0 z-10">
        <p className="text-w ml-[2%] ">{label}</p>
        <div className="btnNav w-[16%] min-w-[96px] flex">
          <button
            className="btnSub  bg-w w-[50%] align-middle min-h-[48px] min-w-[48px] "
            onClick={() => swiper.slidePrev()}
          >
            {`<`}
          </button>
          <button
            className="btnSub bg-w w-[50%] align-middle min-w-[48px] min-h-[48px]"
            onClick={() => swiper.slideNext()}
          >
            {`>`}
          </button>
        </div>
      </div>
    </>
  );
}
