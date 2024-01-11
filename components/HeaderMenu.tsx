import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import HeaderMenuItem from "./HeaderMenuItem";

type HeaderMenuItemProps = React.ComponentProps<typeof HeaderMenuItem>;

type Props = {
  items: Omit<HeaderMenuItemProps, "onClick">[];
  isOpen: boolean;
  onClose: () => void;
};

const HeaderMenu: React.FC<Props> = ({ items, isOpen, onClose }) => {
  if (!isOpen) {
    return;
  }

  return (
    <div
      className={`fixed z-10 top-0 left-0 w-64 h-full bg-white ${
        isOpen ? "animate-menu-in" : ""
      }`}
    >
      <FontAwesomeIcon
        icon={faXmark}
        onClick={onClose}
        className="w-8 h-8 p-4 text-black"
      />
      {items.map((props, i) => (
        <HeaderMenuItem key={i} {...props} onClick={onClose} />
      ))}
    </div>
  );
};

export default HeaderMenu;
