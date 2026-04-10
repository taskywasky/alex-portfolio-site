/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      { pathname: '/**' }, // ← allows ALL images in public folder
    ],
  },
}

export default nextConfig;
