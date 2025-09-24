import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '600', '700', '800']
});

export const metadata: Metadata = {
    title: "Padarga - Next Stop: Anywhere",
    description: "Find it. Book it. Post it. From last-minute getaways to bucket-list adventures — share your story with the world.",
    icons: {
        icon: "/images/padarga_icon_main.svg"
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
