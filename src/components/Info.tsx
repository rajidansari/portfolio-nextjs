import React from "react";
import { LuCodeXml } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import SectionSeparator from "./SectionSeparator";


export default function Info() {
    const info = [
        {
            serial: 1,
            icon: <LuCodeXml className="inline text-zinc-500" />,
            text: "Frontend Developer",
        },
        {
            serial: 2,
            icon: <IoLocationOutline className="inline text-zinc-500" />,
            text: "New Delhi, India",
        },
        {
            serial: 3,
            icon: <MdOutlineMailOutline className="inline text-zinc-500" />,
            text: <a href={"mailto:rajidansari25@gmail.com"} target="_blank" className="hover:border-b">rajidansari25@gmail.com</a>,
        },
        {
            serial: 4,
            icon: <TfiWorld className="inline text-zinc-500" />,
            text: <a href={"/"} className="hover:border-b">iamrajid.vercel.app</a>,
        },
    ];

    return (
        <>
            <SectionSeparator />
            {/* main content */}
            <div className="w-full  padding-main border-bottom">
                <div className="w-full h-full p-2 md:p-4 lg:p-4 border-left border-right">
                    {info.map((item) => (
                        <div key={item.serial} className="flex gap-2 mb-3">
                            <span className="bg-gray-100 flex items-center justify-center rounded-md p-1">
                                {item.icon}
                            </span>
                            <p className="text-zinc-800 text-sm md:text-lg lg:text-[1rem] font-[Fira_Code] font-light">
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
