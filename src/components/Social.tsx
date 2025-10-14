import React from "react";
import SocialLink from "./SocialLink";
import SectionSeparator from "./SectionSeparator";

export default function Social() {
    const socials = [
        {
            icon: "https://ik.imagekit.io/vx7u9slhq/assets/linkedin.png?updatedAt=1759400567996",
            platform: "LinkedIn",
            username: "rajidansari",
            link: "https://www.linkedin.com/in/rajidansari"
        },
        {
            icon: "https://ik.imagekit.io/vx7u9slhq/assets/github.png?updatedAt=1744104661578",
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
