import { ChefHat } from "lucide-react";
import SplitText from "./ui/split-text";

export default function HeroSection() {
    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };
    return (
        <div
            className="h-screen relative bg-cover bg-center w-screen max-w-[100vw]"
            style={{
                position: "relative",
            }}
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url("https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg")',
                    opacity: 0.5,
                    zIndex: 0,
                }}
            ></div>

            <div className="absolute inset-0 bg-black/50">
                <nav className="container mx-auto px-20 py-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2">
                        <ChefHat className="h-8 w-8" />
                        <span className="md:text-2xl font-serif text-xl">LATIN GRILL TAMPA</span>
                    </div>
                    <div className="md:flex md:flex-row md:gap-8 text-sm tracking-wider mt-5 md:mt-0 flex flex-col items-center justify-center gap-y-2 md:gap-y-0">
                        <a
                            href="#menu"
                            className="relative text-[#C8A97E] font-semibold transition-all duration-500 hover:text-[#ffe4be] group"
                        >
                            MENU
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#262626] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a
                            href="#about"
                            className="relative text-[#C8A97E] font-semibold transition-all duration-500 hover:text-[#ffe4be] group"
                        >
                            ABOUT
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#262626] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a
                            href="#testimonials"
                            className="relative text-[#C8A97E] font-semibold transition-all duration-500 hover:text-[#ffe4be] group"
                        >
                            TESTIMONIALS
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#262626] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                        <a
                            href="#contact"
                            className="relative text-[#C8A97E] font-semibold transition-all duration-500 hover:text-[#ffe4be] group"
                        >
                            CONTACT
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#262626] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                        </a>
                    </div>
                </nav>

                <div className="container mx-auto px-4 h-[calc(100%-10rem)] flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">
                        <SplitText
                            text="Experience Fine Dining"
                            className="font-semibold text-center"
                            delay={100}
                            animationFrom={{
                                opacity: 0,
                                transform: "translate3d(0,50px,0)",
                            }}
                            animationTo={{
                                opacity: 1,
                                transform: "translate3d(0,0,0)",
                            }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center">
                        <SplitText
                            text="Indulge in a culinary journey where tradition meets innovation"
                            className="text-center"
                            delay={600}
                            animationFrom={{
                                opacity: 0,
                                transform: "translate3d(0,50px,0)",
                            }}
                            animationTo={{
                                opacity: 1,
                                transform: "translate3d(0,0,0)",
                            }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-[#9e8a6f] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block hover:bg-[#796955] duration-300">
                            <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ">
                                <span>{`Contuct Us`}</span>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>

                        <button className="bg-[#9e8a6f] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block hover:bg-[#796955] duration-300">
                            <div className="relative flex space-x-2 items-center z-10 rounded-full py-1.5 px-4 ">
                                <span>{`View Menu`}</span>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
