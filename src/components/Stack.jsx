import React from "react";
import SectionSeparator from "./SectionSeparator";
import Image from "next/image";
import Title from "@/components/Title";

export default function Stack() {
    const images = [
        {
            path: "/images/javascript.png",
            title: "JavaScript",
        },
        {
            path: "/images/html.png",
            title: "HTML",
        },
        {
            path: "/images/css.png",
            title: "CSS",
        },
        {
            path: "/images/tailwind.png",
            title: "Tailwind CSS",
        },
        {
            path: "/images/react.png",
            title: "React JS",
        },
        {
            path: "/images/redux.png",
            title: "Redux",
        },
        {
            path: "/images/mongodb.webp",
            title: "MongoDB",
        },
        {
            path: "/images/nodejs.png",
            title: "Node JS",
        },
        {
            path: "/images/express.svg",
            title: "Express JS",
        },
        {
            path: "/images/git.png",
            title: "Git",
        },
        {
            path: "/images/github.png",
            title: "GitHub",
        },
        {
            path: "/images/gsap.svg",
            title: "GSAP",
        },
    ];

    return (
        <div className="w-full border-bottom border-top">
            <Title title={"Stack"} />
            {/* stack div*/}
            <div className="w-full h-auto padding-main ">
                <div className="min-h-[7rem] w-full flex flex-wrap gap-5 border-left border-right p-3">
                    {images.map((image) => (
                        <div className="w-fit h-fit group relative" key={image.title}>
                            <div className={`py-2 px-4 text-[12px] bg-gray-900 text-center rounded scale-0 group-hover:scale-100 transition-all duration-200 absolute -top-10 -left-5 text-nowrap text-gray-100 font-semibold font-[fira_Code]`}>{image.title}</div>
                            <Image
                                src={image.path}
                                width={32}
                                height={32}
                                alt={image.title}
                                className="h-auto "
                            />
                        </div>
                    ))}
                </div>
            </div>
            <SectionSeparator />
        </div>
    );
}
