/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.hashnode.com",
        },
        {
          protocol: "https",
          hostname: "res.cloudinary.com", // Cloudinary domain moved here
        },
        {
        protocol: 'https',
        hostname: 'static01.nyt.com',   // NY Times image CDN
        pathname: '/images/**',        // optional: limit to the images folder
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      ],
  },
  async redirects() {
    return [
      {
        source: '/forHubspot',
        destination: '/for_supply_trace',
        permanent: true,
      },
      {
        source: '/forhubspot',
        destination: '/for_supply_trace',
        permanent: true,
      },
    ];
  },
  // Silence webpack cache warnings when @mui/icons-material isn't installed
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@mui/icons-material/package.json': false,
      '@mui/icons-material': false,
    };
    return config;
  },
};

module.exports = nextConfig;
