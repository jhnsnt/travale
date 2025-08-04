import Image from 'next/image';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function WelcomePage(){
    const router = useRouter();

    const handleSubmit = () => {
        router.push("/signup");
    }

    useEffect(() => {
            const images = [
                "/images/login-bg.jpg",
                "/images/login-bg2.jpg",
                "/images/login-bg3.jpg",
            ];
            let index = 0;
    
            // Function to change background
            const changeBg = () => {
                document.body.style.transition = "background-image 1s ease";
                document.body.style.backgroundImage = `
                    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                    url(${images[index]})
                `;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
                index = (index + 1) % images.length;
            };
    
            // Initial color
            changeBg();
    
            // Change every 10 seconds
            const interval = setInterval(changeBg, 10000);
    
            // Cleanup: restore background when leaving this page
            return () => {
                clearInterval(interval);
                document.body.style.backgroundColor = ""; // reset
            };
        }, []);
    return (
        <div className="grid grid-rows-3 h-full w-full lg:max-w-[600px] m-auto p-5 text-center text-white">
            <div>
                <Image 
                    src="/images/travale-logo.svg"
                    width={175}
                    height={40}
                    alt="Logo"
                    className="mx-auto block mb-5" 
                />
            </div>
            <div>
                <h1 className="text-3xl lg:text-4xl text-white font-semibold mb-5">Welcome to Travale</h1>
                <p>Your social travel hub — share your adventures, discover hidden gems, and connect with fellow explorers around the world.</p>
            </div>
            <div className="content-end">
                <span
                    className="bg-white text-center m-auto  font-semibold text-[#3f3f3f] cursor-pointer rounded-xl px-5 py-4 w-[300px] block"
                    onClick={handleSubmit}
                >
                    Sign Up
                </span>
                <p className="my-4">
                    Already have an account? <Link href="/signin">Sign In</Link>
                </p>
            </div>
        </div>
    )
}