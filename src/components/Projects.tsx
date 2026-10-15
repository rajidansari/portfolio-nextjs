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
        0,
    );

    const openDetails = (id: number) => {
        setOpenProjectDetails(openProjectDetails === id ? null : id);
    };

    const projects = [
        {
            id: 0,
            icon: "/images/hireflow.png",
            title: "Hireflow - Job Board",
            link: "https://hireflow0.vercel.app",
            github: "https://github.com/rajidansari/hireflow-backend",
            desc: `A job board where employers post openings and manage applicants, and candidates search and apply. I built both the React app and the REST API behind it.`,
            featured: [
                // Employer side
                `Employer dashboard listing all of their posted jobs`,
                `Per-job view of every application received for that job`,
                `Update an application's status (e.g. Pending, Reviewed, Hired, Rejected) from the dashboard`,

                // Candidate side
                `Candidates can search jobs with filters and pagination`,
                `Apply to jobs with a resume upload`,
                `Candidates can track their application status as employers update it`,

                // Platform
                `Role-based access separating employer and candidate features`,
                `Secure auth: short-lived JWTs, httpOnly refresh cookies, silent session restore`,
                `OTP email verification and password reset`,
                `Swagger-documented REST API with a Dockerized backend`,
            ],
        },
        {
            id: 1,
            icon: "/images/passguard.png",
            title: "PassGuard - Password Manager",
            link: "https://passguard0.vercel.app",
            github: "https://github.com/rajidansari/pass-guard",
            desc: `A full-stack password manager built with the MERN stack to securely store, organize, and access passwords through an intuitive vault.`,
            featured: [
                `AES-256-CBC encryption for stored passwords using Node.js crypto`,
                `Cookie-based authentication and protected routes`,
                `Credential management with one-tap copy and password visibility controls`,
                `Built-in strong password generator`,
                `Searchable vault with a responsive interface`,
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
                        <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                openProjectDetails === project.id
                                    ? "grid-rows-[1fr]"
                                    : "grid-rows-[0fr]"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="details pb-4 text-gray-700">
                                    <div className="px-3 pt-1 font-[Fira_Code]">
                                        <p className="text-gray-900">
                                            {project.desc}
                                        </p>

                                        <div className="mt-7 mb-2">
                                            {project.featured.map(
                                                (feat, index) => (
                                                    <span
                                                        key={index}
                                                        className="flex items-center gap-2 text-sm pb-1"
                                                    >
                                                        <BsFillCircleFill className="text-[5px] text-gray-400 shrink-0" />
                                                        <p>{feat}</p>
                                                    </span>
                                                ),
                                            )}
                                        </div>

                                        <div className="flex gap-4 mt-4 text-sm">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="border-b border-zinc-800 hover:text-black"
                                            >
                                                Live
                                            </a>
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="border-b border-zinc-800 hover:text-black"
                                                >
                                                    Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* project container ends here */}
            </div>
            <SectionSeparator />
        </div>
    );
};

export default Projects;
