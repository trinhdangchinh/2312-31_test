"use client";

import useZustandStore from "../../app/storeZustand";

const Succeed = () => {
  const dialogShow = useZustandStore((state) => state.dialogShow);
  const setDialogShow = useZustandStore((state) => state.setDialogShow);
  const setFormAndInfoShow = useZustandStore(
    (state) => state.setFormAndInfoShow
  );
  const setsucceedShow = useZustandStore((state) => state.setsucceedShow);
  return (
    <div className={"succeed " + (dialogShow.succeedShow ? "hien" : "hidden")}>
      <div className="succeed-icon text-center my-4 ">Đăng ký Thành Công</div>
      <div className="succeed-nav flex justify-center ">
        <button
          className=" border-solid border-accent  border-2 p-2 rounded  "
          onClick={() => {
            setsucceedShow();
            setFormAndInfoShow();
          }}
        >
          Đăng ký thêm
        </button>
        <button
          onClick={() => {
            setsucceedShow();
            setFormAndInfoShow();
            setDialogShow();
          }}
          className="border-solid  py-2 px-4 rounded bg-accent ml-8 text-key"
        >
          Thoát
        </button>
      </div>
    </div>
  );
};
export default Succeed;
