/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // export時にnext/imageのエラー回避
    unoptimized: true,
    // 外部URL画像を許可
    domains: ["s3.us-west-2.amazonaws.com", "i.imgur.com"],
  },
};
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
module.exports = withNextra(nextConfig);
