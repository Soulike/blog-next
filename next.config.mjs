/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    async rewrites() {
        return process.env.NODE_ENV === 'development'
            ? [
                  {
                      source: '/server/:path*',
                      destination: 'https://soulike.tech/server/:path*',
                  },
              ]
            : [];
    },
};

export default nextConfig;
