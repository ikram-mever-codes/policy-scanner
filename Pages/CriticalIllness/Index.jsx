import React from "react";
import Hero from "./Hero";
import Image from "next/image";
import homextr1 from "../../assets/home-extra-1.png";
import homextr2 from "../../assets/home-extra-2.png";
import CriticalInfo from "./CriticalInfo";
import CriticalInfo2 from "./CriticalInfo2";
import ConnectCta from "@/Components/ConnectCta";
import InsuranceCalculator from "@/Components/InsuranceCalculator";
import CriticalInsuranceFaq from "./CriticalInsuranceFaq";
import CriticalTable from "./CriticalTable";
import CriticalInfo3 from "./CriticalInfo3";
import CriticalInfo4 from "./CriticalInfo4";
import { ArrowForwardIos } from "@mui/icons-material";
import CriticalInfo5 from "./CriticalInfo5";
import CriticalInfo6 from "./CriticalInfo6";
import Stats from "@/Components/Stats";
import NewCta from "@/Components/NewCta";

const Index = () => {
  return (
    <>
      <Hero />
      <Stats />
      <CriticalInfo />
      <CriticalInfo2 />
      <CriticalInfo3 />
      <div className="my-[40px]">
        <NewCta />
      </div>
      <CriticalTable />
      <InsuranceCalculator
        title={"Critical illness Calculator"}
        paragraph={
          "Use our online insurance calculator to quickly determine how much coverage you need and get direct life insurance quotes for term life, whole life, or mortgage insurance from the top insurance companies in Canada."
        }
      />
      <CriticalInsuranceFaq />
      <CriticalInfo5 />
      <CriticalInfo4 />
      <div className="w-full flex justify-center items-center gap-[3rem] mb-0 my-[40px]">
        <div>
          <h4 className="text-[25px] font-bold text-primary text-left">
            Save Time, Save Money{" "}
          </h4>
          <p className="text-left mt-[10px]">
            Compare Life Insurance Quotes Instantly.{" "}
          </p>
        </div>
        <div className="whole-life-divider"></div>
        <div>
          <button className="w-max h-[2.8rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
            Get Instant Quotes{" "}
            <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[15px] bg-white text-black p-[5px]" />
          </button>{" "}
        </div>
      </div>
      <CriticalInfo6 />
    </>
  );
};

export default Index;
