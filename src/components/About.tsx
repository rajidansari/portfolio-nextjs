import React from "react";
import SectionSeparator from "@/components/SectionSeparator";
import Title from "./Title";

export default function About() {
    const about = `Hi, \nI'm Rajid, a full-stack developer and BCA student (graduating 2027) based in New Delhi. I build complete web apps: React and Next.js interfaces on the front, Node.js, Express, and PostgreSQL behind them.\n
My main project is Hireflow, a job board with separate candidate and recruiter flows. The API handles JWT and refresh-token auth, OTP email verification, file uploads, and Dockerized deployment, and the React frontend (in progress) consumes it with Zustand, React Hook Form, and Zod. I designed the PostgreSQL schema and wrote the queries directly, including dynamic filtering and pagination.\n
I'm looking for junior full-stack or backend roles at product companies and startups. If you're hiring, or want to talk about something I've built, get in touch.`;

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
