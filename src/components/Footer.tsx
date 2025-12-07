import React from "react";

const Footer = () => {
    return (
        <div className="w-full border-bottom border-top">
            <div className="min-h-[9rem] w-full padding-main ">
                <div className="h-full border-right border-left w-full px-2 py-12 border-bottom text-gray-800 text-center">
                    <p className="">
                        If you’d like to collaborate or discuss a project, feel
                        free to reach out.
                    </p>
                    <a
                        href={"mailto:rajidansari25@gmail.com"}
                        className="py-2 px-4 rounded-md bg-black text-gray-100 inline-block mt-4 hover:bg-transparent hover:text-gray-800 border transition-all duration-200 ease-in"
                    >
                        → rajidansari25@gmail.com
                    </a>
                    <p className="text-xs my-4">
                        Built with Next.js & Tailwind. Deployed on Vercel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
