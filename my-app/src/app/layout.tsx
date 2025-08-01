import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
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
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            {children}
      </body>
    </html>
  );
}
