export default async function sitemap() {
  let sitemap = [
    {
      url: "/",
      lastModified: new Date(),
      changefreq: "daily", //always, hourly, daily, weekly, monthly, yearly, never
      priority: 1.0, //0.0 to 1.0
    },
  ];

  return sitemap;
  // [
  //   {
  //     url: "/",
  //     lastModified: new Date(),
  //     changefreq: "daily", //always, hourly, daily, weekly, monthly, yearly, never
  //     priority: 1.0, //0.0 to 1.0
  //   },
  // ]
}
