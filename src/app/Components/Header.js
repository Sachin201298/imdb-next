import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { AiFillExclamationCircle } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between p-4 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" adress="/" Icon={AiFillHome} />
        <MenuItem
          title="About"
          adress="/about"
          Icon={AiFillExclamationCircle}
        />
      </div>
      <Link href={'/'} className="flex gap-2 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          Imdb
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
