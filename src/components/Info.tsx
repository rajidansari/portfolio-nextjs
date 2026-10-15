import React from "react";
import { LuCodeXml, LuBriefcase } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionSeparator from "./SectionSeparator";

const linkClass = "hover:border-b border-zinc-800";

export default function Info() {
    const info = [
        {
            serial: 1,
            icon: <LuCodeXml className="inline text-zinc-500" />,
            text: "Full-Stack Developer (Node.js, PostgreSQL, React)",
        },
        {
            serial: 2,
            icon: <LuBriefcase className="inline text-zinc-500" />,
            text: "Open to junior backend & full-stack roles",
        },
        {
            serial: 3,
            icon: <IoLocationOutline className="inline text-zinc-500" />,
            text: "New Delhi, India",
        },
        {
            serial: 4,
            icon: <MdOutlineMailOutline className="inline text-zinc-500" />,
            text: (
                <a href="mailto:rajidansari25@gmail.com" className={linkClass}>
                    rajidansari25@gmail.com
                </a>
            ),
        },
        {
            serial: 5,
            icon: <FaGithub className="inline text-zinc-500" />,
            text: (
                <a
                    href="https://github.com/rajidansari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                >
                    github.com/rajidansari
                </a>
            ),
        },
        {
            serial: 6,
            icon: <FaLinkedin className="inline text-zinc-500" />,
            text: (
                <a
                    href="https://www.linkedin.com/in/rajidansari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                >
                    linkedin.com/in/rajidansari
                </a>
            ),
        },
    ];

    return (
        <>
            <SectionSeparator />
            {/* main content */}
            <div className="w-full padding-main border-bottom">
                <div className="w-full h-full p-2 md:p-4 lg:p-4 border-left border-right">
                    {info.map((item) => (
                        <div
                            key={item.serial}
                            className="flex items-center gap-2 mb-3"
                        >
                            <span className="bg-gray-100 flex items-center justify-center rounded-md p-1">
                                {item.icon}
                            </span>
                            <p className="text-zinc-800 text-sm md:text-base font-[Fira_Code] font-light">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <SectionSeparator />
        </>
    );
}
