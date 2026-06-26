// app/(public)/layout.tsx
import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-base-100 text-base-content w-full overflow-x-hidden">
        {children}
      </div>
      <Footer />
    </>
  );
}
