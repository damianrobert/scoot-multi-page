import Image from "next/image";
import hero_top_sm_img from "../../assets/images/hero-top-sm-img.png";
import hero_top_md_img from "../../assets/images/hero-top-md-img.png";
import hero_mid_sm_img from "../../assets/images/hero-mid-sm-img.png";
import hero_mid_md_img from "../../assets/images/hero-mid-md-img.png";
import hero_bottom_sm_img from "../../assets/images/hero-bottom-sm-img.png";
import hero_bottom_md_img from "../../assets/images/hero-bottom-md-img.png";
import hero_sm_left_arrow from "../../assets/images/hero-sm-left-arrow.svg";
import hero_md_left_arrow from "../../assets/images/hero-md-left-arrow.svg";
import hero_md_short_left_arrow from "../../assets/images/hero-md-short-left-arrow.svg";
import hero_sm_right_arrow from "../../assets/images/hero-sm-right-arrow.svg";
import hero_md_right_arrow from "../../assets/images/hero-md-right-arrow.svg";
import hero_semi_circle from "../../assets/images/hero-semi-circle.svg";

function HomeHero() {
  return (
    <div
      className="relative max-w-[23.4375rem] md:max-w-[48rem] lg:max-w-[90rem] 
    mx-auto mt-10 mb-16"
    >
      <div className="flex flex-col lg:flex-row-reverse mt-28 lg:mt-40">
        <div className="relative w-full ">
          <div className="w-fit mx-auto rounded-[50%] overflow-hidden md:hidden">
            <Image src={hero_top_sm_img} alt="/" />
          </div>

          <div className="hidden md:block w-fit mx-auto  rounded-[50%] overflow-hidden">
            <Image src={hero_top_md_img} alt="/" />
          </div>

          <div className="absolute right-0 bottom-2 max-w-fit md:hidden">
            <Image className="" src={hero_sm_left_arrow} alt="/" />
          </div>

          <div
            className="hidden md:block absolute right-0 bottom-2 max-w-fit
          "
          >
            <Image className="" src={hero_md_left_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute right-0 top-0 z-[-1]">
            <Image src={hero_semi_circle} alt="/" />
          </div>
        </div>

        <div
          className="max-w-[20rem] md:max-w-[35.8125rem] lg:max-w-[27.8125rem] mx-auto mt-8
        lg:ml-40"
        >
          <p
            className="text-[2rem] md:text-5xl leading-[2rem] font-bold text-center 
        text-darkNavy lg:text-left"
          >
            Easy to use riding telemetry
          </p>

          <p
            className="font-lexend text-base font-light text-dimGrey text-center mt-6
           lg:text-left"
          >
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app.
          </p>

          <div
            className="flex justify-center items-center w-44 h-14 bg-yellow mx-auto
        mt-8 lg:mx-0 hover:border-2 font-bold text-white hover:border-yellow
         hover:text-yellow hover:bg-transparent cursor-pointer"
          >
            <p>Learn more</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-28 lg:mt-40">
        <div className="relative w-full">
          <div className="w-fit mx-auto rounded-[50%] overflow-hidden md:hidden">
            <Image src={hero_mid_sm_img} alt="/" />
          </div>

          <div className="hidden md:block w-fit mx-auto rounded-[50%] overflow-hidden">
            <Image src={hero_mid_md_img} alt="/" />
          </div>

          <div className="absolute left-0 top-2 max-w-fit md:hidden">
            <Image className="" src={hero_sm_right_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute left-0 top-2 max-w-fit">
            <Image className="" src={hero_md_right_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute left-0 top-0 rotate-180 z-[-1]">
            <Image src={hero_semi_circle} alt="/" />
          </div>
        </div>
        <div
          className="max-w-[20rem] md:max-w-[35.8125rem] lg:max-w-[27.8125rem] mx-auto mt-8
        lg:mr-40"
        >
          <p
            className="text-[2rem] md:text-5xl leading-[2rem] font-bold text-center 
        text-darkNavy lg:text-left"
          >
            Coming to a city near you
          </p>

          <p
            className="font-lexend text-base font-light text-dimGrey text-center mt-6
           lg:text-left"
          >
            Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year.
          </p>

          <div
            className="flex justify-center items-center w-44 h-14 bg-yellow mx-auto
        mt-8 lg:mx-0 hover:border-2 font-bold text-white hover:border-yellow
         hover:text-yellow hover:bg-transparent cursor-pointer"
          >
            <p>Learn more</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse mt-28 lg:mt-40">
        <div className="relative w-full">
          <div className="w-fit mx-auto rounded-[50%] overflow-hidden md:hidden">
            <Image src={hero_bottom_sm_img} alt="/" />
          </div>

          <div className="hidden md:block w-fit mx-auto rounded-[50%] overflow-hidden">
            <Image src={hero_bottom_md_img} alt="/" />
          </div>

          <div className="absolute right-0 bottom-2 max-w-fit md:hidden">
            <Image className="" src={hero_sm_left_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute right-0 top-2 max-w-fit">
            <Image className="" src={hero_md_short_left_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute right-0 -top-16 z-[-1]">
            <Image src={hero_semi_circle} alt="/" />
          </div>
        </div>
        <div
          className="max-w-[20rem] md:max-w-[35.8125rem] lg:max-w-[27.8125rem] mx-auto mt-8
        lg:ml-40"
        >
          <p
            className="text-[2rem] md:text-5xl leading-[2rem] font-bold text-center 
        text-darkNavy lg:text-left"
          >
            Zero hassle payments
          </p>

          <p
            className="font-lexend text-base font-light text-dimGrey text-center mt-6
          lg:text-left"
          >
            Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month.
          </p>

          <div
            className="flex justify-center items-center w-44 h-14 bg-yellow mx-auto
        mt-8 lg:mx-0 hover:border-2 font-bold text-white hover:border-yellow
         hover:text-yellow hover:bg-transparent cursor-pointer"
          >
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
