/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
    reactStrictMode: true,
    images: {
      domains: ['encrypted-tbn0.gstatic.com', 'cdn.sanity.io','s2.coinmarketcap.com', 's3.coinmarketcap.com', 'cdn.sanity.io', 'encrypted-tbn0.gstatic.com'],
    },
};

export default nextConfig;
