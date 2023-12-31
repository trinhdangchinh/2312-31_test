export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/",
    },
    sitemap: process.env.FRONT_END_DOMAIN + "/sitemap.xml",
  };
}
