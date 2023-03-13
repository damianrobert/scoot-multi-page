import Image from "next/image";
import about_our_tech from "../../assets/images/about-our-tech.png";
import about_our_integrity from "../../assets/images/about-our-integrity.png";
import about_our_community from "../../assets/images/about-our-community.png";
import Jobs from "../jobs";

const WhyJoinUs = () => {
  return (
    <div className="mt-28">
      <div>
        <h1 className="text-darkNavy font-bold text-[2rem] leading-8 text-center">
          Why join us?
        </h1>
      </div>

      <div
        className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 
       lg:grid-rows-1 max-w-[90rem] mx-auto px-6"
      >
        <div className="w-fit mx-auto mt-20 flex flex-col items-center">
          <div className="relative w-fit ">
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

          <div className="w-[19.4375rem] md:w-[28.5625rem] lg:w-[20rem] mt-14">
            <p className="font-bold text-2xl text-darkNavy text-center">
              Our tech
            </p>
            <p
              className="font-lexend text-[0.9375rem] text-dimGrey text-center 
            mt-6 "
            >
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto mt-20 flex flex-col items-center">
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

          <div className="w-[19.4375rem] md:w-[28.5625rem] lg:w-[20rem] mx-auto mt-14">
            <p className="font-bold text-2xl text-darkNavy text-center">
              Our integrity
            </p>
            <p
              className="font-lexend text-[0.9375rem] text-dimGrey text-center 
            mt-6  mx-auto"
            >
              We are fully committed to deliver a great yet safe, sustainable
              micro-mobility experience in every city we serve.
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto mt-20 flex flex-col items-center">
          <div className="relative w-fit ">
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

          <div className="w-[19.4375rem] md:w-[28.5625rem] lg:w-[20rem] mx-auto mt-14">
            <p className="font-bold text-2xl text-darkNavy text-center">
              Our community
            </p>
            <p
              className="font-lexend text-[0.9375rem] text-dimGrey text-center 
             mt-6 mx-auto"
            >
              We support every community we serve. All workers are paid a living
              wage based on their location and are Scoot employees.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto my-20 px-5">
        {Jobs.map((job, index) => {
          return (
            <div
              className=" h-[11.3rem] md:h-32 bg-snow py-6 mb-6 flex flex-col justify-between
            md:flex-row items-center md:px-12"
            >
              <div className="w-[15.4375rem] md:m-0">
                <div>
                  <p
                    className="text-center text-[1.125rem] leading-[1.5rem] 
                  text-darkNavy font-bold tracking-[-0.803571px] md:text-left"
                  >
                    {job.position}
                  </p>
                </div>

                <div>
                  <p className="font-lexend text-center font-light md:text-left">
                    {job.location}
                  </p>
                </div>
              </div>

              <div
                className="w-[15.4375rem] h-14 flex items-center justify-center 
              text-white font-bold cursor-pointer bg-yellow hover:border-2 border-yellow
              hover:bg-transparent hover:text-yellow "
              >
                <p>Apply</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyJoinUs;
