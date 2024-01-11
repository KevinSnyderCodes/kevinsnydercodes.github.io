import React from "react";

import Link from "next/link";

type Props = {
  name: string;
  href: string;
  onClick: () => void;
};

const HeaderMenuItem: React.FC<Props> = ({ name, href, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link href={href}>{name}</Link>
    </div>
  );
};

export default HeaderMenuItem;
