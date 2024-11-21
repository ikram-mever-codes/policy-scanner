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
    question: "Becoming a New Parent",
    answer: `PolicyScanner is an online life insurance brokerage platform that
                Kitchener Ontario, and registered under FSRA.`,
  },
  {
    question: "Buying a Home",
    answer: `PolicyScanner is an online life insurance brokerage platform the
                  offer. We are a proudly 100% Canadian company, headquartered in
              Kitchener Ontario, and registered under FSRA.`,
  },
  {
    question: "Retirement Planning",
    answer:
      "We offer term life insurance, whole life insurance, critical illness insurance, and mortgage protection.",
  },
];
const TermLifeFaq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[40px] pb-[60px] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[3rem]">
        <div className="w-full h-max flex flex-col justify-start items-center gap-[1rem]">
          <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
            When to buy term life insurance?{" "}
          </h2>
          <p className="w-full text-left">
            Unsure if it's the right time to buy term life insurance in Canada,
            check if any of the following situations apply to you.
          </p>
        </div>
        <div className="w-full h-max flex justify-between items-center gap-[3rem]">
          <Image
            src={wholeLife5}
            objectFit="cover"
            objectPosition="center"
            width={400}
            height={280}
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
                        <RemoveIcon className="text-halfBlack text-[25px]" />
                      ) : (
                        <AddIcon className="text-halfBlack text-[25px]" />
                      )
                    }
                    aria-controls={`panel${index}d-content`}
                    id={`panel${index}d-header`}
                  >
                    <Typography className="w-full text-[16px] text-left font-medium">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="w-full h-max flex justify-start pb-[5rem] bg-foreground2 items-start font-normal p-[40px] text-left rounded-xl">
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

export default TermLifeFaq;
