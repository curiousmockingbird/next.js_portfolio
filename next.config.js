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
};

module.exports = nextConfig;
