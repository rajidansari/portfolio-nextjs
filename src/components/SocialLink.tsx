import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function SocialLink({
    socials,
}: {
    socials: { icon: any; platform: string; username: string; link: string }[];
}) {
    return (
        <>
            {socials.map((social) => (
                <a
                    key={social.platform}
                    href={social.link}
                    target="_blank"
                    className="w-full md:w-[48.5%] lg:w-[48.5%] min-h-[5rem] border-right border-bottom md:border-left lg:border-left flex items-center group"
                >
                    <div className="w-[20%] h-full flex items-center justify-center ">
                        <div className="h-[75%] w-[75%] rounded-md overflow-hidden">
							<Image src={social.icon} alt={`${social.platform}`} className="h-full w-full rounded-lg" />
						</div>
                    </div>
                    <div className="w-[74%] h-full flex flex-col justify-center ">
                        <p className="text-zinc-800 font-semibold group-hover:underline w-fit font-[gilroy]">
                            {" "}
                            {social.platform}{" "}
                        </p>
                        <p className="text-zinc-500 text-sm font-[Fira_Code] tracking-tighter">
                            {social.username}
                        </p>
                    </div>
                    <div className="w-[8%] lg:w-[6%] h-full flex items-center justify-center">
                        <MdArrowOutward />
                    </div>
                </a>
            ))}
        </>
    );
}
