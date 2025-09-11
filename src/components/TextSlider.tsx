// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";

export default function TextSlider({ myFont }: any) {
    // useEffect(() => {
    //     const paras = document.querySelectorAll(".slider-text");
    //     let index = 0;
    //     let animate = false;

    //     function slideText()
            //    if (!animate) {
    //             animate = true;

    //             // Slide current text up
    //             gsap.to(paras[index], {
    //                 top: "-=100%",
    //                 duration: 1,
    //                 onComplete: function () {
    //                     gsap.set(this._targets[0], { top: "100%" });
    //                     animate = false;
    //                 },
    //             });

    //             // Next text
    //             index = index === paras.length - 1 ? 0 : index + 1;
    //             gsap.to(paras[index], {
    //                 top: "-=100%",
    //                 duration: 1,
    //             });
    //         }
    //     }

    //     // Run every 3 seconds
    //     const interval = setInterval(slideText, 3000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="h-[70%] overflow-hidden">
            <div>
                <p
                    id="title"
                    className={`animate-slide text-[14px] text-zinc-500 font-light
                         tracking-wide ${myFont.className}`}
                >
                    Fullstack Developer
                </p>
                <p
                    id="title"
                    className={`animate-slide text-[14px] text-zinc-500 font-light
                         tracking-wide ${myFont.className}`}
                >
                    Turning code into modern web apps
                </p>
                <p
                    id="title"
                    className={`animate-slide text-[14px] text-zinc-500 font-light
                         tracking-wide ${myFont.className}`}
                >
                    Small details matter
                </p>
            </div>
        </div>
    );
}
