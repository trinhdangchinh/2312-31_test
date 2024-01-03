/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true /** use with redirects */,
  reactStrictMode: true,
  swcMinify: true,

  images: {
    // formats: ["image/webp"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vinfastauto.com",
        port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "shop.vinfastauto.com",
        port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "vinfastauto3s.vn",
        port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "api.vinfastauto3s.vn",
        port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],

    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 1
  },
  // output: "export",
};

module.exports = nextConfig;
