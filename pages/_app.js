import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Farro } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const farro = Farro({
  subsets: ["latin"],
  weight: ["500", "400", "700"],
  variable: "--font-farro",
});
export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${farro.variable} font-sans relative`}>
        <Navbar handleOpen={handleOpen} />
        <div
          className={`md:hidden block absolute left-0 w-full h-auto z-20 bg-black/50 duration-300 ease-in-out transition-all ${
            isOpen ? "top-0" : "-top-[100%]"
          }`}
        >
          <div
            className="flex w-full justify-end layout pt-7"
            onClick={handleOpen}
          >
            <IoMdClose size={24} className="text-white " />
          </div>
          <ul className="flex-col flex items-center w-full gap-y-[31px] py-[20px]">
            <NavLinks href={"#home"} title={"Home"} />
            <NavLinks href={"#about"} title={"About"} />
            <NavLinks href={"#skill"} title={"Skill"} />
            <NavLinks href={"#project"} title={"Project"} />
          </ul>
        </div>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
