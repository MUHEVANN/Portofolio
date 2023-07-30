import Image from "next/image";
import React from "react";
import profile from "../public/profile.jpg";
const Profile = () => {
  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-2 items-center place-content-center h-auto py-[80px] layout gap-y-[35px]"
      id="profile"
    >
      <div className="col-span-1 flex justify-center md:justify-center md:pr-[35px]">
        <div className="w-[500px] h-[500px] ">
          <Image
            src={profile}
            alt="profile-evan"
            className="w-full h-full bg-cover object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-y-3 col-span-1">
        <div>
          <h1 className="text-[20px]">
            <span className="text-[28px] font-bold">Hello,</span>
            <br /> I am Full Stack Developer
          </h1>
        </div>
        <div>
          <p className="lg:max-w-[544px] text-[16px] text-[#4F4F4F]">
            Saya seorang web developer yang sudah memiliki pengalaman hampir 1.5
            tahun. Saat ini saya masih berstatus mahasiswa di universitas Amikom
            Yogyakarta. Saya telah mengembangkan keterampilan dan pengetahuan
            mendalam dalam beberapa teknologi utama, termasuk Laravel dan React
            JS.
          </p>
        </div>
        <div className="bg-black h-[2px] max-w-[700px]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[600px] gap-y-3">
          <h2 className="col-span-1 text-[16px]">
            Nama : Muhammad Evan Kusyanto
          </h2>
          <h2 className="col-span-1 flex ">
            Email&nbsp;:<a href="">&nbsp;evan.kusyanto@students.amikom.ac.id</a>
          </h2>
          <h2 className="col-span-1">Umur : 20 </h2>
          <h2 className="col-span-1">
            Alamat : Sendangrejo, Karanganom, Klaten Utara, Jawa Tengah
          </h2>
        </div>
        <div>
          <button className="px-6 py-2 bg-black text-white rounded-full">
            <a href="/download/cv_evan.pdf" download={true}>
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
