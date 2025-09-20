import React from "react";

export default function About() {
    const about = `Hi, I’m Rajid — a BCA student and web developer who loves building things that people can actually use.\n
I'm learning 'MERN' to create full-featured apps from scratch.\n
I’ve built projects like an Expense Tracker and a Password Manager, and I’m always experimenting with new ideas to learn faster.\n
This portfolio is where I share my work and progress as I continue to grow as a developer.\n
Let's Collaborate...`;

    return (
        <div className="w-full border-bottom">
            <div className="w-full h-8 padding-main border-bottom">
                <div className="h-full border-left border-right text-2xl font-semibold px-2">
                    About
                </div>
            </div>

            <div className="w-full min-h-[12rem] padding-main border-top">
                <div className="w-full h-full  border-left border-right">
                    <div className="px-2 py-5">
                        <p className="text-zinc-800 text-sm md:text-lg lg:text-[1rem] font-[Fira_Code] font-light leading-relaxed whitespace-pre-wrap">
                            {about}
                        </p>
                    </div>
                </div>
            </div>

			<div className="w-full h-8 padding-main border-top border-bottom">
                <div className="h-full border-left border-right"></div>
            </div>
        </div>
    );
}
