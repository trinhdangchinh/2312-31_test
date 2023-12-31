import Link from "next/link";
import NavMob from "./navMob";
import NavPc from "./navpc";
import HeaderBtn from "./HeaderBtn";
import ImgFull from "/components/ImgOptimization/ImgFull";
// import proIcon from "./promotion.svg";
import getMenus from "/app/header/menu/queryMenus";

export default async function Header({ Hding = "div" }) {
  const menus = await getMenus();
  return (
    <>
      {/* <Link
        href="/vinfast-khuyen-mai-danh-tang-nha-giao-viet-nam-2023"
        className="promotion  w-full h-[54px] flex justify-center  bg-[#06462e] text-center font-[600] text-w text-m"
        aria-label="TRI ÂN THẦY, CÔ GIÁO NHÂN NGÀY 20/11"
      >
        <div className="w-full max-w-[1000px] flex justify-between ">
          <Image
            src={proIcon}
            alt="promotion icon"
            className="h-[90%] self-center"
          ></Image>

          <div className="self-center w-full">
            TRI ÂN THẦY, CÔ GIÁO NHÂN NGÀY 20/11 💐
            <div className="text-sm ">(Nhấn để xem chi tiết)</div>
          </div>
        </div>
      </Link> */}

      <header className="header__nav h-[72px] w-full bg-w sticky top-0 z-50 shadow-md shadow-gray3 flex  items-center justify-between">
        <Hding className="header__logo h-full pl-[5vw] min-w-[180px] ">
          <Link
            href="/"
            className="block h-full relative"
            aria-label="Về trang chủ"
          >
            <ImgFull
              className="max-h-[50px] relative top-[50%] translate-y-[-50%] "
              src="/logo-vinfast-500x150.png"
              alt="logo VinFast"

              // fill
              // sizes="3vw"
            />
          </Link>
        </Hding>
        <div className="flex  min-w-[40%] mx-[20px] ">
          <NavPc menus={menus} />
        </div>

        <div className="nav_mob lg:hidden w-[80px] h-[100%] absolute right-0 top-0 ">
          <NavMob menus={menus} />
        </div>
        <div className="header_laithu-btn hidden lg:block pr-[4vw] h-[70%] min-w-[250px] ">
          <HeaderBtn />
        </div>
        <div className=" "></div>
      </header>
    </>
  );
}
