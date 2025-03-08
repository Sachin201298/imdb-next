import Link from "next/link";
import React from "react";

const MenuItem = ({ title, adress, Icon }) => {
  return (
    <Link href={adress}>
      <Icon className="text-2xl sm:hidden"/>
      <p className="uppercase hidden sm:block">{title}</p>
    </Link>
  );
};

export default MenuItem;
