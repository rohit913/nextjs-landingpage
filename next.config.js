/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use output: export to enable static HTML export
  output: "export",
};

module.exports = nextConfig;
