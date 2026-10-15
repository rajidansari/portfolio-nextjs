import React from "react";

const Footer = () => {
    return (
        <div className="w-full border-bottom border-top">
            <div className="min-h-[9rem] w-full padding-main">
                <div className="h-full border-right border-left w-full px-2 py-12 border-bottom text-gray-800 text-center font-[Fira_Code]">
                    <p className="text-base md:text-lg font-semibold">
                        Open to junior full-stack and backend roles.
                    </p>
                    <p className="text-sm text-zinc-600 mt-2">
                        Hiring, or want to talk about something I&apos;ve built?
                        I reply to every email.
                    </p>

                    <a
                        href="mailto:rajidansari25@gmail.com"
                        className="py-2 px-4 rounded-md text-sm bg-black text-gray-100 inline-block mt-5 border border-black hover:bg-transparent hover:text-gray-800 transition-all duration-200 ease-in"
                    >
                        → rajidansari25@gmail.com
                    </a>

                    <nav
                        aria-label="Footer links"
                        className="flex justify-center gap-5 mt-5 text-sm"
                    >
                        <a
                            href="https://github.com/rajidansari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-transparent hover:border-zinc-800"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rajidansari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-transparent hover:border-zinc-800"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-transparent hover:border-zinc-800"
                        >
                            Resume
                        </a>
                    </nav>

                    <p className="text-xs text-zinc-500 mt-6">
                        Built with Next.js & Tailwind. Deployed on Vercel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
