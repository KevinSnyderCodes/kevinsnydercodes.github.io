import React, { useCallback, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import HeaderMenu from "./HeaderMenu";

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
    <header className="fixed w-full h-full bg-transparent">
      <FontAwesomeIcon
        icon={faBars}
        onClick={handleMenuOpen}
        className="w-8 h-8 p-4 text-white"
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
