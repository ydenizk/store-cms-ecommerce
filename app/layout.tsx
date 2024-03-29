import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopAd from "@/components/topAd";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toastProvider";
import Footer from "@/components/footer";
import { ModalProvider } from "@/providers/modalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ToastProvider />
        <ModalProvider />
        <TopAd />
        <Navbar />
  
        {children}
        <Footer />
      </body>
    </html>
  );
}
