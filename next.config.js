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
      ],
  },
};

module.exports = nextConfig;
