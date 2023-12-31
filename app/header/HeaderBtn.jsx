"use client";
import useZustandStore from "/app/storeZustand";

const HeaderBtn = () => {
  const setDialogShow = useZustandStore((state) => state.setDialogShow);
  return (
    <div
      className=" btn text-w bg-prim px-[15px] py-[10px] h-full "
      onClick={() => setDialogShow()}
    >
      ĐĂNG KÝ LÁI THỬ
    </div>
  );
};

export default HeaderBtn;
