/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Dangerously allow production builds to complete even if there are type errors
    ignoreBuildErrors: false,
  },
  eslint: {
    // Don't run ESLint during production build
    ignoreDuringBuilds: false,
  },
}

export default nextConfig