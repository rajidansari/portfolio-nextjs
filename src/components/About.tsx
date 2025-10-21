import React from "react";
import SectionSeparator from "@/components/SectionSeparator";
import Title from "./Title";

export default function About() {
    const about = `Hello World! I’m Rajid Ansari — a BCA student and web developer who loves building things that people can actually use.\n
I'm learning 'MERN' to create full-featured apps from scratch.\n
I’ve built projects like an Expense Tracker and a Password Manager, and I’m always experimenting with new ideas to learn faster.\n
This portfolio is where I share my work and progress as I continue to grow as a developer.\n
Let's connect & collaborate!`;

    return (
        <div className="w-full border-bottom border-top">
            <Title title={"About"} />

            <div className="w-full min-h-[12rem] padding-main border-top">
                <div className="w-full h-full  border-left border-right">
                    <div className="px-2 py-5">
                        <p className="text-zinc-900 text-sm md:text-lg lg:text-[0.9rem] font-[Fira_Code] font-light leading-relaxed whitespace-pre-wrap">
                            {about}
                        </p>
                    </div>
                </div>
            </div>

			<SectionSeparator />
        </div>
    );
}
