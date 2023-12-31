// import TestDriveForm from "../../components/form/testDriveForm";
import Menu from "../header/menu/menu";
import getMenus from "/app/header/menu/queryMenus";
export default async function FooterAbout({ Hding = "p" }) {
  const menus = await getMenus();
  const aboutArray = [
    "VỀ VINFAST ",
    "VỀ VINGROUP ",
    "TIN TỨC ƯU ĐÃI ",
    "SHOWROOM & ĐẠI LÝ ",
    "ĐIỀU KHOẢN",
    "CHÍNH SÁCH",
  ];
  // const Hding = tag;
  const btnAray = [
    {
      text: "FB",
      link: "/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook"
          className="svg-inline--fa fa-facebook fa-w-16"
          role="img"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
          />
        </svg>
      ),
    },
    {
      text: `YT`,
      link: "https://zalo.me/0933579889",
      svg: (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="youtube"
          className="svg-inline--fa fa-youtube fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          ></path>
        </svg>
      ),
    },
    {
      text: "093 357 9889",
      link: "tel:093 357 9889",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      ),
    },
    {
      text: `mail`,
      link: "https://zalo.me/0933579889",
      svg: (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="envelope"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="svg-inline--fa fa-envelope fa-w-16 fa-3x"
        >
          <path
            fill="currentColor"
            d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
            className=""
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-prim text-w pb-[80px] ">
      <section className="footer__about ">
        <div className="grid grid-cols-6 pt-[40px] ">
          {/* <div className="footer__about_row row no-gutters"></div> */}

          <div className="footer__about-info px-[30px] mt-[40px] col-span-6 md:col-span-3 lg:col-span-2 ">
            <ul className="footer__about-info-form  ">
              {/* <TestDriveForm formID="footer" /> */}
              {aboutArray.map((item, i) => (
                <li
                  key={"item-about-" + i}
                  className="text-m text-w my-[10px] "
                >
                  <a href="/" aria-label={item}>
                    {" "}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__about-info px-[30px] mt-[40px] col-span-6 md:col-span-3 lg:col-span-2 ">
            <Hding className="text-TmdPlus text-cw box-m1">Liên hệ</Hding>

            <ul className="flex justify-center ">
              {btnAray.map((btn) => (
                <li key={btn.text} className="w-[30px] h-[30px]  m-[10px]">
                  <div className="otherChanel w-[30px] h-[30px] ">
                    <a href={btn.link} aria-label="Đi đến">
                      {btn.svg}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <p className="ext-Tsm box-m1">
              Trụ sở chính: Khu kinh tế Đình Vũ – Cát Hải, Đảo Cát Hải, Thị trấn
              Cát Hải, Huyện Cát Hải, Thành phố Hải Phòng, Việt Nam <br />
              Văn Phòng Điều Hành: Tòa nhà Symphony, KĐT Vinhomes Riverside,
              Long Biên, Hà Nội <br />
              Điện thoại:{" "}
              <a
                className="typo-l-1"
                href="tel:0933579889"
                aria-label="Gọi điện 093 357 98 89"
              >
                093 357 98 89
              </a>
              <br />
              Email:
              <a
                className="typo-l-1"
                href="mailto:vinfastauto3s.vn@gmail.com"
                aria-label="vinfastauto3s.vn@gmail.com"
              >
                vinfastauto3s.vn@gmail.com
              </a>
            </p>
          </div>

          <div className="footer__about-info px-[30px] py-[20px] pt-[20px] col-span-6 hidden lg:block lg:col-span-2 ">
            <div className="text-Tnm text-cw">
              <nav className="nav__mb-list box-p1">
                {/* <Accordion /> */}
                <Menu
                  bgClass="text-Tmd menus grid grid-cols-12 gap-4 items-center warp "
                  itemsClass="menu-items  col-span-12 border-none cursor-pointer  hover:bg-w hover:text-prim rounded-md  "
                  menus={menus}
                />
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
