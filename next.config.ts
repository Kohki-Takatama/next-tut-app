import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['example.com'], // このドメインの画像を許可
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image', // 画像のカスタムパス
    loader: 'default', // 'imgix', 'cloudinary', 'akamai'なども使用できます
  },
};

export default nextConfig;
