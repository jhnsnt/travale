import Image from 'next/image';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

import { rotateBackground } from "@/lib/background";
import { backgroundImages } from "@/config/background";

export default function WelcomePage(){
    const router = useRouter();

    const handleSubmit = () => {
        router.push("/signup");
    }

    useEffect(() => {
        const cleanup = rotateBackground(backgroundImages);
        return cleanup;
    }, []);
    
    return (
        <div className="grid grid-rows-3 h-full w-full lg:max-w-[600px] m-auto p-5 text-center text-white">
            <div>
                <Image 
                    src="/images/padarga-logo-white.png"
                    width={225}
                    height={65.3}
                    alt="Logo"
                    className="block m-auto" 
                />
            </div>
            <div>
                <p className="absolute bottom-[30px] left-[30px] hidden md:block">Developer: Johnson Tinagos</p>
                <h1 className="text-5xl lg:text-7xl text-white mb-5 font-bold">Next Stop: <span className="gradient-text">Anywhere</span></h1> 
                <h2 className="text-center">Find it. Book it. Post it. From last-minute getaways to bucket-list adventures — share your story with the world.</h2>
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