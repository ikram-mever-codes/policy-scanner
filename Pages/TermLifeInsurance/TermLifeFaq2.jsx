"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import termLife4 from "../../assets/term-life-4.png";

const faqs = [
  {
    question: "  What is PolicyScanner, and how does it work?",
    answer: `PolicyScanner is an online life insurance brokerage platform that
                Kitchener Ontario, and registered under FSRA.`,
  },
  {
    question:
      "What makes PolicyScanner different from other online life insurance brokers?",
    answer: `PolicyScanner is an online life insurance brokerage platform the
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
];
const TermLifeFaq2 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="w-full h-max  bg-foreground2 gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[1000px] h-full flex justify-center items-center flex-col gap-[3rem]">
        <div className="w-full h-max flex flex-col justify-start items-center gap-[1rem]">
          <h2 className="w-full font-bold text-[35px] leading-10 text-left text-halfBlack">
            How much coverage do you need?{" "}
          </h2>
          <p className="w-full text-left text-dg">
            When determining how much term life insurance coverage you need,
            it's important to analyze your family’s future financial needs.
            Whether you’re comparing term life insurance quotes or calculating
            life insurance premiums. The following factors will help you choose
            the best term life insurance in Canada.
          </p>
        </div>
        <div className="w-full h-[80vh flex justify-between items-center gap-[3rem]">
          <div className="w-full h-full flex justify-center  items-center gap-[2rem] flex-col ">
            <ul className="flex w-full h-max flex-col justify-center items-start gap-[4px]  px-[0rem] bullets">
              <li>Future mortgage or rental payments</li>
              <li>Living costs to maintain a similar quality of life</li>
              <li>Mortgage protection for your loved ones</li>
              <li>An inheritance for your loved ones.</li>
            </ul>
            <h3 className=" font-semibold text-[18px] text-left w-full">
              Optional riders for term life insurance
            </h3>
            <div className="w-full relative left-[-20px]">
              {faqs.map((faq, index) => (
                <div key={index} className="w-full  gap-[3rem]">
                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    elevation={0}
                    square
                  >
                    <AccordionSummary
                      className="bg-foreground2"
                      expandIcon={
                        expanded === `panel${index}` ? (
                          <RemoveIcon className="text-opposite text-[25px]" />
                        ) : (
                          <AddIcon className="text-opposite text-[25px]" />
                        )
                      }
                      aria-controls={`panel${index}d-content`}
                      id={`panel${index}d-header`}
                    >
                      <Typography className="w-full text-[18px] text-left font-medium ">
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="w-full h-max flex justify-start pb-[5rem] bg-white items-start font-normal p-[40px] px-0 text-left rounded-xl">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[400px] flex-shrink-0">
              <Image
                src={termLife4}
                objectFit="cover"
                objectPosition="center"
                width={486}
                height={476}
                alt="What are the types of whole life insurance? (Change)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermLifeFaq2;
