"use client";
import TestDriveForm from "./testDriveForm";
import Succeed from "./succeed";

// import Loading from "./loading";
import { CloseIcon } from "../../public/icon/icon";
import { useEffect } from "react";
import useZustandStore from "../../app/storeZustand";

export default function TestDriveDialog() {
  const dialogShow = useZustandStore((state) => state.dialogShow);
  const setDialogShow = useZustandStore((state) => state.setDialogShow);
  const setDialogShow1time = useZustandStore(
    (state) => state.setDialogShow1time
  );

  const scrollShow = () => {
    const scrollCondition = (percent, element) => {
      return pageYOffset >= (percent / 100) * element.scrollHeight;
    };
    if (dialogShow.timesShow < 1 && scrollCondition(80, document.body)) {
      setDialogShow1time();
    }
  };
  useEffect(() => {
    let timeOutShow = setTimeout(() => {
      if (dialogShow.timesShow == 0) {
        //comment if in dev=>> setDialogShow1time();
        setDialogShow1time();
      }
    }, 30000);
    //comment if in dev =>>window.addEventListener("scroll", scrollShow);

    window.addEventListener("scroll", scrollShow);
    return () => {
      clearTimeout(timeOutShow);
      window.removeEventListener("scroll", scrollShow);
    };
  }, [dialogShow.timesShow]);

  return (
    <div id="form_dialog" className={dialogShow.showState ? "hien" : "hidden"}>
      <div
        className="nendialog fixed bg-black bg-opacity-50 z-50  w-[100vw] h-full  translate-x-[-50%] left-[50%] top-[50%] translate-y-[-50%] "
        onClick={() => setDialogShow()}
      ></div>
      <div className="text-w w-[90vw] md:w-[70vw] lg:w-[50vw]   z-[51] text-Tnm bg-prim2 px-[3vw] py-[5vh] translate-x-[-50%] left-[50%] top-[50%] translate-y-[-50%] fixed">
        <div className="absolute right-[30px] top-[10px] ">
          <div
            className="w-[20px] h-[20px] text-w l-[-50%] translate-x-[50%] top-[50%] translate-y-[50%] "
            onClick={() => setDialogShow()}
          >
            <CloseIcon />
          </div>
        </div>
        <div className=" bg-gray2 text-key text-center  p-[16px] my-[3vh] lg:my-[2vh] align-middle  ">
          ĐĂNG KÝ NHẬN BÁO GIÁ/LÁI THỬ XE VINFAST MỚI NHẤT
        </div>
        <Succeed />
        <FormAndInfo />
        {/* <Loading /> */}
      </div>
    </div>
  );
}

const FormAndInfo = () => {
  const dialogShow = useZustandStore((state) => state.dialogShow);
  return (
    <div
      className={
        "formAndInfo grid grid-cols-2 gap-4 " +
        (dialogShow.FormAndInfoShow ? "hien" : "hidden")
      }
    >
      <div className="hidden md:block md:col-span-1 ">
        <p className="camket-heading"> Báo giá có:</p>
        <br />
        <ul className="text-m text-w mx-[2vh] list-disc">
          <li>Tư vấn Voucher.</li>
          <li className="">Báo giá lăn bánh theo khu vực.</li>
          <li className="">Khuyến mãi riêng theo các trường hợp.</li>
          <li className="">Phương án trả góp, lãi suất / tháng.</li>
        </ul>
        <p className="">
          * Ngay sau khi nhận được yêu cầu chúng tôi sẽ gửi Báo giá ưu đãi đến
          quý khách trong thời gian sớm nhất.
        </p>
      </div>
      <div className="col-span-2 md:col-span-1  ">
        <TestDriveForm formID="dialog" />
      </div>
    </div>
  );
};
