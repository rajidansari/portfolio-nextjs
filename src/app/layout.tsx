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

export const metadata: Metadata = {
    metadataBase: new URL("https://rajidansari.vercel.app"),
    title: "Rajid Ansari | Full-Stack Developer (Node.js & React)",
    description:
        "Rajid Ansari is a full-stack developer in New Delhi building REST APIs, PostgreSQL backends, and React apps. Explore projects like Hireflow and get in touch.",
    keywords: [
        "Rajid Ansari",
        "Full-Stack Developer",
        "Backend Developer",
        "Node.js Developer",
        "React Developer",
        "Developer Portfolio",
    ],
    authors: [{ name: "Rajid Ansari", url: "https://rajidansari.vercel.app" }],
    creator: "Rajid Ansari",
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Rajid Ansari | Full-Stack Developer (Node.js & React)",
        description:
            "Full-stack developer building REST APIs, PostgreSQL backends, and React apps. See my projects and get in touch.",
        url: "https://rajidansari.vercel.app",
        siteName: "Rajid Ansari",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "Rajid Ansari, Full-Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rajid Ansari | Full-Stack Developer (Node.js & React)",
        description:
            "Full-stack developer building REST APIs, PostgreSQL backends, and React apps.",
        images: ["/og.png"],
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

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rajid Ansari",
    url: "https://rajidansari.vercel.app",
    image: "https://rajidansari.vercel.app/og.png",
    jobTitle: "Full-Stack Developer",
    description:
        "Full-stack developer building REST APIs, PostgreSQL backends, and React apps.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
    },
    knowsAbout: ["Node.js", "PostgreSQL", "React", "REST APIs", "Next.js"],
    sameAs: [
        "https://github.com/rajidansari",
        "https://www.linkedin.com/in/rajidansari",
    ],
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
                        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
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
