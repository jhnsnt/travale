'use client'; // Required for useState and useRouter in Next.js App Router

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isValidEmail } from "@/utils/validate";
import { rotateBackground } from "@/lib/background";
import { backgroundImages } from "@/config/background";


export default function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const allFilled = isValidEmail(email) && password;

    const handleSubmit = () => {
        if (!allFilled) return;
        router.push("/home");
    };

    useEffect(() => {
        const cleanup = rotateBackground(backgroundImages);
        return cleanup;
    }, []);

  return (
    <main className="w-full flex h-full p-0 lg:p-5">
        <div className="m-auto p-3 md:p-0">
            <div className="flex flex-col md:flex-row w-full bg-white rounded-lg">
                <div className="w-full md:max-w-[50%] p-2">
                    <div className="bg-img h-[250px] md:h-[550px] rounded-[0.30rem]">
                    </div>
                </div>
                <div className="text-[#3f3f3f] mx-auto p-5 md:max-w-[50%] my-auto">
                    <div className="p-0 md:pr-2">
                        <h1 className="text-left text-3xl font-semibold gradient-text">
                            <span className="flex">
                                <Image alt="travale icon" src="/travale/images/travale-ico.svg" width={35} height={35} className="mr-1" /><span>Join journey</span>
                            </span>
                        </h1>
                        <p className="mb-5">
                            Sign in to book trips, share travel stories, and connect with fellow explorers.
                        </p>
                        
                        <div className="text-center">
                            {/* <p className="py-5">
                                Your social travel hub — share your adventures, discover hidden
                                gems, and connect with fellow explorers around the world.
                            </p> */}

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`fields border p-2 w-full rounded mb-2 
                                        ${
                                            email && !isValidEmail(email) ? "!border-red-700 border-2" : email && isValidEmail(email) ? "border-none" : "border-none"
                                        }`}
                            />

                            <input
                                type="password"
                                className="fields border-none p-2 w-full rounded"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <span
                                className="signBtn rounded-xl px-5 py-3 w-full block text-white"
                                onClick={handleSubmit}
                                style={{
                                    opacity: allFilled ? 1 : 0.5,
                                    cursor: allFilled ? "pointer" : "arrow",
                                }}
                            >
                                Sign In
                            </span>
                            <p className="my-4">
                                Don&#39;t have an account? <Link href="/signup">Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
