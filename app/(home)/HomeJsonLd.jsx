export const evJsonLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Person", "Organization"],
      "@id": "/#person",
      name: "Trinh Henry",
      logo: {
        "@type": "ImageObject",
        "@id": "/#logo",
        url:
          process.env.HEAD_LESS_CMS + "/wp-content/uploads/2023/04/favicon.png",
        contentUrl:
          process.env.HEAD_LESS_CMS + "/wp-content/uploads/2023/04/favicon.png",
        caption: "Vinfast Mi\u1ec1n B\u1eafc",
        inLanguage: "vi",
        width: "200",
        height: "177",
      },
      image: {
        "@type": "ImageObject",
        "@id": process.env.HEAD_LESS_CMS + "/#logo",
        url:
          process.env.HEAD_LESS_CMS + "/wp-content/uploads/2023/04/favicon.png",
        contentUrl:
          process.env.HEAD_LESS_CMS + "/wp-content/uploads/2023/04/favicon.png",
        caption: "Vinfast Mi\u1ec1n B\u1eafc",
        inLanguage: "vi",
        width: "200",
        height: "177",
      },
    },
    {
      "@type": "WebSite",
      "@id": "/#website",
      url: "/",
      name: "Vinfast Mi\u1ec1n B\u1eafc",
      alternateName: "Vinfast H\u00e0 N\u1ed9i",
      publisher: {
        "@id": "/#person",
      },
      inLanguage: "vi",
    },
    {
      "@type": "ImageObject",
      "@id":
        process.env.HEAD_LESS_CMS +
        "/wp-content/uploads/2021/02/VF32_sideview01.jpg",
      url: "https://vinfastauto3s.vn/wp-content/uploads/2021/02/VF32_sideview01.jpg",
      width: "1920",
      height: "1080",
      caption: "Vinfast E-V Car",
      inLanguage: "vi",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: "1",
          item: {
            "@id": "/",
            name: "Trang ch\u1ee7",
          },
        },
        {
          "@type": "ListItem",
          position: "2",
          item: {
            "@id": "/",
            name: "Trang Ch\u1ee7 VINFAST",
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "/#webpage",
      url: "/",
      name: "Trang Ch\u1ee7 VINFAST - Vinfast Mi\u1ec1n B\u1eafc",
      datePublished: "2020-09-24T00:55:07+07:00",
      dateModified: "2023-04-04T11:08:51+07:00",
      isPartOf: {
        "@id": "/#website",
      },
      primaryImageOfPage: {
        "@id":
          process.env.HEAD_LESS_CMS +
          "/wp-content/uploads/2021/02/VF32_sideview01.jpg",
      },
      inLanguage: "vi",
      breadcrumb: {
        "@id": "/#breadcrumb",
      },
    },
    {
      "@type": "Person",
      "@id": "/author/trinhdangchinh/",
      name: "Trinh Henry",
      url: "/author/trinhdangchinh/",
      image: {
        "@type": "ImageObject",
        "@id":
          "https://secure.gravatar.com/avatar/12fd77560040074dcbd820ce2d062c58?s=96&amp;d=mm&amp;r=g",
        url: "https://secure.gravatar.com/avatar/12fd77560040074dcbd820ce2d062c58?s=96&amp;d=mm&amp;r=g",
        caption: "Trinh Henry",
        inLanguage: "vi",
      },
    },
    {
      image: {
        "@id":
          process.env.HEAD_LESS_CMS +
          "/wp-content/uploads/2021/02/VF32_sideview01.jpg",
      },
      headline: "Trang Ch\u1ee7 VINFAST - Vinfast Mi\u1ec1n B\u1eafc",
      description:
        "VINFAST l\u00e0 c\u00f4ng ty \u00f4 t\u00f4 th\u01b0\u01a1ng hi\u1ec7u Vi\u1ec7t nam \u0111\u1ea7u ti\u00ean. Vi\u1ec7t Nam - Phong c\u00e1ch - An to\u00e0n - S\u00e1ng t\u1ea1o - Ti\u00ean phong, kh\u00f4ng ch\u1ec9 \u0111\u01a1n thu\u1ea7n l\u00e0 nh\u1eefng t\u1eeb vi\u1ebft t\u1eaft t\u1ea1o n\u00ean VinFast m\u00e0 c\u00f2n \u0111\u1ea1i di\u1ec7n cho gi\u00e1 tr\u1ecb v\u00e0 kim ch\u1ec9 nam cho m\u1ecdi quy\u1ebft \u0111\u1ecbnh h\u00e0ng ng\u00e0y c\u1ee7a ch\u00fang t\u00f4i \u0111\u1ec3 mang l\u1ea1i nh\u1eefng l\u1ee3i \u00edch t\u1ed1t nh\u1ea5t cho kh\u00e1ch h\u00e0ng",
      "@type": "Article",
      author: {
        "@id": "/author/trinhdangchinh/",
        name: "Trinh Henry",
      },
      datePublished: "2020-09-24T00:55:07+07:00",
      dateModified: "2023-04-04T11:08:51+07:00",
      name: "Trang Ch\u1ee7 VINFAST - Vinfast Mi\u1ec1n B\u1eafc",
      "@id": "/#schema-7962",
      isPartOf: {
        "@id": "/trang-chu-new/#webpage",
      },
      publisher: {
        "@id": "/#person",
      },
      inLanguage: "vi",
      mainEntityOfPage: {
        "@id": "/#webpage",
      },
    },
    {
      "@id": "/#website",
      "@type": "WebSite",
      url: "/",
      name: "VINFAST",
      //   potentialAction: {
      //     "@type": "SearchAction",
      //     target: "/?s={search_term_string}",
      //     "query-input": "required name=search_term_string",
      //   },
    },
    {
      "@id": "/#organization",
      "@type": "Organization",
      name: "VINFAST Mi\u1ec1n B\u1eafc",
      url: "",
      logo: process.env.HEAD_LESS_CMS + "/wp-content/uploads/2020/07/logo.png",
      subOrganization: {
        "@type": "Organization",
        name: "Apple Support",
        url: "/",
        "@id": "/#organization",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+84-93-357-9889",
          contactType: "technical support",
          areaServed: "VN",
          availableLanguage: ["EN", "VN"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+84-93-357-9889",
          contactType: "customer support",
          areaServed: "VN",
          availableLanguage: ["EN", "VN"],
        },
      ],
      sameAs: [
        "https://maps.google.com/maps?cid=13083563311993480538&amp;_ga=2.141604470.579466839.1615797651-673403449.1614172829",
      ],
    },
    {
      "@id": "/#webpage",
      "@type": "WebPage",
      url: "/",
      name: "VINFAST Mi\u1ec1n B\u1eafc",
    },
  ],
};
