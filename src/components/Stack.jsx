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
            path: "/images/git.png",
            title: "Git",
        },
        {
            path: "/images/github.png",
            title: "GitHub",
        },
    ];

    return (
        <div className="w-full border-bottom border-top">
            <Title title={"Stack"} />
            {/* stack div*/}
            <div className="w-full h-auto padding-main ">
                <div className="min-h-[7rem] w-full flex flex-wrap gap-3 border-left border-right p-3">
                    {images.map((image) => (
                        <div className="w-fit h-fit group relative" key={image.title}>
                            <div className={`py-1 px-3 text-[10px] bg-gray-200 text-center rounded hidden group-hover:block transition-all duration-200 absolute -top-7 -left-1 text-nowrap text-gray-800 font-semibold font-[fira_Code]`}>{image.title}</div>
                            <Image
                                src={image.path}
                                width={40}
                                height={40}
                                alt={image.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <SectionSeparator />
        </div>
    );
}
