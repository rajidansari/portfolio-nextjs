import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Rajid Ansari — Frontend Developer",
    description:
        "A sleek, minimal dev portfolio showcasing my work, projects, and ideas.",
    keywords: ["Rajid Ansari", "Developer", "Portfolio", "Frontend Developer"],
    authors: [{ name: "Rajid Ansari" }],
    metadataBase: new URL("https://rajidansari.vercel.app"),
    openGraph: {
        title: "Rajid Ansari",
        description: "Frontend Developer Portfolio",
        url: "https://rajidansari.vercel.app",
        siteName: "Rajid Ansari",
        type: "website",
        images: "/og.png",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        other: {
            rel: "mask-icon",
            url: "/icon.png",
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Rajid Ansari",
                            url: "https://rajidansari.vercel.app",
                            jobTitle: "Frontend Developer",
                        }),
                    }}
                />
                <meta
                    name="google-site-verification"
                    content="YPTupsWChNjl4KkPSfryrv2cZS13Y7BfszoA33sIuy0"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}
