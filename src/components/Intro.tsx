import Image from "next/image";
import me from "../../public/assets/me_animify.png";
import TextSlider from "./TextSlider";
import localFont from "next/font/local";

const myFont = localFont({
    src: "../../public/fonts/Montserrat.ttf",
});

export function DesignationPart() {
    return (
        <div className="w-full h-[9rem] sm:h-[8rem] md:h-[9rem] lg:h-[9.8rem] px-[1rem] sm:px-[5rem] md:px-[7rem] lg:px-[23.05rem] border-bottom transition-all relative ">
            <div className="h-full w-full border-left border-right flex ">
                <div className="flex items-center justify-center w-[40%] md:w-[25%] lg:w-[20%] p-1 border-right relative">
                    <div className="aspect-square w-full h-full border-outside rounded-full relative overflow-hidden">
                        <Image
                            src={me}
                            alt="me"
                            className="h-[9rem] sm:h-[8rem] md:h-[9rem] lg:h-[9.8rem] w-full object-contain"
                        />
                    </div>
                </div>
                <div className="w-[80%] h-full ">
                    <div className="border-bottom h-[53%] px-2 text-wrap overflow-hidden lg:px-5 flex items-end bg-line">
                        <p
                            id="title"
                            className={`text-[9px] text-zinc-300 tracking-wide font-mono select-none`}
                        >
                            text-2xl font-bold text-zinc-900
                        </p>
                    </div>
                    <div className="border-bottom h-[25%] px-5 flex items-center">
                        <h1
                            className={`font-bold text-xl md:text-2xl lg:text-2xl text-zinc-900 ${myFont.className} `}
                        >
                            Rajid Ansari
                        </h1>
                    </div>
                    <div className="h-[calc(100%_-53%_-25%)] px-5 flex items-center">
                        <TextSlider />
                    </div>
                </div>
            </div>
        </div>
    );
}
