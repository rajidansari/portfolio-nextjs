import React from "react";
import SocialLink from "./SocialLink";
import SectionSeparator from "./SectionSeparator";
import linkedin from "../../public/assets/linkedin.png";
import github from "../../public/assets/github.png";


export default function Social() {
    const socials = [
        {
            icon: linkedin,
            platform: "LinkedIn",
            username: "rajidansari",
            link: "https://www.linkedin.com/in/rajidansari"
        },
        {
            icon: github,
            platform: "GitHub",
            username: "rajidansari",
            link: "https://www.github.com/rajidansari"
        },
    ]

    return (
        <>
            <div className="min-h-[5rem] w-full padding-main border-bottom">
                <div className="min-h-[5rem] w-full border-left border-right flex items-center justify-between flex-col lg:flex-row md:flex-row ">
                    <SocialLink socials={socials} />
                </div>
            </div>
			<SectionSeparator />
        </>
    );
}
