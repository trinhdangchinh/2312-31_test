import { evJsonLD } from "./HomeJsonLd.jsx";

import getMenus from "../header/menu/queryMenus";

import * as React from "react";

import FooterSideNav from "../footer/footerSideNav";
import FooterMobNav from "../footer/footerMobNav";
import FooterAbout from "../footer/footerAbout";

import TestDriveDialog from "../../components/form/testDriveDialog";

import Header from "../header/header";
import cusInfo from "../../components/common/cusInfo";
import generatorGql from "../../components/common/generatorGql.jsx";

export const metadata = {
  title: cusInfo.title,
  description: cusInfo.description,
  generator: "Next.js",
  applicationName: cusInfo.webAppName,
  referrer: "origin-when-cross-origin",
  keywords: cusInfo.keywords,
  authors: cusInfo.authors,
  // colorScheme: "dark",
  creator: cusInfo.authors[0].name,
  publisher: cusInfo.authors[0].name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL(process.env.FRONT_END_DOMAIN),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      // "de-DE": "/de-DE",
    },
  },

  robots: {
    index: process.env.INDEX_GG,
    follow: process.env.INDEX_GG,
    nocache: process.env.INDEX_GG,
    googleBot: {
      index: process.env.INDEX_GG,
      follow: process.env.INDEX_GG,
      noimageindex: process.env.INDEX_GG,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg" },
      // new URL("/icon.svg", process.env.FRONT_END_DOMAIN),
    ],
    shortcut: ["/icon.svg"],
    apple: [
      { url: "/icon.svg" },
      { url: "/icon.svg", sizes: "180x180", type: "image/svg" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/icon.svg",
      },
    ],
  },

  manifest: "/manifest.json",

  // verification: {
  //   google: "google",
  //   yandex: "yandex",
  //   yahoo: "yahoo",
  //   other: {
  //     me: ["my-email", "my-link"],
  //   },
  // },

  alternates: {
    canonical: cusInfo.url,
    languages: {
      "vi-VN": cusInfo.url,
      // "de-DE": "https://nextjs.org/de-DE",
    },
    media: {
      "only screen and (max-width: 600px)": "/",
    },
    types: {
      "application/rss+xml": "/",
    },
  },

  appLinks: {
    ios: {
      url: "/",
      app_store_id: "app_store_id",
    },
    android: {
      package: "/",
      app_name: "app_name_android",
    },
    web: {
      url: "/",
      should_fallback: true,
    },
  },
  // archives: ["https://nextjs.org/13"],
  // assets: ["https://nextjs.org/assets"],
  // bookmarks: ["https://nextjs.org/13"],
  // category: "technology",

  ///----Facebook
  openGraph: {
    title: cusInfo.title,
    description: cusInfo.description,
    url: cusInfo.url,
    siteName: cusInfo.title,
    images: [
      // {
      //   url: cusInfo.featureImg,
      //   width: 800,
      //   height: 600,
      // },
      {
        url: cusInfo.featureImg,
        width: 1800,
        height: 1600,
        alt: cusInfo.alt,
      },
    ],
    locale: "vi_VN",
    type: "website",

    type: "article",
    publishedTime: cusInfo.publishedTime,
    authors: [cusInfo.authors[0].name],
  },

  //--- twitter
  twitter: {
    card: "app",
    title: cusInfo.title,
    description: cusInfo.description,
    // siteId: "1467726470533754880",
    creator: cusInfo.authors[0].name,
    // creatorId: "1467726470533754880",
    images: {
      url: cusInfo.featureImg,
      alt: cusInfo.alt,
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: cusInfo.url,
        ipad: cusInfo.url,
        googleplay: cusInfo.url,
      },
      url: {
        iphone: cusInfo.url,
        ipad: cusInfo.url,
      },
    },
  },
  // Apple
  appleWebApp: {
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
    // startupImage: [
    //   "/assets/startup/apple-touch-startup-image-768x1004.png",
    //   {
    //     url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
    //     media: "(device-width: 768px) and (device-height: 1024px)",
    //   },
    // ],
  },
  // itunes: {
  //   appId: "myAppStoreID",
  //   appArgument: "myAppArgument",
  // },

  /// Other brand
  // other: {
  //   custom: "meta",
  // },
};
// const evJsonLD2 = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   name: "product.name",
//   image: "product.image",
//   description: "product.description",
// };

export default async function HomeRootLayout({ children }) {
  const menus = await getMenus();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(evJsonLD) }}
      />
      <Header menus={menus} Hding="h1" />
      <div className="mt-[20px]"></div>
      <TestDriveDialog />
      <div id="body-mainLayout">{children}</div>
      <footer>
        <div className="my-[30px]"></div>
        <FooterAbout menus={menus} Hding="h2" />
        <FooterSideNav />
        <FooterMobNav />
      </footer>
    </>
  );
}
