import React from "react";
import {
  BiLogoWhatsapp,
  BiLogoLinkedinSquare,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const Info = () => {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full relative">
        <div className="top-[45%] left-[2%] absolute text-white flex flex-col gap-y-[10px]">
          <a href="https://web.facebook.com/profile.php?id=100071844109152">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com/?hl=en">
            <BiLogoInstagramAlt size={24} />
          </a>
          <a href="https://www.linkedin.com/in/evan-kusyanto-80a43a25b/">
            <BiLogoLinkedinSquare size={24} />
          </a>
          <a href="https://wa.wizard.id/f5ac90">
            <BiLogoWhatsapp size={24} />
          </a>
          <a href="https://github.com/MUHEVANN">
            <AiFillGithub size={24} />
          </a>
        </div>

        {/* text */}
        <div className="w-full h-full grid place-content-center">
          <h1 className="text-[20px] md:text-[28px] font-medium text-white text-center">
            Hello
          </h1>
          <div className="flex flex-col gap-y-[10px] items-center">
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-white ">
              I Am <span className="font-bold">Web Developer</span>
            </h1>
            <div className="flex items-center w-full justify-between">
              <div className="line"></div>
              <h3 className="text-[16px] md:text-[20px] text-white">
                Full Stack Developer
              </h3>
              <div className="line"></div>
            </div>
            <div>
              <button className="text-[14px] md:text-[16px] px-5 md:px-7 py-[10px] md:py-[14px] bg-white rounded-full">
                <a href="mailto:evan.kusyanto@students.amikom.ac.id">Hire me</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
