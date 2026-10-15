import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
                pathname: "/**",
            },
        ],
    },
    async headers() {
        return [
            {
                source: "/resume.pdf",
                headers: [{ key: "X-Robots-Tag", value: "noindex" }],
            },
        ];
    },
};

export default nextConfig;
