import Link from "next/link";
import React from "react";

type Props = React.ComponentProps<typeof Link>;

const TextLink: React.FC<Props> = (props) => {
  return (
    <Link {...props} className="underline hover:text-gray-400">
      {props.children}
    </Link>
  );
};

export default TextLink;
