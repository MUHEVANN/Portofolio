import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ handleOpen }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const NavLinks = ({ href, title }) => {
    return (
      <li>
        <a href={href} className="nav-link">
          {title}
        </a>
      </li>
    );
  };

  return (
    <>
      <div
        className={`flex justify-between layout h-[80px] items-center z-10 fixed top-0 left-0 w-full duration-300 ease-in-out transition-all ${
          isScroll ? "bg-black/50" : ""
        }`}
      >
        <div>
          <h1 className="text-[28px] font-bold text-white">Evan</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-x-[31px]">
            <NavLinks href={"#home"} title={"Home"} />
            <NavLinks href={"#profile"} title={"About"} />
            <NavLinks href={"#skill"} title={"Skill"} />
            <NavLinks href={"#project"} title={"Project"} />
          </ul>
        </div>
        {/* menu */}
        <div className="md:hidden flex text-white" onClick={handleOpen}>
          <FiMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
