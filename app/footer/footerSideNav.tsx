export default function FooterSideNav() {
  const btnAray = [
    {
      text: "Chat FB",
      link: "https://m.me/jon.chen.564",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-messenger"
          className="svg-inline--fa fa-facebook-messenger fa-w-16"
          role="img"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
          />
        </svg>
      ),
    },
    {
      text: "Lái thử",
      link: "/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="car-side"
          className="svg-inline--fa fa-car-side fa-w-20"
          role="img"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"
          />
        </svg>
      ),
    },
    {
      text: `Tư vấn  Zalo`,
      link: "https://zalo.me/0933579889",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // className=""
          style={{ fill: "currentColor" }}
          viewBox="0 0 1024 1024"
          // {vertical-align: "middle"};
          // {overflow: "hidden"}
        >
          <path d="M630.352013 835.800687c-56.625672 0-113.251344-9.980305-163.216315-29.942963-23.312962-6.653537-39.969317-16.635889-59.94937-16.635889-19.98824 0-39.969317 13.31219-56.624648 23.292496-33.311687 16.635889-69.949118 23.286356-109.918435 19.962657-23.316032-3.326768-26.646893-16.638959-9.992585-29.942963 6.661723-6.658653 19.983123-13.31219 23.316032-19.963681 13.323447-6.658653 19.98517-19.965727 26.64587-29.946033 16.656355-26.621311 23.313985-46.582945 3.332908-69.873394C227.32082 619.536178 194.012204 539.684526 194.012204 449.848475c0-153.050792 106.585527-286.139949 256.472256-349.35469l-159.88136 0c-96.590895 0-179.862437 83.178421-179.862437 182.996824l0 449.172069c0 99.81431 83.271542 182.994778 179.862437 182.994778l443.004603 0c93.28357 0 174.113503-77.579913 179.551352-172.793438C836.590168 799.295262 736.793254 835.800687 630.352013 835.800687zM790.228257 546.338063c43.301202-3.328815 69.947072-26.616194 73.281003-76.525907-6.661723-49.907667-29.979802-73.199139-73.281003-79.852676-46.63104 6.652514-69.945025 29.945009-73.27691 79.852676C720.284255 519.721869 743.597217 543.009248 790.228257 546.338063zM790.228257 429.885817c19.984147 0 29.979802 13.308097 29.979802 39.926338s-9.995655 39.925315-29.979802 39.925315c-19.98517 0-29.975708-13.307074-33.307593-39.925315C760.252549 443.193915 770.243087 429.885817 790.228257 429.885817zM567.063595 546.338063c16.656355 0 29.978778-6.653537 39.97034-16.634866 3.332908 9.981329 9.994632 16.634866 19.984147 16.634866 13.323447 0 19.98517-9.982352 19.98517-26.616194l0-99.81738c0-19.962657-6.662747-26.618241-19.98517-26.618241-9.990538 0-16.651238 6.655584-19.984147 16.636912-6.661723-13.310144-19.98517-19.962657-39.97034-19.962657-39.969317 6.652514-63.282279 33.271778-66.615187 79.852676C503.78234 519.721869 527.095301 543.009248 567.063595 546.338063zM573.726342 429.885817c19.983123 0 29.978778 13.308097 33.307593 39.926338-3.328815 26.618241-13.32447 39.925315-33.307593 39.925315-19.98517 0-29.979802-13.307074-33.30964-39.925315C543.74654 443.193915 553.741171 429.885817 573.726342 429.885817zM683.643754 546.338063c13.322423 0 19.98517-6.653537 19.98517-23.291472L703.628924 350.034165c0-13.310144-6.66377-23.291472-19.98517-23.291472-13.32447 0-19.984147 9.981329-19.984147 23.291472l0 173.012426C663.659607 539.684526 670.320307 546.338063 683.643754 546.338063zM340.571141 363.342262c3.328815 9.981329 6.65763 16.635889 19.980054 16.635889l73.281003 0-89.933265 129.759319c-3.328815 3.326768-3.328815 9.984399-3.328815 16.636912 0 9.980305 6.65763 16.633842 23.312962 19.962657l109.918435 0c13.322423-3.328815 19.983123-9.982352 19.983123-19.962657 0-13.310144-6.6607-16.636912-19.983123-19.962657L393.863904 506.411725l86.600357-123.106806c6.661723-6.655584 6.661723-13.308097 6.661723-19.962657 0-13.308097-6.661723-19.963681-23.317055-19.963681L360.551194 343.378581C347.228771 343.378581 343.899956 350.034165 340.571141 363.342262z"></path>
        </svg>
      ),

      // (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     viewBox="0 0 24 24"
      //     fill="#FFFFFF"
      //   >
      //     <path d="M0 0h24v24H0z" fill="none" />
      //     <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
      //   </svg>
      // ),
    },
  ];

  return (
    <div>
      <div className="footer__sidenav invisible lg:visible p-[16px] bg-primDark text-w text-center  fixed top-[25vh] right-[0] w-[100px] shadow-[0_0_10px_grey] rounded-l-[20px] z-[50] ">
        <ul className="my-[-16px] ">
          {btnAray.map((btn, i) => (
            <li key={i} className="my-[16px] ">
              <a href={btn.link} aria-label={btn.text}>
                <div
                  key={i}
                  className="box-v w-[30px] h-[30px] left-[50%] translate-x-[-50%] relative"
                >
                  {btn.svg}
                </div>

                <div className="footer__sidenav-text boxtext-v">
                  <span key={i} className="typo-p-1 text-cw">
                    {btn.text}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}