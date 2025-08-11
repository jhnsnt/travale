'use client';

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { isValidEmail } from "@/utils/validate";
import { rotateBackground } from "@/lib/background";
import { backgroundImages } from "@/config/background";


export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const router = useRouter();

    const allFilled = isValidEmail(email) && password;

    const handleSubmit = () => {
        if (!allFilled) return;
        router.push("/signin");
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
                                <Image alt="travale icon" src="/images/travale-ico.svg" width={35} height={35} className="mr-1" /><span>Start your journey</span>
                            </span>
                        </h1>
                        <p className="mb-5">
                            Join a community of travelers. Book trips, share stories, and find your next destination.
                        </p>
                        <div className="text-center">
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

                            <input
                                type="text"
                                className="fields border-none p-2 w-full rounded"
                                placeholder="First name"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />

                            <input
                                type="text"
                                className="fields border-none p-2 w-full rounded"
                                placeholder="Last name"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />


                            <span
                                className="signBtn rounded-xl px-5 py-3 w-full block text-white"
                                onClick={handleSubmit}
                                style={{
                                    opacity: allFilled ? 1 : 0.5,
                                    cursor: allFilled ? "pointer" : "arrow",
                                }}
                            >
                                Sign Up
                            </span>

                            <p className="mt-4">
                                Already have an account? <Link href="/signin">Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
