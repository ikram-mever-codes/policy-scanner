import React from "react";
import Hero from "./Hero";
import InsuranceProviders from "@/Components/InsuranceProviders";
import ConnectCta from "@/Components/ConnectCta";
import InsuranceCalculator from "@/Components/InsuranceCalculator";
import Faq from "@/Components/Faq";
import QuotePanel from "../../Components/QuotePanel";
import WholeLifeInfo from "./WholeLifeInfo";
import WholeLifeInofo2 from "./WholeLifeInofo2";
import CanadaLife from "../../assets/canada-life.png";
import WholeLifeFaq from "./WholeLifeFaq";
import WholeLifeInfo3 from "./WholeLifeInfo3";
import WholeLifeInfo4 from "./WholeLifeInfo4";
import WholeLifeInfo5 from "./WholeLifeInfo5";
import homextr1 from "../../assets/home-extra-1.png";
import homextr2 from "../../assets/home-extra-2.png";
import Image from "next/image";
import Stats from "@/Components/Stats";
import NewCta from "@/Components/NewCta";
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
const Index = () => {
  return (
    <>
      <Hero />
      {/* <QuotePanel /> */}
      <Stats />
      <section className="w-full h-max  bg-white gap-[3rem] px-[80px]  flex justify-center items-center flex-col mb-[60px]">
        <div className="w-[1140px] h-full flex justify-start items-center flex-col gap-[2rem]">
          <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
            Top whole life insurance plans{" "}
          </h2>
          <div className="w-full h-max flex justify-start items-center gap-[20px] flex-col">
            <div
              className="w-[500px]   h-[80px] rounded-[10px] border-grays self-start  justify-center border-solid border-2  bg-white "
              style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
            >
              <div className="text-[18px]  font-semibold text-halfBlack border-r-2 border-gray1 border-solid my-[10px] px-8">
                Coverage Amount:
                <br /> 200K
              </div>
              <div className="text-[18px]  font-semibold text-halfBlack border-r border-grays border-solid py-[10px] px-8">
                Non Participating Whole life plan
              </div>
            </div>
            {[1, 2, 3].map(() => {
              return (
                <div className="w-full rounded-lg bg-white shadow-sidebar flex my flex-col sm:flex-row justify-between items-center gap-[10px] sm:gap-[1rem] p-6 sm:p-8">
                  <div className="flex justify-center items-center w-full sm:w-auto sm:border-r sm:border-solid sm:border-halfBlack">
                    <Image
                      alt="Insurance Provider"
                      width={120}
                      height={80}
                      className="h-auto"
                      src={CanadaLife}
                    />
                  </div>

                  <div className="flex text-left justify-center gap-[10px] flex-col items-center w-full sm:w-[10rem] sm:border-r sm:border-solid sm:border-halfBlack">
                    <div className="text-halfBlack w-full text-left">
                      Term Length
                    </div>
                    <div className="text-black font-semibold w-full text-left">
                      60 Years
                    </div>
                  </div>

                  <div className="flex text-left justify-center gap-[10px] flex-col items-center w-full sm:w-[10rem] sm:border-r sm:border-solid sm:border-halfBlack">
                    <div className="text-halfBlack w-full text-left">
                      Coverage Amount
                    </div>
                    <div className="text-black font-semibold w-full text-left">
                      $100,000.00
                    </div>
                  </div>

                  <div className="flex justify-center gap-[10px] flex-col items-center w-full sm:w-[8rem] sm:border-r sm:border-solid sm:border-halfBlack">
                    <div className="text-halfBlack w-full text-left">
                      Rating
                    </div>
                    <div className="text-black font-semibold w-full text-left">
                      A+
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-[5px] flex-col w-full sm:w-auto">
                    <div className="font-semibold text-center text-[20px] text-halfBlack">
                      $250.00/Month
                    </div>
                    <button className="w-full sm:w-auto h-[3.4rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
                      Get this Rate
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-halfBlack line-h  text-[16px]">
            <strong>Disclaimer: </strong>
            The plans and premiums listed are for CAD 200K coverage for an
            18-year-old with a 20-year term. Rates vary by individual profile
            and the final guaranteed cash value will be determined by the
            insurer, policyscanner have no role in that. Also, PolicyScanner
            does not endorse any insurer or product. For a full list of Canadian
            insurers, please visit the Financial Services Regulatory Authority
            of Ontario (FSRA) website, www.fsrao.ca.
          </p>
        </div>
      </section>
      {/* <InsuranceProviders /> */}
      <WholeLifeInfo />
      <WholeLifeInofo2 />
      <NewCta />
      <WholeLifeFaq />
      <WholeLifeInfo5 />
      <WholeLifeInfo3 />
      <WholeLifeInfo4 />
      <Faq faqs={faqs} />
    </>
  );
};

export default Index;
