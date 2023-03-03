import Link from "next/link";
import Image from "next/image";
import about_our_tech from "../../assets/images/about-our-tech.png";
import about_our_integrity from "../../assets/images/about-our-integrity.png";
import about_our_community from "../../assets/images/about-our-community.png";

function OurValues() {
  return (
    <div className="mt-28">
      <div>
        <h1 className="text-darkNavy font-bold text-[2rem] leading-8 text-center">
          Our Values
        </h1>
      </div>

      <div className="w-fit mx-auto mt-20">
        <div className="relative w-fit">
          <Image src={about_our_tech} alt="/" />
          <div className="w-full absolute -bottom-10">
            <div
              className="w-24 h-24 rounded-[50%] bg-yellow mx-auto flex justify-center
            items-center"
            >
              <p className="text-darkNavy font-bold text-2xl tracking-[-1.07143px]">
                01
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[19.4375rem] md:w-[28.5625rem] mx-auto mt-14">
        <p className="font-bold text-2xl text-darkNavy text-center">Our tech</p>
        <p className="font-lexend text-[0.9375rem] text-dimGrey text-center mt-6">
          We’re using cutting edge technology to drive accessible urban
          transportation forward. Our fully electric scooters are a joy to ride!
        </p>
      </div>

      <div className="w-fit mx-auto mt-20">
        <div className="relative w-fit">
          <Image src={about_our_integrity} alt="/" />
          <div className="w-full absolute -bottom-10">
            <div
              className="w-24 h-24 rounded-[50%] bg-yellow mx-auto flex justify-center
            items-center"
            >
              <p className="text-darkNavy font-bold text-2xl tracking-[-1.07143px]">
                02
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[19.4375rem] md:w-[28.5625rem] mx-auto mt-14">
        <p className="font-bold text-2xl text-darkNavy text-center">
          Our integrity
        </p>
        <p className="font-lexend text-[0.9375rem] text-dimGrey text-center mt-6">
          We are fully committed to deliver a great yet safe, sustainable
          micro-mobility experience in every city we serve.
        </p>
      </div>

      <div className="w-fit mx-auto mt-20">
        <div className="relative w-fit">
          <Image src={about_our_community} alt="/" />
          <div className="w-full absolute -bottom-10">
            <div
              className="w-24 h-24 rounded-[50%] bg-yellow mx-auto flex justify-center
            items-center"
            >
              <p className="text-darkNavy font-bold text-2xl tracking-[-1.07143px]">
                03
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[19.4375rem] md:w-[28.5625rem] mx-auto mt-14">
        <p className="font-bold text-2xl text-darkNavy text-center">
          Our community
        </p>
        <p className="font-lexend text-[0.9375rem] text-dimGrey text-center mt-6">
          We support every community we serve. All workers are paid a living
          wage based on their location and are Scoot employees.
        </p>
      </div>
    </div>
  );
}

export default OurValues;
