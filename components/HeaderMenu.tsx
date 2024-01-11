import React, { useRef } from "react";

import { useIsFirstRender } from "usehooks-ts";

import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import HeaderMenuItem from "./HeaderMenuItem";
import IconButton from "./IconButton";

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
      <IconButton icon={faXmark} onClick={onClose} className="text-black" />
      {items.map((props, i) => (
        <HeaderMenuItem key={i} {...props} onClick={onClose} />
      ))}
    </div>
  );
};

export default HeaderMenu;
