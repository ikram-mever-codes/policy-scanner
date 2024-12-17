"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import homextr1 from "../assets/home-extra-1.png";
import homextr2 from "../assets/home-extra-2.png";
import { styled } from "@mui/material/styles";

const Star = ({ filled, gradient }) => (
  <svg
    viewBox="0 0 20 20"
    width="20"
    height="20"
    className="transition-all duration-300 ease-out"
  >
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      fill={gradient ? "url(#grayGradient)" : filled ? "#494949" : "#d3d3d3"}
      style={{
        transition: "fill 0.3s ease-out",
      }}
    />
  </svg>
);

const StyledStar = styled(Star)({
  fontSize: 24,
});

const Stats = () => {
  const [filledStars, setFilledStars] = useState(0);

  useEffect(() => {
    const fillStars = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      for (let i = 1; i <= 5; i++) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setFilledStars(i);
      }
    };

    fillStars();
  }, []);

  return (
    <div className="w-[1000px] flex justify-center items-center sm:bg-white mx-auto bg-foreground2 h-max mt-[60px] my-[60px]">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="grayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="80%" stopColor="#494949" />
            <stop offset="80%" stopColor="#d3d3d3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-wrap justify-center gap-[190px] items-center px-[20px]">
        <div className="flex justify-center items-center flex-col">
          <div className="font-bold text-[40px] sm:text-[30px] text-halfBlack">
            150+
          </div>
          <div className="text-[16px] underline">Expert reviewed articles</div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="flex items-center relative">
            <Image
              src={homextr1}
              alt="4.6 out of 5 Excellent rating"
              width={119}
              height={20}
              className="object-cover object-center h-max mr-2"
            />
            <div className="flex gap-[2px]">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <StyledStar
                  key={index}
                  filled={index < filledStars}
                  gradient={index === 4 && index < filledStars}
                />
              ))}
            </div>
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
