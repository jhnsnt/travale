'use client';

import { useEffect } from "react";
import { useRef } from 'react';
import Image from "next/image";
import Story from "@/components/Story";
import Nav from "@/components/Nav";
import Message from "@/components/Message";

export default function Home() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Optional: scroll buttons
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    };
    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const name1 = "You";
    const name2 = "Robert Hodges";
    const name3 = "Sue Hunter";
    const name4 = "Angela	Brown";
    const name5 = "Evan Hamilton";
    const name6 = "Tim Allan";

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
        <Nav />
        <div className="w-full md:w-[60%] bg-white p-4">
            <div className="w-full grid-rows-3">
                <div className="w-full md:w-[700px] block mx-auto">
                    {/* <div className="">
                        <Image 
                            src="/images/travale-logo-main.svg"
                            width={175}
                            height={40}
                            alt="Logo"
                            className="mx-auto block mb-5" 
                        />
                    </div> */}
                    <div className="story-wrap">
                        <ul className="story-list grid grid-cols-6 text-center">
                            <Story Name={name1} variant="variant1" closeFriend="" noStory="noStory" />
                            <Story Name={name2} variant="variant2" closeFriend="" noStory="" />
                            <Story Name={name3} variant="variant3" closeFriend="closeFriend" noStory="" />
                            <Story Name={name4} variant="variant4" closeFriend="" noStory="" />
                            <Story Name={name5} variant="variant5" closeFriend="" noStory="" />
                            <Story Name={name6} variant="variant6" closeFriend="" noStory="" />
                        </ul>
                    </div>
                </div>
                <div className="w-[320px] md:w-[700px] block m-auto">
                    <div className="relative w-full">
                        {/* Scroll Buttons */}
                        <button
                            onClick={scrollLeft}
                            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full shadow"
                        >
                            ◀
                        </button>

                        <button
                            onClick={scrollRight}
                            className="absolute cursor-pointer right-1 top-1/2 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full shadow"
                        >
                            ▶
                        </button>

                        {/* Scroll Container */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto space-x-4 px-4 py-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
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
                                className="min-w-[250px] h-[400px] bg-blue-500 text-white rounded-lg flex items-center justify-center snap-start"
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
                <footer className="content-end">
                    <p className="text-black">&copy; Travale 2025</p>
                </footer>
            </div>
        </div>
        <Message />
    </div>
  );
}
