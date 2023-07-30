import Image from "next/image";
import React from "react";
import potografer from "../public/potografer.svg";
import blog from "../public/blog.svg";
import kamidancer from "../public/kamidancer.svg";
const Project = () => {
  const CardProject = ({ image, title, desc }) => {
    return (
      <div className="flex-col flex col-span-1 p-2" id="project">
        <div className="w-full h-[350px]">
          <Image
            src={image}
            alt="potografer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-[20px]">{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="layout my-[60px]">
      <h1 className="text-center font-bold mt-5  text-[28px] ">Project</h1>
      <div className="grid lg:grid-cols-3">
        <CardProject
          desc={
            "Portofolio untuk seorang fotografer yang ingin melamar sebuah Pekerjaan"
          }
          title={"Portofolio Porografer"}
          image={potografer}
        />
        <CardProject
          desc={
            "Membuat website dinamis menggunakan laravel dari final project development framework"
          }
          title={"Blog"}
          image={blog}
        />
        <CardProject
          desc={
            "website dinamis landing page dan blog (laravel + React js) untuk client kamidancer sebuah produk untuk pemutih gigi"
          }
          title={"Landing Page dan Blog (On Progress)"}
          image={kamidancer}
        />
      </div>
    </div>
  );
};

export default Project;
