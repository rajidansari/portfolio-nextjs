import Info from "@/components/Info";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";


export default function Home() {
    return (
        <div className="h-auto w-full bg-white transition-all selection:text-gray-50 selection:bg-black overflow-x-hidden">
            <HeroSection />
            <Info />
            <About />
        </div>
    );
}
