const homeBanner = {
  slides: [
    {
      href: "/",
      imgSrc: "/themes/porto/img/homepage-v2/banner/banner-vf-e34.webp",
      alt: "Chính sách hỗ trợ lãi suất cho khách hàng khi mua ô tô điện VinFast",
      title:
        "CHÍNH SÁCH HỖ TRỢ LÃI SUẤT CHO KHÁCH HÀNG KHI MUA Ô TÔ ĐIỆN VINFAST",
    },
    {
      href: "/",
      imgSrc: "/themes/porto/img/homepage-v2/banner/banner-vf-9.webp",
      alt: "VinFast VF 9 có phạm vi lái được EPA chứng nhận đạt 330 dặm",
      title: "VINFAST VF 9 CÓ PHẠM VI LÁI ĐƯỢC EPA CHỨNG NHẬN ĐẠT 330 DẶM",
    },
    {
      href: "/",
      imgSrc: "/themes/porto/img/homepage-v2/banner/banner-vf-8.webp",
      alt: "VinFast cập nhật phần mềm FRS 8.7.9.2 cho ô tô điện VF 8",
      title: "VINFAST CẬP NHẬT PHẦN MỀM FRS 8.7.9.2 CHO Ô TÔ ĐIỆN VF 8",
    },
    {
      href: "/",
      imgSrc: "/themes/porto/img/homepage-v2/banner/banner-vf-6.webp",
      alt: "VinFast chính thức ra mắt mẫu suv đIện VF 6 dành cho gia đình Việt",
      title:
        "VINFAST CHÍNH THỨC RA MẮT MẪU SUV ĐIỆN VF 6 DÀNH CHO GIA ĐÌNH VIỆT",
    },
    {
      href: "/",
      imgSrc: "/themes/porto/img/homepage-v2/banner/banner-vf-e34.webp",
      alt: "Chính sách hỗ trợ lãi suất cho khách hàng khi mua ô tô điện VinFast",
      title:
        "CHÍNH SÁCH HỖ TRỢ LÃI SUẤT CHO KHÁCH HÀNG KHI MUA Ô TÔ ĐIỆN VINFAST",
    },
    {
      href: "/",
      imgSrc: "/themes/porto/img/homepage-v2/banner/banner-vf-9.webp",
      alt: "VinFast VF 9 có phạm vi lái được EPA chứng nhận đạt 330 dặm",
      title: "VINFAST VF 9 CÓ PHẠM VI LÁI ĐƯỢC EPA CHỨNG NHẬN ĐẠT 330 DẶM",
    },
  ],
};
const NewspostsQuery = `{
  posts(first: 5) {
    nodes {
      id
      date
      excerpt
      uri
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}`;
const homeCardItems = [
  {
    text: "ĐỊA CHỈ ĐẠI LÝ",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="location-arrow"
        className="svg-inline--fa fa-location-arrow fa-w-16"
        role="img"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"
        />
      </svg>
    ),
    link: "./",
  },
  {
    text: "TẢI BÁO GIÁ XE",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
      </svg>
    ),
    link: "./",
  },
  {
    text: "HỖ TRỢ TRẢ GÓP",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="piggy-bank"
        className="svg-inline--fa fa-piggy-bank fa-w-18"
        role="img"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"
        />
      </svg>
    ),
    link: "./",
  },
];
export { homeBanner, NewspostsQuery, homeCardItems };
