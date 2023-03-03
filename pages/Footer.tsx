import Image from "next/image";
import Link from "next/link";
import sm_app_store_bttn from "../assets/images/sm-app-store-bttn.svg";
import lg_app_store_bttn from "../assets/images/lg-app-store-bttn.svg";
import sm_google_play_bttn from "../assets/images/sm-google-play-bttn.svg";
import lg_google_play_bttn from "../assets/images/lg-google-play-bttn.svg";
import footer_semi_circles from "../assets/images/footer-semi-circles.svg";
import footer_logo from "../assets/images/footer-scoot-logo.svg";
import yellow_facebook from "../assets/images/yellow-facebook.svg";
import yellow_twitter from "../assets/images/yellow-twitter.svg";
import yellow_instagram from "../assets/images/yellow-instagram.svg";

function Footer() {
  return (
    <div>
      <div className="relative bg-darkNavy pt-20 ">
        <div className="absolute right-0 bottom-0 min-w-[62.375rem]">
          <Image src={footer_semi_circles} alt="/" />
        </div>
        <div className="relative max-w-[90rem] mx-auto lg:pb-24">
          <div
            className="w-[19.4375rem] md:w-[28.5625rem] lg:w-full mx-auto lg:m-0 lg:px-16
        lg:flex lg:justify-between "
          >
            <p
              className="text-[2rem] lg:w-[25.9375rem] lg:h-24 md:text-5xl leading-8 
            font-bold text-center text-white lg:text-left lg:tracking-[-2.14286px] "
            >
              Sign up and scoot off today
            </p>

            <div
              className="w-[16rem] mx-auto flex justify-between mt-10 pb-10
           lg:hidden"
            >
              <Image src={sm_app_store_bttn} alt="/" />
              <Image src={sm_google_play_bttn} alt="/" />
            </div>

            <div className="hidden lg:flex min-w-[22.4375rem] justify-between">
              <Image src={lg_app_store_bttn} alt="/" />
              <Image src={lg_google_play_bttn} alt="/" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#333A44] py-16 md:py-8 md:px-5 md:flex 
      md:justify-between"
      >
        <div className="w-fit mx-auto md:m-0">
          <Image src={footer_logo} alt="/" />
        </div>

        <div
          className="w-fit md:w-[15.5625rem] h-28 mx-auto mt-16 flex flex-col justify-between
        md:m-0 md:flex-row md:h-auto"
        >
          <Link
            href="/About"
            className="text-dimGrey text-lg font-bold cursor-pointer 
          hover:text-yellow text-center"
          >
            About
          </Link>
          <p
            className="text-dimGrey text-lg font-bold cursor-pointer 
          hover:text-yellow text-center"
          >
            Location
          </p>
          <Link
            href="/Careers"
            className="text-dimGrey text-lg font-bold cursor-pointer 
          hover:text-yellow text-center"
          >
            Careers
          </Link>
        </div>

        <div
          className="w-32 mx-auto flex justify-between items-center mt-20 
        md:m-0"
        >
          <div className="cursor-pointer">
            <Image src={yellow_facebook} alt="/" />
          </div>

          <div className="cursor-pointer">
            <Image src={yellow_twitter} alt="/" />
          </div>

          <div className="cursor-pointer">
            <Image src={yellow_instagram} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
