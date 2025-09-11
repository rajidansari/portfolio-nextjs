import Image from "next/image";
import logo from "../../public/assets/r_logo.png";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { AR_One_Sans } from "next/font/google";
import { DesignationPart } from "./Intro";

const arOneSans = AR_One_Sans({
    subsets: ["latin"],
    weight: "700",
});

const myFont = localFont({
    src: "../../public/fonts/FiraCode.ttf",
});

export default function HeroSection() {
    return (
        <div>
            <div className="w-full h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[20rem] px-[1rem] sm:px-[5rem] md:px-[7rem] lg:px-[23.05rem] border-bottom transition-all relative">
                <div className="h-full w-full flex items-center justify-center border-left border-right overflow-hidden relative">
                    <div
                        className={cn(
                            "absolute inset-0",
                            "[background-size:20px_20px]",
                            "[background-image:radial-gradient(#DBDBDB_1px,transparent_1px)]",
                            "dark:[background-image:radial-gradient(#DBDBDB_1px,transparent_1px)]"
                        )}
                    />
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-white"></div>
                    <Image
                        className="w-16 sm:w-16 md:w-20 lg:w-28 relative top-7 shadow rounded-md"
                        src={logo}
                        alt="logo"
                        draggable={false}
                    />
                </div>
            </div>
            <DesignationPart myFont={myFont} />
        </div>
    );
}
