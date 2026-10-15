import localFont from "next/font/local";

const myFont = localFont({
    src: "../../public/fonts/FiraCode.ttf",
});

const lines = [
    "Full-Stack Developer",
    "Node.js · PostgreSQL · React",
    "I build REST APIs, auth systems & web apps.",
];

export default function TextSlider() {
    return (
        <div className="h-[66%] md:h-[70%] lg:h-[70%] overflow-hidden">
            <div className="select-none">
                {lines.map((line) => (
                    <p
                        key={line}
                        className={`animate-slide text-[11px] lg:text-[14px] text-zinc-700 font-light tracking-wide ${myFont.className} text-nowrap`}
                    >
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}