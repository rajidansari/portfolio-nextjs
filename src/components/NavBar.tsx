"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import logo from "../../public/assets/r_logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
    const logoRef = useRef(null);

    useGSAP(() => {
        gsap.from(logoRef.current, {
			y: 50,
			duration: 0.3,
			scrollTrigger: {
				trigger: logoRef.current,
				start: "top -16.5%",
				end: "top -20%",
				scrub: 1,
			}
		});
    });

    return (
        <>
            <div className="w-full h-2 bg-white fixed top-0 left-0 z-10"></div>
            <nav className="w-full bg-white px-[1rem] sm:px-[5rem] md:px-[7rem] lg:px-[23rem] border-outside transition-all flex justify-between items-center fixed top-2 left-0 z-10 selection:text-gray-50 selection:bg-black overflow-hidden">
                <div
                    className={`w-full h-12 border-left border-right flex justify-between items-center px-2`}
                >
                    <div>
                        <Link className="" href={"/"}>
                            <Image
								ref={logoRef}
                                className="sm:w-8 lg:w-[38px] rounded-md"
                                width={"35"}
                                src={logo}
                                alt="logo"
                                draggable={false}
                            />
                        </Link>
                    </div>

                    {/* links */}
                    <div className=" flex gap-5 sm:gap-4 md:gap-7 lg:gap-10 transition-all">
                        <a
                            href="https://docs.google.com/document/d/1BlqHB0GJZ22tqViU3iMiuw3DohaenYVT/edit?usp=drive_link&ouid=111185999900777347746&rtpof=true&sd=true"
                            className="text-[15px] text-gray-500 font-mono hover:text-gray-600"
                        >
                            Resume
                        </a>
                        <Link
                            href="/blogs"
                            className="text-[15px] text-gray-500 font-mono hover:text-gray-600"
                        >
                            Blogs
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
