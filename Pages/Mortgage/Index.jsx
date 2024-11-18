import React from "react";
import Hero from "./Hero";
import homextr1 from "../../assets/home-extra-1.png";
import homextr2 from "../../assets/home-extra-2.png";
import Image from "next/image";
import MortgageInfo from "./MortgageInfo";
import MortgageInfo2 from "./MortgageInfo2";
import MortgageTable from "./MortgageTable";
import MortgageInfo3 from "./MortgageInfo3";
import Faq from "@/Components/Faq";
import MortgageInfo4 from "./MortgageInfo4";
import MortgageInfo5 from "./MortgageInfo5";

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
      <Hero />{" "}
      <div className="flex justify-center gap-[10rem] items-center w-full min-h-[15vh] py-[40px] px-[60px]">
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
      <MortgageInfo />
      <MortgageInfo2 />
      <MortgageInfo3 />
      <MortgageInfo5 />
      <MortgageTable />
      <MortgageInfo4 />
      <Faq faqs={faqs} />
    </>
  );
};

export default Index;
