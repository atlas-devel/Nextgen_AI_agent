import React from "react";
import type { NavLinks } from "../../@types/Hero-types";
import { Link } from "react-router-dom";
import type { JSX } from "react";

const navigationLinks: NavLinks[] = [
  { name: "Home", path: "/" },
  { name: "chat", path: "/" },
  { name: "generate", path: "/" },
  { name: "about", path: "/" },
  { name: "faq", path: "/" },
];

const Navigation = (): JSX.Element => {
  return (
    <header>
      <nav className="flex justify-between items-center mt-2 border-b-2 border-white/20 pb-3">
        <div className="font-bold text-2xl bg-linear-30 from-blue-100 to-white/20 bg-clip-text text-transparent">
          <span>NextGen</span>
          <span>AI</span>
        </div>
        <div>
          <ul className="sm:flex hidden items-center gap-6">
            {navigationLinks.map(
              (nav: NavLinks, index: number): JSX.Element => (
                <li
                  key={index}
                  className="capitalize cursor-pointer hover:text-blue-100 duration-300 "
                >
                  {nav.name}
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <Link
            to="/login"
            className="rounded-full border px-8 py-2 hover:bg-white hover:text-black duration-300 cursor-pointer"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
