import { ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import ctaImg from "../assets/contact-cta.png";

const ConnectCta = ({ bg }) => {
  return (
    <section
      style={{ backgroundColor: bg }}
      className="w-full h-max px-[20px] md:px-[40px] lg:px-[80px] py-[30px] md:py-[50px] flex flex-col lg:flex-row justify-center items-center my-[80px] gap-[116px]"
    >
      <Image
        src={ctaImg}
        alt="Contact Us"
        width={513}
        height={440}
        objectFit="cover"
        objectPosition="center"
        loading="lazy"
        priority={false}
      />
      <div className="w-full lg:w-[40%] px-[10px] md:px-[20px] h-max flex justify-center items-start gap-[10px] md:gap-[20px] flex-col">
        <h2 className="w-full font-bold text-[28px] mtext-left text-halfBlack">
          Connect with an Advisor Now
        </h2>
        <h4 className="text-left text-dg">
          Get a free no-obligation quote. At PolicyScanner, we respect your
          privacy and don't make multiple follow-up calls.
        </h4>
        <button className="w-max h-[2.8rem] flex justify-center items-center bg-secondary text-nowrap px-[10px] md:px-[15px] py-[5px] gap-[10px] rounded-lg">
          Schedule a Call
          <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[15px] bg-white text-black p-[5px]" />
        </button>
      </div>
    </section>
  );
};

export default ConnectCta;
