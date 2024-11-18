"use client";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import prov1 from "../../assets/prov1.png";
import prov2 from "../assets/prov2.png";
import prov3 from "../assets/prov3.png";
import prov4 from "../assets/prov4.png";
// import prov5 from "../../assets/prov5.png";

import Image from "next/image";
const providers = [prov2, prov3, prov3, prov4, prov3];

const InsuranceProviders = () => {
  return (
    <section className="w-full h-max  px-[60px] py-[60px] flex justify-start mt-[20px] items-center gap-[80px] flex-col">
      <div className="w-full h-max flex justify-start flex-col items-center gap-[30px]">
        <h2 className="text-halfBlack text-[30px] font-semibold text-center ">
          Compare And Buy Life Insurance From Top Canadian Insurers{" "}
        </h2>

        <div className="w-max min-h-[5rem] flex justify-center items-center border border-solid border-opposite py-[2rem] px-[20px] rounded-xl  gap-[30px]">
          <button className="w-[40px] h-[40px] p-[15px] rounded-full bg-white border border-solid border-halfBlack text-halfBlack flex justify-center items-center">
            <ArrowBackIcon className="text-[18px]" />
          </button>
          <div className="w-full h-max flex justify-center items-center gap-[50px]">
            {providers.map((provider) => {
              return (
                <Image
                  src={provider}
                  alt="Provider Company Image"
                  objectFit="cover"
                  objectPosition="center"
                  loading="lazy"
                  className="h-[35px] w-max "
                />
              );
            })}
          </div>
          <button className="w-[40px] h-[40px] p-[15px] rounded-full bg-halfBlack text-white flex justify-center items-center">
            <ArrowForwardIcon className="text-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceProviders;
