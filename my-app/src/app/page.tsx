'use client'; // Required for useState and useRouter in Next.js App Router

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import PolicyLinks from "@/components/PolicyLinks";
import TravaleLogo from "@/components/TravaleLogo";

export default function HomePage() {
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

  return (
    <main>
        <div className="login-container flex">
            <div>
                <TravaleLogo />
                <div className="fields-container">
                    <p className="text-white">
                        Your social travel hub — share your adventures, discover hidden
                        gems, and connect with fellow explorers around the world.
                    </p>

                    <input
                        type="email"
                        className="fields"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="fields"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <PolicyLinks />

                    <span
                        className="signBtn"
                        onClick={handleSubmit}
                        style={{
                            opacity: allFilled ? 1 : 0.5,
                            cursor: allFilled ? "pointer" : "arrow",
                        }}
                    >
                        Sign In
                    </span>

                    <p>
                    Don't have an account?{" "}
                    <Link href="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
            <div>asdfsadf</div>
        </div>
    </main>
  );
}
