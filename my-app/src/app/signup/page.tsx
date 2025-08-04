'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import PolicyLinks from "@/components/PolicyLinks";
import TravaleLogo from "@/components/TravaleLogo";
import FooterTravale from "@/components/FooterTravale";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const router = useRouter();

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const allFilled =
    isValidEmail(email) && password && firstname && lastname;

  const handleSubmit = () => {
    if (!allFilled) return;
    router.push("/"); // navigate to home ("/")
  };

  return (
    <div>
      <main>
        <TravaleLogo />
        <div className="fields-container">
          <p>
            Your social travel hub — share your adventures, discover hidden
            gems, and connect with fellow explorers around the world.
          </p>

          <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`fields border ${ 
                email && !isValidEmail(email) 
                    ? "!border-red-700" 
                    : email && isValidEmail(email)
                    ? "border-green-700" : "border-none"
                }`}
            />

          <input
            type="password"
            className="fields"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            className="fields"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            className="fields"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
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
            Sign Up
          </span>

          <p>
            Already have an account? <Link href="/">Sign In</Link>
          </p>
        </div>
      </main>
      <FooterTravale />
    </div>
  );
}
