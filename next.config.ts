import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
