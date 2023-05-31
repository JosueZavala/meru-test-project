/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "fakestoreapi.com",
      "storerestapi.com",
      "s3-us-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
