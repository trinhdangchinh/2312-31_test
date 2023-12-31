import FooterSideNav from "/app/footer/footerSideNav";
import FooterMobNav from "/app/footer/footerMobNav";
import FooterAbout from "/app/footer/footerAbout";

import TestDriveDialog from "/components/form/testDriveDialog";
import parse from "html-react-parser";

import Header from "/app/header/header";
import postQuery from "./postQuery";

// export async function generateMetadata({ params }) {
//   async function getMetaData(slug) {
//     let FEUrl = `${process.env.FRONT_END_DOMAIN}/${slug}`;

//     let post = await postQuery(slug);
//     let seo = post.seo || "";
//     // seo = post?.seo || "";
//     // console.log(seo);

//     let metadata = {
//       title: seo?.title,
//       description: seo?.description,
//       generator: "Next.js",
//       applicationName: "Next.js",

//       keywords: seo?.focusKeywords,
//       authors: post?.author.node.name || "",
//       // authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
//       // colorScheme: "dark",
//       creator: post?.author.node.name || "",

//       // referrer error trỏ về publisher
//       publisher: post?.author.node.name + "ref" || "",
//       formatDetection: {
//         email: false,
//         address: false,
//         telephone: false,
//       },

//       metadataBase: new URL(process.env.FRONT_END_DOMAIN),

//       alternates: {
//         canonical: `${process.env.FRONT_END_DOMAIN}/${slug}`,
//         languages: {
//           "vi-VN": "/",
//           // "en-US": "/en-US",
//         },
//       },

//       robots: {
//         index: false,
//         follow: true,
//         nocache: true,
//         googleBot: {
//           index: true,
//           follow: false,
//           noimageindex: true,
//           "max-video-preview": -1,
//           "max-image-preview": "large",
//           "max-snippet": -1,
//         },
//       },
//       icons: {
//         icon: [
//           { url: "/icon.svg" },
//           // new URL("/icon.svg", process.env.FRONT_END_DOMAIN),
//         ],
//         shortcut: ["/icon.svg"],
//         apple: [
//           { url: "/icon.svg" },
//           { url: "/icon.svg", sizes: "180x180", type: "image/svg" },
//         ],
//         other: [
//           {
//             rel: "apple-touch-icon-precomposed",
//             url: "/icon.svg",
//           },
//         ],
//       },

//       manifest: "/manifest.json",

//       // verification: {
//       //   google: "google",
//       //   yandex: "yandex",
//       //   yahoo: "yahoo",
//       //   other: {
//       //     me: ["my-email", "my-link"],
//       //   },
//       // },

//       alternates: {
//         canonical: FEUrl,
//         languages: {
//           "vi-VN": FEUrl,
//           // "de-DE": "https://nextjs.org/de-DE",
//         },
//         media: {
//           "only screen and (max-width: 600px)": FEUrl,
//         },
//         types: {
//           "application/rss+xml": FEUrl,
//         },
//       },

//       appLinks: {
//         ios: {
//           url: FEUrl,
//           app_store_id: "app_store_id",
//         },
//         android: {
//           package: FEUrl,
//           app_name: "app_name_android",
//         },
//         web: {
//           url: FEUrl,
//           should_fallback: true,
//         },
//       },
//       // archives: ["https://nextjs.org/13"],
//       // assets: ["https://nextjs.org/assets"],
//       // bookmarks: ["https://nextjs.org/13"],
//       category: post?.categories.nodes.name || "",

//       ///----Facebook
//       openGraph: seo
//         ? {
//             title: seo.title,
//             description: seo.description,
//             url: slug,
//             siteName: seo.openGraph?.siteName || "/",
//             images: [
//               {
//                 url: post?.featuredImage?.node?.sourceUrl,
//                 width: 800,
//                 height: 600,
//                 alt: post?.featuredImage?.node?.altText,
//               },
//               // {
//               //   url: "https://nextjs.org/og-alt.png",
//               //   width: 1800,
//               //   height: 1600,
//               //   alt: "My custom alt",
//               // },
//             ],
//             locale: seo.openGraph?.locale,

//             description: seo.description,
//             type: seo.openGraph.type,
//             publishedTime: seo.openGraph?.updatedTime,
//             authors: post?.author.node.name,
//           }
//         : "",

//       //--- twitter
//       twitter: {
//         card: "app",
//         title: seo.title,
//         description: seo.description,
//         siteId: post?.id,
//         creator: post?.author.node.name,
//         // creatorId: "1467726470533754880",
//         images: {
//           url: post?.featuredImage?.node?.sourceUrl,
//           alt: post?.featuredImage?.node?.altText,
//         },
//         app: {
//           name: "twitter_app",
//           id: {
//             iphone: FEUrl,
//             ipad: FEUrl,
//             googleplay: FEUrl,
//           },
//           url: {
//             iphone: FEUrl,
//             ipad: FEUrl,
//           },
//         },
//       },
//       // Apple
//       appleWebApp: {
//         title: "Apple Web App",
//         statusBarStyle: "black-translucent",
//         // startupImage: [
//         //   "/assets/startup/apple-touch-startup-image-768x1004.png",
//         //   {
//         //     url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
//         //     media: "(device-width: 768px) and (device-height: 1024px)",
//         //   },
//         // ],
//       },
//       // itunes: {
//       //   appId: "myAppStoreID",
//       //   appArgument: "myAppArgument",
//       // },

//       /// Other brand
//       other: {
//         custom: "meta",
//       },
//     };

//     return metadata;
//   }
//   let metadata = await getMetaData(params.postSlug);
//   return metadata;
// }

export default async function HomeRootLayout({ children, params }) {
  // async function getJsonLd(slug) {
  //   let post = await postQuery(slug);

  //   let jsonLd = parse(
  //     (post?.seo?.jsonLd.raw || "").replaceAll(
  //       process.env.HEAD_LESS_CMS,
  //       process.env.FRONT_END_DOMAIN
  //     )
  //   );

  //   return jsonLd;
  // }

  return (
    <>
      {/* {getJsonLd(params.postSlug)} */}
      <Header />
      <div className="mt-[20px]"></div>
      <div id="body-mainLayout">{children}</div>
      <footer>
        <div className="my-[30px]"></div>
        <TestDriveDialog />
        <FooterAbout />
        <FooterSideNav />
        <FooterMobNav />
      </footer>
    </>
  );
}
