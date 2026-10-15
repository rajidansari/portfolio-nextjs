import React from "react";
import type { IconType } from "react-icons";
import {
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiRedux,
    SiGit,
    SiGithub,
    SiVercel,
} from "react-icons/si";
import SectionSeparator from "./SectionSeparator";
import Title from "@/components/Title";

interface Tech {
    name: string;
    Icon: IconType;
    color: string;
}

interface Category {
    label: string;
    items: Tech[];
}

const categories: Category[] = [
    {
        label: "Backend",
        items: [
            { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
            { name: "Express", Icon: SiExpress, color: "#000000" },
            { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
            { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
            { name: "Docker", Icon: SiDocker, color: "#2496ED" },
        ],
    },
    {
        label: "Frontend",
        items: [
            { name: "React", Icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
            { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
            { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Redux", Icon: SiRedux, color: "#764ABC" },
            { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", Icon: SiCss3, color: "#1572B6" },
        ],
    },
    {
        label: "Tools",
        items: [
            { name: "Git", Icon: SiGit, color: "#F05032" },
            { name: "GitHub", Icon: SiGithub, color: "#181717" },
            { name: "Vercel", Icon: SiVercel, color: "#181717" },
        ],
    },
];

export default function Stack() {
    return (
        <div className="w-full border-bottom border-top">
            <Title title={"Stack"} />
            <div className="w-full h-auto padding-main">
                <div className="w-full border-left border-right p-3 md:p-4 flex flex-col gap-5">
                    {categories.map((cat) => (
                        <div key={cat.label}>
                            <p className="text-xs uppercase tracking-widest text-zinc-500 font-[Fira_Code] mb-2">
                                {cat.label}
                            </p>
                            <ul className="flex flex-wrap gap-2">
                                {cat.items.map(({ name, Icon, color }) => (
                                    <li
                                        key={name}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-200 bg-white text-sm text-zinc-800 font-[Fira_Code]"
                                    >
                                        <Icon
                                            className="shrink-0 text-base"
                                            style={{ color }}
                                            aria-hidden="true"
                                        />
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <SectionSeparator />
        </div>
    );
}