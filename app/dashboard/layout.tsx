import { ToasterProvider } from "@/Components/ToasterProvider";
import { Metadata } from "next";
import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import DashboardLayoutUi from "./_components/DashboardLayoutUi";
import SessionWrapper from "@/Components/SessionWrapper/SessionWrapper";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardLayoutUi>
        <SessionWrapper>{children}</SessionWrapper>
      </DashboardLayoutUi>
    </>
  );
}
