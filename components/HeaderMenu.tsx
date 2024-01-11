import React, { useRef } from "react";

import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import HeaderMenuItem from "./HeaderMenuItem";

const useIsFirstRender = () => {
  const isFirstRender = useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }

  return false;
};

type HeaderMenuItemProps = React.ComponentProps<typeof HeaderMenuItem>;

type Props = {
  items: Omit<HeaderMenuItemProps, "onClick">[];
  isOpen: boolean;
  onClose: () => void;
};

const HeaderMenu: React.FC<Props> = ({ items, isOpen, onClose }) => {
  const isFirstRender = useIsFirstRender();

  return (
    <div
      className={classNames("fixed top-0 left-0 w-64 h-full bg-white", {
        "-translate-x-[16rem]": !isOpen,
        "animate-menu-in": !isFirstRender && isOpen,
        "animate-menu-out": !isFirstRender && !isOpen,
      })}
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
