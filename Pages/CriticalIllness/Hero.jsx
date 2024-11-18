import Image from "next/image";
import React from "react";
import wholeLife2 from "../../assets/whole-life-2.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="w-full h-[88vh] min-w-screen justify-between bg-foreground2"
      style={{ display: "grid", gridTemplateColumns: "50% auto" }}
    >
      <div className="flex justify-end items-center  w-full h-full">
        <div className="w-max h-full flex justify-center gap-[1rem]   items-center flex-col py-[5rem]">
          <div className="w-full h-max flex justify-start items-start flex-col">
            <h1 className="text-[45px] font-extrabold  text-left text-halfBlack">
              Compare and Buy <br />
              Critical Illness Insurance{" "}
            </h1>
            <p className="w-full text-halfBlack text-[18px] font-semibold text-left my-[10px]">
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
      <Image
        src={wholeLife2}
        alt="Policy Scanner Insurance"
        width={616}
        height={600}
        className=" object-cover object-center w-[50vw] h-[88vh]"
      />
    </section>
  );
};

export default Hero;
