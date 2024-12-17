"use client";
import { ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";
import ctaImg from "../assets/contact-cta.png";
import { Modal } from "@mui/material";
import ScheduleACall from "./ScheduleACall";

const ConnectCta = ({ bg }) => {
  const [schedule, setSchedule] = useState(false);

  return (
    <section
      style={{ backgroundColor: bg }}
      className="w-full  h-max md:py-[50px] flex flex-col lg:flex-row justify-center items-center my-[60px] gap-[116px]"
    >
      <Image
        src={ctaImg}
        alt="Contact Us"
        width={513}
        height={440}
        objectFit="cover"
        objectPosition="center"
        loading="lazy"
        priority={false}
      />
      <div className="w-max px-[10px] md:px-[20px] h-max flex justify-center items-start gap-[10px] md:gap-[20px] flex-col">
        <h2 className="w-full font-bold text-[28px] mtext-left text-halfBlack">
          Connect with an advisor now{" "}
        </h2>
        <h4 className="text-left text-dg">
          Get a free, no-obligation quote. At PolicyScanner, we
          <br />
          respect your privacy and avoid multiple follow-up calls.
        </h4>
        <button
          onClick={() => {
            setSchedule(true);
          }}
          className="w-max h-[2.8rem] flex justify-center items-center bg-secondary text-nowrap px-[10px] md:px-[15px] py-[5px] gap-[10px] rounded-lg"
        >
          Schedule a Call
          <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[15px] bg-white text-black p-[5px]" />
        </button>
      </div>
      <Modal
        open={schedule}
        onClose={() => {
          setSchedule(false);
        }}
        className="flex justify-center items-center"
        aria-labelledby="choose-smoker-title"
        aria-describedby="choose-smoker-description"
      >
        <div className="relative" onClick={() => setSchedule(false)}>
          <div
            className="border-none outline-none rounded-lg p-6 pt-0 px-0 shadow-lg max-w-md w-full z-10"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <ScheduleACall
              onClose={() => {
                setSchedule(false);
              }}
            />
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ConnectCta;
