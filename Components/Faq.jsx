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
    <section className="w-full h-max bg-white gap-8 px-6 sm:px-12 md:px-20 lg:px-32 py-12 flex flex-col items-center">
      {/* Header */}
      <h2 className="w-full font-bold text-2xl sm:text-3xl md:text-4xl text-center text-gray-800">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="flex w-full max-w-[900px] gap-6 flex-col items-center">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full border-b border-gray-300 mb-4 last:mb-0"
          >
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              elevation={0}
              square
            >
              {/* Question Section */}
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
                <Typography className="w-full text-lg sm:text-xl text-gray-700 font-medium">
                  {faq.question}
                </Typography>
              </AccordionSummary>

              {/* Answer Section */}
              <AccordionDetails>
                <Typography className="w-full bg-gray-50 text-gray-600 text-base sm:text-lg font-normal p-6 rounded-lg">
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
