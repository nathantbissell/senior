import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? "/senior" : undefined,
  assetPrefix: isProd ? "/senior/" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/senior" : "",
  },
};

export default nextConfig;
