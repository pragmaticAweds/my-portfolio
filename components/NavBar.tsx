import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { label: "about me", to: "#about" },
    { label: "experience", to: "#exp" },
    { label: "work", to: "#works" },
    { label: "blog", to: "" },
    { label: "contact", to: "" },
  ];
  return (
    <nav>
      <div className="nav max-w-[90%] w-full mx-auto">
        <span className="font-[satisfy]">PragmaticAweds</span>
        <div className="nav-links">
          {links.map((link, i) => (
            <Link key={"nav-link" + i} href={link.to} className="nav-link">
              <span className="font-[satisfy] mt-[0.2rem] text-sm">
                {"0" + (i + 1) + "."}
              </span>
              <span className="capitalize">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
