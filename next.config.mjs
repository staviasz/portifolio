/** @type {import('next').NextConfig} */
import path from "path";

const dirname = path.resolve("./src");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(dirname, "styles")],
  },
  images: {
    domains: ["portifoliostaviasz.s3.us-east-005.backblazeb2.com"],
  },
};

export default nextConfig;
