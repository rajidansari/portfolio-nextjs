"use client";

import Title from "@/components/Title";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";

interface Project {
    id: number;
    icon: string;
    title: string;
    link: string;
    desc: string;
    featured: string[];
}

const Projects = () => {
    const [openProjectDetails, setOpenProjectDetails] = useState<null|number>(0);

    const openDetails = (id: number) => {
        setOpenProjectDetails(openProjectDetails === id ? null : id);
    };

    const projects = [
        {
            id: 0,
            icon: "/images/r_logo.png",
            title: "rajid.vercel.app",
            link: "/",
            desc: `A sleek and minimal dev portfolio and personal blog.`,
            featured: [
                `Clean, modern & responsive design`,
                `SEO optimized (with sitemap, robots)`,
                `Subtle & soft browsing experience.`,
            ],
        },
    ];

    return (
        <div className="w-full border-bottom border-top pb-10 mb-96">
            <Title title={"Projects"} />

            <div className="min-h-[10rem] w-full padding-main">
                {/* project container starts here */}

                {projects.map((project: Project) => (
                    <div key={project.id} className="border-left border-right min-h-auto w-full overflow-hidden border-bottom">
                        <div
                            onClick={() => openDetails(project.id)}
                            className="w-full flex gap-2 items-center justify-between h-[4rem] border-bottom group hover:bg-gray-50 transition-colors"
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
                                    <h1 className=" text-sm font-[Montserrat] font-semibold leading-5 group-hover:border-b">
                                        {project.title}
                                    </h1>
                                </div>
                            </div>
                            <div className="h-full w-[4%] flex items-center justify-center text-center  mr-4 cursor-pointer">
                                <div
                                    title={
                                        openProjectDetails ? "close" : "open"
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
                            className={`details transition-all duration-200  text-gray-700 ease-linear overflow-hidden`}
                            style={{
                                height:
                                    openProjectDetails === project.id ? "12rem" : "0rem",
                            }}
                        >
                            <div className="px-3 pt-1 h-fit font-[Fira_Code]">
                                <p className="text-gray-900"> {project.desc} </p>
                                <div className="mt-7 mb-2">
                                    {project.featured.map((feat, index) => (
                                        <span key={index} className="flex items-center gap-2 text-sm pb-1">
                                            <BsFillCircleFill className="text-[5px] text-gray-400" />
                                            <p>{feat}</p>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* project container ends here */}
            </div>
        </div>
    );
};

export default Projects;
