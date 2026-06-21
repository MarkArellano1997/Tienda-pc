/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zgapulbnpxinmmckmkfq.supabase.co",
      },
    ],
  },
};

export default nextConfig;
