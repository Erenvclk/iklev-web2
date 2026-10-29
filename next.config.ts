import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Content-Security-Policy", value: "default-src 'self'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: https://cdn.sanity.io; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self' https://cdn.sanity.io; object-src 'none'; upgrade-insecure-requests;" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        // Sanity Studio'yu hariç tut — kendi güvenlik politikası var
        source: "/((?!studio).*)",
        headers: securityHeaders,
      },
      {
        source: "/_next/static/:path*",
        headers: securityHeaders,
      },
      {
        source: "/_next/image",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
