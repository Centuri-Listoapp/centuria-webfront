import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://centuria-files.s3.amazonaws.com/**')],
  },
};

export default nextConfig;
