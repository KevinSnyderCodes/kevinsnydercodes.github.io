import React, { useCallback, useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import HeaderMenu from "@/components/HeaderMenu";
import IconButton from "@/components/IconButton";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="fixed z-10 w-full bg-transparent">
      <IconButton
        icon={faBars}
        onClick={handleMenuOpen}
        className="text-white"
      />
      <HeaderMenu
        items={menuItems}
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
      />
    </header>
  );
};

export default Header;
