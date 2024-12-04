import Image from "next/image";
import React from "react";
import home1 from "../../assets/home-asset-3.png";
import ellipseImage from "../../assets/ellipse1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        className="w-full h-[650px] hero-bg  min-w-screen 
        overflow-hidden bg-foreground2   "
        style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
      >
        <div className="flex justify-end   items-center    w-full h-full  ">
          <div className="w-max  h-full  relative left-[120px] flex justify-start py-[70px]  gap-[1rem]   items-center flex-col ">
            <div className="w-full h-max flex justify-end items-center flex-col">
              <h1 className="text-[55px] font-extrabold  leading-[4.5rem] text-left text-halfBlack">
                Let us do the comparison. <br /> You enjoy the savings.
              </h1>
              <p className="w-full text-halfBlack text-[17px] text-left my-[10px]">
                Compare Canada’s best life Insurance rates instantly
              </p>
            </div>

            <div className="w-max self-start grid grid-cols-2  gap-x-[2rem] gap-y-[1rem] mt-[1.5rem] justify-center items-center">
              {[
                "Term Life",
                "Whole Life",
                "Mortgage Insurance",
                "Critical Illness",
              ].map((item) => (
                <Link href="/quote-form" key={item}>
                  <div className="relative group flex justify-center items-center w-[260px] h-[85px] shadow-2xl text-halfBlack  rounded-2xl ease-in-out  hover:bg-primary2 hover:text-white   bg-white border border-solid border-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden">
                    <h3 className="relative text-center text-[18px] font-normal z-10">
                      {item}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-start items-end">
          <Image
            src={home1}
            alt="Policy Scanner Insurance"
            height={466}
            width={492}
            className="object-fit relative bottom-0  left-[150px]  lg:left-[200px] 4xl:left-[280px] object-center"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
