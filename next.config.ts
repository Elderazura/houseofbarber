import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProd && { output: "export", trailingSlash: false }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
