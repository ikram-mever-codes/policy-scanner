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

const Faq = ({ faqs }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="w-full  h-max bg-white gap-8 px-6 sm:px-12 my-[4rem] mb-[160px] md:px-20 lg:px-32 py-12 flex flex-col items-center">
      {/* Header */}
      <h2 className="w-full font-bold text-[40px] text-center text-halfBlack">
        Frequently Asked Questions
      </h2>

      <div className="flex w-full max-w-[900px]  flex-col items-center">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-[1000px] border-b border-gray-300 mb-4 last:mb-0"
          >
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              elevation={0}
              square
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index}` ? (
                    <RemoveIcon className="text-gray-600 text-xl" />
                  ) : (
                    <AddIcon className="text-gray-600 text-xl" />
                  )
                }
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
              >
                <Typography className="py-[1rem] w-full text-[22px] text-halfBlack font-[500]">
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="w-full text-halfBlack bg-foreground2 text-gray-600 text-base sm:text-lg font-normal p-6 rounded-lg">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
