/** @type {import('next').NextConfig} */
import path from "path";

const dirname = path.resolve("./src");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portifoliostaviasz.s3.us-east-005.backblazeb2.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "portifolioStaviasz.s3.us-east-005.backblazeb2.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
