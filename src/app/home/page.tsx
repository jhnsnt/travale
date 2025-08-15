'use client';

import Image from "next/image";
import Story from "@/components/Story";
import Nav from "@/components/Nav";
import Message from "@/components/Message";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

export default function Home() {
    const { scrollRef, scrollLeft, scrollRight } = useHorizontalScroll();

    return (
        <div>
            <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
                <div className="w-full md:w-[20%]"></div>
                <div className="w-full md:w-[60%] bg-white pt-4 pb-[80px] md:pb-0">
                    <div className="w-full grid-rows-3">
                        <div className="w-full md:w-[700px] block mx-auto">
                            <div className="">
                                <Image 
                                    src="/images/travale-logo-main.svg"
                                    width={175}
                                    height={40}
                                    alt="Logo"
                                    className="mx-auto block mb-5 w-[140px] md:w-[175px]" 
                                />
                            </div>
                            <div className="story-wrap">
                                <Story />
                            </div>
                        </div>
                        <div className="w-full md:w-[700px] block m-auto">
                            <div className="relative w-full">
                                {/* Scroll Buttons */}
                                <button
                                    onClick={scrollLeft}
                                    className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full shadow hidden md:block"
                                >
                                    ◀
                                </button>

                                <button
                                    onClick={scrollRight}
                                    className="absolute cursor-pointer right-1 top-1/2 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full shadow hidden md:block"
                                >
                                    ▶
                                </button>

                                {/* Scroll Container */}
                                <div
                                    ref={scrollRef}
                                    className="flex overflow-x-auto space-x-4 px-4 py-2 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                                    style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                    }}
                                >
                                    {/* Items */}
                                    {[1, 2, 3, 4, 5, 6].map((n) => (
                                    <div
                                        key={n}
                                        className="min-w-[300px] h-[500px] bg-blue-500 text-white rounded-lg flex items-center justify-center snap-start"
                                    >
                                        Slide {n}
                                    </div>
                                    ))}
                                </div>

                                {/* Hide scrollbar via tailwind-scrollbar-hide or global CSS */}
                                <style jsx>{`
                                    .scrollbar-hide::-webkit-scrollbar {
                                        display: none;
                                    }
                                `}</style>
                            </div>
                        </div>
                        {/* <footer className="content-end">
                            <p className="text-black">&copy; Travale 2025</p>
                        </footer> */}
                    </div>
                </div>
                <Message />
            </div>
            <Nav />
        </div>
    );
}
