import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { BiLogoWhatsapp, BiLogoLinkedin } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="layout bg-black text-white flex justify-between flex-wrap h-[80px] items-center">
      <div className="flex gap-x-2 items-center ">
        <MdAlternateEmail />
        <a href="mailto:evan.kusyanto@students.amikom.ac.id">
          evan.kusyanto@students.amikom.ac.id
        </a>
      </div>
      <div className="flex gap-x-2 items-center">
        <BiLogoWhatsapp />
        <a href="https://wa.wizard.id/f5ac90">089670137890</a>
      </div>
      <div className="flex gap-x-2 items-center">
        <BiLogoLinkedin />
        <a href="">Muhammad Evan Kusyanto</a>
      </div>
    </div>
  );
};

export default Footer;
