import { useState } from "react";
import Link from "next/link";
import hamburger from "../assets/images/hamburger_menu.svg";
import logo from "../assets/images/scoot.svg";
import large_logo from "../assets/images/scoot-lg.svg";
import Image from "next/image";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="px-3 py-5">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div
          className="w-5 h-4 md:hidden cursor-pointer relative z-30"
          onClick={handleMenu}
        >
          <div
            className={
              menu
                ? `absolute top-[6px] w-5 h-1 bg-yellow rotate-45 duration-500`
                : `absolute w-5 h-1 bg-yellow duration-500 `
            }
          ></div>
          <div
            className={
              menu
                ? `absolute top-[6px] right-[100px] w-5 h-1 bg-yellow duration-500 translate-x-5 `
                : ` absolute top-[6px] left-0 w-5 h-1 bg-yellow duration-500 `
            }
          ></div>
          <div
            className={
              menu
                ? `absolute top-[6px] w-5 h-1 bg-yellow -rotate-45 duration-500 `
                : `absolute top-[12px] w-5 h-1 bg-yellow duration-500 `
            }
          ></div>
        </div>

        <Link href="/Home" className="w-fit mx-auto md:m-0 cursor-pointer">
          <Image className="md:hidden" src={logo} alt="logo" />
          <Image
            className="hidden md:inline-block"
            src={large_logo}
            alt="logo"
          />
        </Link>

        <div className="hidden md:inline-block w-fit mx-auto">
          <ul>
            <Link
              href="/About"
              className="inline-block text-base font-bold text-dimGrey 
          mr-8 hover:text-yellow cursor-pointer"
            >
              About
            </Link>
            <li
              className="inline-block text-base font-bold text-dimGrey 
          mr-8 hover:text-yellow cursor-pointer"
            >
              Location
            </li>
            <Link
              href="/Careers"
              className="inline-block text-base font-bold text-dimGrey 
          mr-8 hover:text-yellow cursor-pointer"
            >
              Careers
            </Link>
          </ul>
        </div>

        <div
          className="hidden md:flex justify-center items-center text-base font-bold
         text-white w-48 h-14 bg-yellow hover:border-2 hover:border-yellow 
         hover:text-yellow hover:bg-white cursor-pointer"
        >
          <p className=" ">Get Scootin</p>
        </div>

        {/*MOBILE SIDE MENU*/}
        <div
          className={
            menu
              ? `absolute left-0 top-[3.8125rem] w-64 min-h-screen bg-darkNavy px-4
               duration-500 ease-in-out md:hidden z-[3]`
              : `absolute left-[-400%] top-[3.8125rem] w-64 min-h-screen bg-darkNavy px-4
               duration-500 ease-in-out md:hidden z-[3]`
          }
        >
          <ul className="mt-12">
            <Link
              href="/About"
              className="text-lightGrey text-[1.125rem] font-bold my-4"
            >
              About
            </Link>
            <li className="text-lightGrey text-[1.125rem] font-bold my-4">
              Location
            </li>
            <li className="text-lightGrey text-[1.125rem] font-bold my-4">
              Careers
            </li>
          </ul>

          <div
            className="flex justify-center items-center w-48 h-14 bg-yellow
           text-snow font-bold absolute bottom-20"
          >
            <p>Get scootin</p>
          </div>
        </div>
        <div
          className={
            menu
              ? `absolute w-full min-h-screen left-0 top-[3.8125rem] bg-[#000000b1]
               z-[1] md:hidden`
              : `hidden`
          }
        ></div>
      </div>
    </div>
  );
}

export default Navbar;
