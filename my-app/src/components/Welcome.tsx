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
                    className="block m-auto" 
                />
            </div>
            <div>
                <h1 className="text-5xl lg:text-7xl text-white mb-5 font-bold">Next Stop: <span className="gradient-text">Anywhere</span></h1> 
                <p className="text-center">Find it. Book it. Post it. From last-minute getaways to bucket-list adventures — share your story with the world.</p>
            </div>
            <div className="content-end">
                <span
                    className="bg-white text-center m-auto  font-semibold text-[#3f3f3f] cursor-pointer rounded-xl px-5 py-5 w-[320px] block"
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