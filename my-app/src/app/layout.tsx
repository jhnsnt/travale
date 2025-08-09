import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '600', '700', '800']
});

export const metadata: Metadata = {
    title: "Travale",
    description: "Find it. Book it. Post it. From last-minute getaways to bucket-list adventures — share your story with the world.",
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
