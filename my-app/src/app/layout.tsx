import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '600', '700', '800']
});



export const metadata: Metadata = {
    title: "Travale",
    description: "Your social travel hub — share your adventures, discover hidden gems, and connect with fellow explorers around the world.",
    icons: {
        icon: "/images/travale-ico.svg"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
            className={`${poppins.className} antialiased`}
        >
            {children}
      </body>
    </html>
  );
}
