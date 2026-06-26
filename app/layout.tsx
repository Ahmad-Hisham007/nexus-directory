import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/Components/ToasterProvider";
import SessionWrapper from "@/Components/SessionWrapper/SessionWrapper";
import ThemeToggle from "@/Components/ThemeToggle";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable name
});

export const metadata: Metadata = {
  title: "Nextus Directory",
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
      className={`${figtree.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-100 text-base-content transition-colors duration-300">
        <ToasterProvider />
        <SessionWrapper>{children}</SessionWrapper>
        {/* Floating Theme Toggle */}
        <ThemeToggle />
      </body>
    </html>
  );
}
