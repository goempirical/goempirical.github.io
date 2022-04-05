/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // This is a mock loader required as a workaround for the lack of a static export for Next.js. https://github.com/vercel/next.js/issues/21079
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
