"use client";

import Title from "@/components/Title";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import SectionSeparator from "./SectionSeparator";

interface Project {
    id: number;
    icon: string;
    title: string;
    link: string;
    desc: string;
    featured: string[];
}

const Projects = () => {
    const [openProjectDetails, setOpenProjectDetails] = useState<null | number>(
        0
    );

    const openDetails = (id: number) => {
        setOpenProjectDetails(openProjectDetails === id ? null : id);
    };

    const projects = [
        {
            id: 0,
            icon: "/images/r_logo.png",
            title: "Portfolio",
            link: "/",
            desc: `A sleek and minimal dev portfolio and personal blog.`,
            featured: [
                `Clean, modern & responsive design`,
                `SEO optimized (with sitemap, robots)`,
                `Subtle & soft browsing experience.`,
            ],
        },
        {
            id: 1,
            icon: "/images/passguard.png",
            title: "Passguard - Password Manager",
            link: "https://passguard0.vercel.app",
            desc: `A clean, modern, and secure password manager crafted with the MERN stack.`,
            featured: [
                `Encrypted vault using AES-256 Crypto APIs`,
                `Authentication with secure cookie handling`,
                `Minimal dashboard with smooth, subtle interactions`,
                `One-tap copy and built-in strong password generation`,
                `Fully responsive, frictionless multi-device experience`,
            ],
        },
    ];

    return (
        <div className="w-full border-bottom border-top">
            <Title title={"Projects"} />

            <div className="min-h-[10rem] w-full padding-main">
                {/* project container starts here */}

                {projects.map((project: Project) => (
                    <div
                        key={project.id}
                        className="border-left border-right min-h-auto w-full overflow-hidden border-bottom"
                    >
                        <div
                            onClick={() => openDetails(project.id)}
                            className="w-full flex gap-2 items-center justify-between h-[4rem] border-bottom group hover:bg-gray-100 transition-all ease-in duration-150 cursor-pointer"
                        >
                            <div className="h-full flex items-center gap-2 ">
                                <div className="h-full w-10 flex items-center justify-center border-right">
                                    <Image
                                        height={26}
                                        width={26}
                                        src={project.icon}
                                        className="rounded-md "
                                        alt="logo"
                                    />
                                </div>
                                <div>
                                    <a
                                        href={project.link}
                                        className=" text-sm font-[Montserrat] font-semibold leading-5 group-hover:border-b"
                                        target="_blank"
                                    >
                                        {project.title}
                                    </a>
                                </div>
                            </div>
                            <div className="h-full w-[4%] flex items-center justify-center text-center  mr-4 cursor-pointer ">
                                <div
                                    title={
                                        openProjectDetails === project.id
                                            ? "close"
                                            : "open"
                                    }
                                    className="h-[1.7rem]  relative "
                                >
                                    <IoIosArrowDown
                                        className={`absolute top-[10] duration-100 ease-linear  ${
                                            openProjectDetails === project.id
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }`}
                                    />
                                    <IoIosArrowUp
                                        className={` duration-100 ease-linear ${
                                            openProjectDetails === project.id
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* project details */}

                        {openProjectDetails === project.id ? (
                            <div
                                className={`details pb-4 text-gray-700`}
                            >
                                <div className="px-3 pt-1 h-fit font-[Fira_Code] transition-all duration-300 ease-linear ">
                                    <p className="text-gray-900">
                                        {" "}
                                        {project.desc}{" "}
                                    </p>
                                    <div className="mt-7 mb-2">
                                        {project.featured.map((feat, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center gap-2 text-sm pb-1"
                                            >
                                                <BsFillCircleFill className="text-[5px] text-gray-400" />
                                                <p>{feat}</p>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
                {/* project container ends here */}
            </div>
            <SectionSeparator />
        </div>
    );
};

export default Projects;
