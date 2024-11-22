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
    question: "Age and Gender",
    answer: `PolicyScanner is an online life insurance brokerage platform that
                Kitchener Ontario, and registered under FSRA.`,
  },
  {
    question: "Health Status and Family History",
    answer: `PolicyScanner is an online life insurance brokerage platform the
                  offer. We are a proudly 100% Canadian company, headquartered in
              Kitchener Ontario, and registered under FSRA.`,
  },
  {
    question: "Smoking Habits",
    answer:
      "Yes, we work directly with leading insurance companies to ensure the best service.",
  },
  {
    question: "Policy Term Length",
    answer:
      "We offer term life insurance, whole life insurance, critical illness insurance, and mortgage protection.",
  },
  {
    question: "Type of Coverage",
    answer:
      "We offer term life insurance, whole life insurance, critical illness insurance, and mortgage protection.",
  },
];
const CriticalInsuranceFaq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="w-full h-max  bg-[#ebfefe] gap-[3rem] px-[80px] pb-[40px] pt-[40px] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[3rem]">
        <div className="w-full h-max flex flex-col justify-start items-center gap-[1rem]">
          <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
            Factors that influence your critical illness insurance quote{" "}
          </h2>
          <p className="w-full text-left text-dg text-halfBlack">
            While many factors affect the cost of critical illness insurance,
            here are the key ones that impact your monthly premium:
          </p>
        </div>
        <div className="w-full h-max flex justify-between items-center gap-[3rem]">
          <Image
            src={wholeLife5}
            objectFit="cover"
            objectPosition="center"
            width={465}
            height={41}
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
                    className="bg-[#ebfefe] "
                    id={`panel${index}d-header`}
                  >
                    <Typography className="w-full text-dg text-halfBlack text-left font-medium bg-[#ebfefe] ">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="w-full h-max flex  text-dg text-halfBlack justify-start pb-[5rem] bg-white items-start font-normal p-[40px] text-left rounded-xl">
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

export default CriticalInsuranceFaq;
