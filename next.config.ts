import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Folder URLs (about/index.html) work on Apache/cPanel without rewrite hacks
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
