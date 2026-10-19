/** @type {import('next').NextConfig} */

const nextConfig = {
  // Static HTML export to out/ (replaces the removed `next export` command)
  output: "export",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
