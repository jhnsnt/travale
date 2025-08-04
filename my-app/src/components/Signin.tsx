'use client'; // Required for useState and useRouter in Next.js App Router

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';


export default function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const isValidEmail = (value: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const allFilled = isValidEmail(email) && password;
    
    const handleSubmit = () => {
        if (!allFilled) return;
        router.push("/home"); // navigate in Next.js
    };

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
    <main className="w-full flex items-center m-auto h-full p-0 lg:p-5">
        <div className="m-auto">
            <div className="">
                <Image 
                    src="/images/travale-logo.svg"
                    width={175}
                    height={40}
                    alt="Logo"
                    className="mx-auto block mb-5" 
                />
            </div>
            <div className="">
                <div className="fields-container text-[#3f3f3f] w-full lg:max-w-[375px] block mx-auto p-5 bg-white rounded-xl">
                    <h1 className="text-left text-3xl lg:text-4xl font-semibold gradient-text">
                        Sign In
                    </h1>
                    <p className="my-4">
                        Don't have an account? <Link href="/signup">Sign Up</Link>
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
                                        email && !isValidEmail(email) ? "!border-red-700" : email && isValidEmail(email) ? "border-green-700" : "border-none"
                                    }`}
                        />

                        <input
                            type="password"
                            className="fields border-none p-2 w-full rounded"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <p className="my-5">
                            By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>.
                        </p>

                        <span
                            className="signBtn rounded-xl px-5 py-4 w-full block text-white"
                            onClick={handleSubmit}
                            style={{
                                opacity: allFilled ? 1 : 0.5,
                                cursor: allFilled ? "pointer" : "arrow",
                            }}
                        >
                            Sign In
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
