import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/Components/ToasterProvider";
import SessionWrapper from "@/Components/SessionWrapper/SessionWrapper";
import { IoMdSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Js Authentication System",
  description: "Built with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-100 text-base-content transition-colors duration-300">
        <ToasterProvider />
        <SessionWrapper>{children}</SessionWrapper>
        {/* Floating Theme Toggle */}
        <div className="fixed bottom-6 right-6 z-50">
          <label className="swap swap-rotate btn btn-circle btn-primary shadow-lg">
            <input type="checkbox" className="theme-controller" value="dark" />
            {/* sun icon */}
            <IoMdSunny className="swap-off fill-current w-6 h-6" />
            {/* moon icon */}
            <FiMoon className="swap-on fill-current w-6 h-6" />
          </label>
        </div>
      </body>
    </html>
  );
}
