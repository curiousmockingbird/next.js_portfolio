/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {hostname: 'cdn.hashnode.com'},
        ],
        domains: ["res.cloudinary.com"], // Add Cloudinary domain
  },
}

module.exports = nextConfig
