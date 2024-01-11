"use client";

import React, { useCallback, useState } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
        <header
          className={`fixed w-48 h-full ${
            isMenuOpen ? "bg-white" : "bg-transparent"
          }`}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
            onClick={handleClick}
            className={`w-8 h-8 p-4 ${
              isMenuOpen ? "text-black" : "text-white"
            }`}
          />
          <div
            className={`w-48 bg-white absolute ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {menuItems.map((props, i) => (
              <MenuItem key={i} {...props} onClick={onMenuItemClick} />
            ))}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
