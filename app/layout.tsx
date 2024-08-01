"use client";

import React, { useCallback, useState } from "react";

import { Inter } from "next/font/google";

import "./globals.css";

import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Kevin Snyder",
// };

type MenuItemProps = {
  title: string;
  href: string;
  onClick: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, href, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
