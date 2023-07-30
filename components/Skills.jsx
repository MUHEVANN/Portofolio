import React from "react";

const Skills = () => {
  const Skill = ({ title, rate, rateW }) => {
    return (
      <div className="p-2 flex flex-col gap-y-2" id="skill">
        <div className="flex w-full justify-between">
          <h1>{title}</h1>
          <h2>{rate}%</h2>
        </div>
        <div className="w-full h-[5px] bg-[#C2C2C2] rounded-full">
          <div className={`${rateW} h-[5px] bg-black rounded-full`}></div>
        </div>
      </div>
    );
  };
  return (
    <div className="py-5 md:py-0 min-h-[384px] layout flex flex-col gap-y-[24px] bg-[#F3F3F3] justify-center ">
      <h1 className="text-[28px] font-bold max-w-[615px]">
        Skill yang saya miliki sebagai Full Stack Developer saat ini
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Skill title={"Vanila CSS"} rate={"80"} rateW={"w-[80%]"} />
        <Skill title={"Laravel"} rate={"50"} rateW={"w-[50%]"} />
        <Skill title={"Tailwind"} rate={"90"} rateW={"w-[90%]"} />
        <Skill title={"CodeIgniter"} rate={"40"} rateW={"w-[40%]"} />
        <Skill title={"Bootstrap"} rate={"90"} rateW={"w-[90%]"} />
        <Skill title={"React JS"} rate={"60"} rateW={"w-[60%]"} />
      </div>
    </div>
  );
};

export default Skills;
