import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.edcwebdesign.com",
        pathname: "/logo.png",
      },
    ],
  },
};

export default nextConfig;
