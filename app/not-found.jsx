"use client";
import Link from "next/link";
import { Router, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { headers } from "next/headers";
import ImgFull from "/components/ImgOptimization/ImgFull";

export async function generateMetadata(props) {
  return {
    title: `entity  not found`,
    description: `There is no entity with id: `,
  };
}
export default function NotFound() {
  const router = useRouter();
  const [counter, setCounter] = useState(15);
  useEffect(() => {
    counter > 0 &&
      setTimeout(() => {
        if (counter == 1) {
          router.push("/");
        } else {
          setCounter(counter - 1);
        }
      }, 1000);
  }, [counter]);

  return (
    <div>
      {/* <h2>Not Found: {data.name}</h2> */}

      <div className="page__404 grid grid-cols-12 gap-4 px-[10vh] pt-[100px] bg-gray1 min-h-[100vh]  ">
        <div className="col-frame col-span-12 md:col-span-6 ">
          <div className="frame__404 text-center ">
            <div className="aspect-[4/2]">
              <ImgFull
                className="card1__img max-h-[40vh]   relative translate-x-[-50%] left-[50%] "
                src="/Vinfast_logo_Vuong.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-5  ">
          <div className="notice item-center justify-center ">
            <p className=" text-Tlg ">404</p>
            <p className="text-Tmd my-[2vh] ">
              Nội dung đang được cập nhật mới.
            </p>
            <p className="text-Tnm topbot-mmg">
              Quay lại{" "}
              <Link href="/" className="text-linkb " aria-label="Về trang chủ">
                Trang chủ
              </Link>
            </p>
            <div className="countdown  relative translate-x-[-50%] left-[50%] bg-gray2 p-[50px] w-[200px] h-[10vh] rounded mt-8  ">
              <p className="text-Tlg  left-[50]  translate-y-[-50%] text-center ">
                {counter}
              </p>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}
