/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/**": ["./content/**/*"]
    }
  }
};

export default nextConfig;
