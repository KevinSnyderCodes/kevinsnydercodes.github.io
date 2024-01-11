"use client";

import React, { useCallback, useState } from "react";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Link from "next/link";

import Header from "@/components/Header";

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

const menuItems: Omit<MenuItemProps, "onClick">[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const onMenuItemClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
