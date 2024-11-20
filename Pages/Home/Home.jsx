import React from "react";
import Hero from "./Hero";
import comp1 from "../../assets/comp1.png";
import comp2 from "../../assets/comp2.png";
import comp3 from "../../assets/comp3.png";
import comp4 from "../../assets/comp4.png";
import comp5 from "../../assets/comp5.png";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import Image from "next/image";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";

import ContactCta from "../../Components/ConnectCta";
import InsuranceOptions from "./InsuranceOptions";
import {
  ArrowForwardIos,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
import InsuranceInfo2 from "./InsuranceInfo2";
import Faq from "../../Components/Faq";
import InsuranceInfo3 from "./InsuranceInfo3";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import QuoteProcess from "./QuoteProcess";
import OurPartners from "./OurPartners";
import Guides from "./Guides";
import Stats from "@/Components/Stats";

const faqs = [
  {
    question: "  What is PolicyScanner, and how does it work?",
    answer: `PolicyScanner is an online life insurance brokerage platform that
            collaborates directly with top insurance companies in Canada to
            compare life insurance quotes and provide unbiased information to
            our customers. We specialize in providing quotes, including term
            life insurance, whole life insurance, critical illness insurance,
            and mortgage protection. What sets us apart from other brokerages is
            that we work directly with the top insurance companies in Canada.
            Unlike many other brokerages, we are not just a lead generation
            company. Our platform leverages the power of AI and advanced
            algorithms to ensure you get the best life insurance Canada has to
            offer. We are a proudly 100% Canadian company, headquartered in
            Kitchener Ontario, and registered under FSRA.`,
  },
  {
    question:
      "What makes PolicyScanner different from other online life insurance brokers?",
    answer: `PolicyScanner is an online life insurance brokerage platform that
          collaborates directly with top insurance companies in Canada to
          compare life insurance quotes and provide unbiased information to
          our customers. We specialize in providing quotes, including term
          life insurance, whole life insurance, critical illness insurance,
          and mortgage protection. What sets us apart from other brokerages is
          that we work directly with the top insurance companies in Canada.
          Unlike many other brokerages, we are not just a lead generation
          company. Our platform leverages the power of AI and advanced
          algorithms to ensure you get the best life insurance Canada has to
          offer. We are a proudly 100% Canadian company, headquartered in
          Kitchener Ontario, and registered under FSRA.`,
  },
  {
    question: "Does PolicyScanner work with insurance companies directly?",
    answer:
      "Yes, we work directly with leading insurance companies to ensure the best service.",
  },
  {
    question: "What types of insurance does PolicyScanner offer?",
    answer:
      "We offer term life insurance, whole life insurance, critical illness insurance, and mortgage protection.",
  },
  {
    question: "Why should I apply for insurance through PolicyScanner?",
    answer:
      "We provide a comprehensive comparison of quotes from multiple insurers to help you find the best fit.",
  },
  {
    question: "Does PolicyScanner charge any fees?",
    answer: "No, our services are free for users.",
  },
  {
    question: "If your service is free, how do you make money?",
    answer:
      "We earn a commission from insurance companies when you purchase a policy through us.",
  },
  {
    question: "Which insurance companies does PolicyScanner work with?",
    answer: "We partner with top-rated insurance companies across Canada.",
  },
  {
    question:
      "Why do I need separate life insurance if I already have one through my work?",
    answer:
      "Employer-provided life insurance may not be sufficient or may not cover you if you leave the job.",
  },
];
const reasons = [
  {
    id: "feat1",
    title: "Advance tools",
    description:
      "Our proprietary tools helps you to directly compare insurance policies instantly",
  },
  {
    id: "feat2",
    title: "Fully Independent",
    description:
      "We work for you - not biased to any insurer. This helps us to you the best insurance rates.",
  },
  {
    id: "feat3",
    title: "Safe and secure",
    description:
      "Your security is our priority. We never sell your data, and your information is protected at all times. ",
  },
  {
    id: "feat4",
    title: "Human Support",
    description:
      "Our licensed advisors are here to guide you at every step, handle any paperwork.",
  },
];
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <div className="w-full h-max flex justify-center items-center mt-[20px]">
        <div className="flex  w-[1000px] overflow-hidden min-h-[70vh] justify-start flex-col items-center gap-[40px] mb-[20px ] ">
          <h2 className="text-halfBlack text-[40px] font-semibold text-center ">
            Why trust PolicyScanner for buying life insurance?{" "}
          </h2>
          <div className="w-full h-max grid grid-cols-2 gap-x-[40px] gap-y-[40px]">
            {reasons.map((reason) => {
              return (
                <div
                  id={reason.id}
                  className="flex w-[480px] h-[200px] text-dg justify-center p-[15px] rounded-lg items-center gap-[20px] flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <h4 className="w-full flex justify-center items-center gap-[15px] font-[600] text-[28px] text-halfBlack">
                    {reason.id === "feat1" && (
                      <SettingsOutlined sx={{ fontSize: "30px" }} />
                    )}
                    {reason.id === "feat2" && (
                      <GppGoodOutlinedIcon sx={{ fontSize: "30px" }} />
                    )}
                    {reason.id === "feat3" && (
                      <HealthAndSafetyOutlinedIcon sx={{ fontSize: "30px" }} />
                    )}
                    {reason.id === "feat4" && (
                      <SupportAgentOutlinedIcon sx={{ fontSize: "30px" }} />
                    )}
                    {reason.title}
                  </h4>
                  <p className="text-center text-dg">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center   w-full  h-[156px] px-[20px]  bg-foreground2">
        <div className="text-[25px] font-[500] text-halfBlack w-[15rem] ">
          Featured In:
        </div>
        <div className="w-max flex justify-center items-center gap-[102px]">
          <Image
            src={comp1}
            alt="Fortnite"
            width={102}
            height={136}
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
            className=" w-max "
          />
          <Image
            src={comp2}
            alt="Fortnite"
            width={100}
            height={54}
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
          />
          <Image
            src={comp3}
            alt="Fortnite"
            width={146}
            height={25}
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
          />{" "}
          <Image
            src={comp4}
            alt="Fortnite"
            width={102}
            height={32}
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
          />{" "}
          <Image
            src={comp5}
            alt="Fortnite"
            width={69}
            height={69}
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
          />{" "}
        </div>
      </div>
      <QuoteProcess />
      {/* <Reviews /> */}
      {/* <InsuranceCalculator
        title={"Life Insurance Calculator"}
        paragraph={`Use our online insurance calculator to quickly determine how much coverage you need and get direct life insurance quotes for term life, whole life, or mortgage insurance from the top insurance companies in Canada..`}
      /> */}
      <InsuranceOptions />
      <ContactCta bg={"white"} />
      {/* <InsuranceTutorial /> */}
      {/* <div className="w-full h-max px-[80px] py-[50px] flex justify-center items-center gap-[80px] bg-foreground2">
        <Image
          src={whyUs}
          alt="Why Policy Scanner"
          width={300}
          height={300}
          objectFit="cover"
          objectPosition="center"
        />
        <div className="w-max h-[280px] flex justify-between items-start   flex-col">
          <h2 className="w-full font-bold text-[25px] text-left text-halfBlack">
            Why Choose PolicyScanner?
          </h2>
          <ul className="custom-list-bullets flex justify-start items-start w-full h-max flex-col gap-[10px]">
            <li className="text-[16px]">
              {" "}
              Licensed insurance experts calling from Canada
            </li>
            <li className="text-[16px]">
              We NEVER SELL your data we are not a lead generation company
            </li>
            <li className="text-[16px]">
              No pushy or multiple sales calls—only hear the facts
            </li>
            <li className="text-[16px]">
              100% Canadian company registered and regulated under FSRA
            </li>
          </ul>
          <button className="w-max h-[2.8rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
            Get Started
            <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[15px] bg-white text-black p-[5px]" />
          </button>
        </div>
      </div> */}
      {/* <InsuranceInformation /> */}
      {/* <InsuranceInfo2 /> */}
      {/* <InsuranceInfo3 /> */}
      <OurPartners />
      <Guides />
      <Faq faqs={faqs} />
    </div>
  );
};

export default Home;
