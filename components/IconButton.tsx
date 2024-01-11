import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

type Props = React.ComponentProps<typeof FontAwesomeIcon>;

const IconButton: React.FC<Props> = (props) => {
  return (
    <FontAwesomeIcon
      {...props}
      className={classNames(
        "w-8 h-8 p-4 hover:cursor-pointer",
        props.className
      )}
    />
  );
};

export default IconButton;
