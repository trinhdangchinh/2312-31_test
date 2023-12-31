"use client";
import useZustandStore from "/app/storeZustand";
const ModalBg = ({ children }) => {
  const modalBg = useZustandStore((state) => state.modalBg);
  const setModalBg = useZustandStore((state) => state.setModalBg);
  return (
    <>
      <div
        className={
          modalBg
            ? "hien modal fixed z-50 h-[100dvh] w-[100dvw] bg-[rgba(29,29,31,0.95)] top-0 left-0 "
            : "hidden"
        }
        onClick={() => setModalBg()}
      >
        <div
          className="content w-full max-w-[800px] absolute center middle z-[51]  "
          onClick={(e) =>
            // Do something
            e.stopPropagation()
          }
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalBg;
