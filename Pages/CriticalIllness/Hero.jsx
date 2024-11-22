import Image from "next/image";
import React from "react";
import wholeLife2 from "../../assets/home-asset-3.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="w-full h-[650px] hero-bg  min-w-screen overflow-hidden bg-foreground2"
      style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
    >
      <div className="flex justify-end   items-end   w-full h-full  ">
        <div className="w-max h-full  flex justify-center pb-[80px] gap-[2rem]   items-center flex-col ">
          <div className="w-full h-max flex justify-end items-start flex-col gap-[1rem]">
            <h1 className="text-[45px] font-extrabold  text-left text-halfBlack">
              Compare and Buy <br />
              Critical Illness Insurance{" "}
            </h1>
            <p className="w-full text-halfBlack text-[20px] font-semibold text-left ">
              Save time, Save money{" "}
            </p>
          </div>
          <Link
            href="#"
            className="relative group flex justify-center items-center text-[18px] w-full h-[5rem] shadow-2xl text-halfBlack rounded-2xl bg-white border border-solid hover:text-white border-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary scale-x-0 origin-bottom-left transition-transform duration-300 group-hover:scale-x-100"></div>
            <span className="relative z-10">Compare CI Insurance</span>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex justify-start items-end">
        <Image
          src={wholeLife2}
          alt="Policy Scanner Insurance"
          height={510}
          width={500}
          className="object-fit relative bottom-0  left-[130px]  lg:left-[150px] 4xl:left-[200px] object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
