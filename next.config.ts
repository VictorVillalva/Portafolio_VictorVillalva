import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Advertencia: Esto desactiva todas las reglas, no solo la específica
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
