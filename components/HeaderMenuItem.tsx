import React from "react";

import Link from "next/link";

type Props = {
  name: string;
  href: string;
  onClick: () => void;
};

const HeaderMenuItem: React.FC<Props> = ({ name, href, onClick }) => {
  return (
    <Link href={href}>
      <div onClick={onClick} className="pl-4 pt-1 pb-1 hover:bg-gray-100">
        {name}
      </div>
    </Link>
  );
};

export default HeaderMenuItem;
