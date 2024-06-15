import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import Provider from "@/provider/Provider";
import { NextAuthProvider } from "./NextProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yayasan Al-Hunafa",
  description: "Yayasan Al-Hunafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth overflow-x-hidden scrollbar-hide'>
      <React.StrictMode>
        <NextAuthProvider>
          <Provider>
            <body className={inter.className}>
              <Header />
              {children}
              <Footer />
            </body>
          </Provider>
        </NextAuthProvider>
      </React.StrictMode>
    </html>
  );
}
