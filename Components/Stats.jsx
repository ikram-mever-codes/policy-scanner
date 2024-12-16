"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import homextr1 from "../assets/home-extra-1.png";
import homextr2 from "../assets/home-extra-2.png";
import { Star } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { gsap } from "gsap";

const GradientStar = styled(Star)({
  fontSize: 24,
  "& path": {
    fill: "url(#grayGradient)",
  },
});

// Solid star: just a single color
const SolidStar = styled(Star)({
  fontSize: 24,
  "& path": {
    fill: "#494949",
  },
});

const Stats = () => {
  const starsRef = useRef(null);

  return (
    <div
      className="w-[1000px] flex justify-center items-center sm:bg-white mx-auto bg-foreground2 h-max mt-[60px] my-[60px]"
      style={{ overflow: "visible", position: "relative" }}
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="grayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="80%" stopColor="#494949" />
            <stop offset="80%" stopColor="#d3d3d3" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="flex flex-wrap justify-center gap-[190px] items-center px-[20px]"
        style={{ overflow: "visible", position: "relative" }}
      >
        <div className="flex justify-center items-center flex-col">
          <div className="font-bold text-[40px] sm:text-[30px] text-halfBlack">
            150+
          </div>
          <div className="text-[16px] underline">Expert reviewed articles</div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div
            className="flex items-center relative"
            style={{ overflow: "visible", position: "relative" }}
            ref={starsRef}
          >
            <Image
              src={homextr1}
              alt="4.6 out of 5 Excellent rating"
              width={119}
              height={20}
              className="object-cover object-center h-max mr-2"
            />
            {[0, 1, 2, 3, 4].map((_, index) =>
              index === 4 ? (
                <GradientStar key={index} className="animated-star" />
              ) : (
                <SolidStar key={index} className="animated-star" />
              )
            )}
          </div>
          <div className="text-[16px] underline">
            4.9 out of 5 Excellent rating
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="font-bold text-[20px] sm:text-[30px] text-halfBlack flex justify-center items-center gap-2">
            <Image
              src={homextr2}
              alt="100% Canadian Company"
              className="object-cover object-center w-[37px] h-[40px]"
            />
            100%
          </div>
          <div className="text-[16px] underline">Canadian company</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
