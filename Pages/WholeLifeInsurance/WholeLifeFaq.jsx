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
import wholeLife5 from "../../assets/whole-life-5.png";

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
const WholeLifeFaq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[60px] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[3rem]">
        <div className="w-full h-max flex flex-col justify-start items-center gap-[1rem]">
          <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
            What are the types of whole life insurance?
          </h2>
          <p className="w-full text-halfBlack text-dg">
            Whole life insurance comes in several forms to meet various
            financial needs. Here’s a brief overview of the main types:
          </p>
        </div>
        <div className="w-full h-max flex justify-between items-center gap-[3rem]">
          <Image
            src={wholeLife5}
            objectFit="cover"
            objectPosition="center"
            width={400}
            height={500}
            alt="What are the types of whole life insurance? (Change)"
          />
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="w-full border-b border-gray-300 mb-6">
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  elevation={0}
                  square
                >
                  <AccordionSummary
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
                    <Typography className="w-full text-[16px] text-left font-medium text-dg">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className="w-full text-halfBlack text-dg
                    h-max flex justify-start pb-[5rem] bg-foreground2 items-start font-normal p-[40px] text-left rounded-xl"
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholeLifeFaq;
