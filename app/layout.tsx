import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import Footer from "@/components/Footer";
import { firaSans } from "@/lib/fonts";




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
