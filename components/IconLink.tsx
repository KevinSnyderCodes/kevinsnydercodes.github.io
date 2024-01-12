import React from "react";

import Link from "next/link";

import IconButton from "@/components/IconButton";

type Props = React.ComponentProps<typeof IconButton> & {
  href: string;
};

const IconLink: React.FC<Props> = ({ href, ...props }) => {
  return (
    <Link href={href}>
      <IconButton {...props} />
    </Link>
  );
};

export default IconLink;
