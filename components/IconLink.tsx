import Link from "next/link";
import React from "react";
import IconButton from "./IconButton";

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
