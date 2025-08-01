'use client';

import { useEffect } from "react";
import TravaleLogoMain from "@/components/TravaleLogoMain";
import Story from "@/components/Story";

export default function Home() {
  useEffect(() => {
    // Add class to <body> when this page loads
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  const name1 = "You";
  const name2 = "Robert Hodges";
  const name3 = "Evan Hamilton";
  const name4 = "Sue test";

  return (
    <div>
      <main>
        <TravaleLogoMain />
        <div className="story-wrap">
          <ul className="story-list">
            <Story Name={name1} variant="variant1" />
            <Story Name={name2} variant="variant2" />
            <Story Name={name3} variant="variant3" />
            <Story Name={name4} variant="variant4" />
          </ul>
        </div>
      </main>
    </div>
  );
}
