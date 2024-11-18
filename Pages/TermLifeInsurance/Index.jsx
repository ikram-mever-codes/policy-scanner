import React from "react";
import Hero from "./Hero";
import QuotePanel from "@/Components/QuotePanel";
import InsuranceProviders from "@/Components/InsuranceProviders";
import TermLifeInfo from "./TermLifeInfo";
import TermLifeInofo2 from "./TermLifeInfo2";
import ConnectCta from "@/Components/ConnectCta";
import TermLifeFaq from "./TermLifeFaq";
import Faq from "@/Components/Faq";
import TermLifeFaq2 from "./TermLifeFaq2";
import InsuranceCalculator from "@/Components/InsuranceCalculator";
import homextr1 from "../../assets/home-extra-1.png";
import homextr2 from "../../assets/home-extra-2.png";
import Image from "next/image";
import CanadaLife from "../../assets/canada-life.png";

const Index = () => {
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
  return (
    <>
      <Hero />
      {/* <QuotePanel /> */}
      <div className="flex justify-center gap-[10rem] items-center w-full min-h-[15vh] pt-[40px] px-[60px]">
        <div className="flex justify-center items-center flex-col">
          <div className="font-bold text-[30px] text-halfBlack">150+</div>
          <div>Expert reviewed articles</div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Image
            src={homextr1}
            alt="4.6 out of 5 Excellent rating"
            className=" object-cover object-center"
          />
          <div>4.6 out of 5 Excellent rating</div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="font-bold text-[30px] text-halfBlack flex justify-center items-center gap-2">
            <Image
              src={homextr2}
              alt="4.6 out of 5 Excellent rating"
              className=" object-cover object-center"
            />{" "}
            150+
          </div>
          <div>Canadian Company</div>
        </div>
      </div>
      <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[3rem] flex justify-center items-center flex-col">
        <div className="w-[75%] h-full flex justify-start items-center flex-col gap-[2rem]">
          <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
            Top term life insurance plans{" "}
          </h2>
          <div className="w-full h-max flex justify-start items-center gap-6 flex-col">
            {[1, 2, 3].map(() => {
              return (
                <div className="w-full rounded-lg bg-white shadow-sidebar flex flex-col sm:flex-row justify-between items-center gap-[10px] sm:gap-[1rem] p-6 sm:p-8">
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
        </div>
      </section>

      {/* <InsuranceProviders /> */}
      <TermLifeInfo />
      <TermLifeInofo2 />
      <ConnectCta bg={"#EBFEFE"} />
      <TermLifeFaq />
      <TermLifeFaq2 />
      <InsuranceCalculator
        title={"Life Insurance Calculator"}
        paragraph={`Use our online insurance calculator to quickly determine how much coverage you need and get direct life insurance quotes for term life, whole life, or mortgage insurance from the top insurance companies in Canada..`}
      />
      <Faq faqs={faqs} />
    </>
  );
};

export default Index;
