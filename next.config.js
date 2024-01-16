/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: [
      "localhost",
      "pcbtasarimi.com",
      "pcbtasarimi.net",
      "pcbtasarimi.com.tr",
    ],
  },
};

module.exports = nextConfig;
