import React, { useState, useRef, useEffect } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";
import gsap from "gsap";

const ChooseProvince = ({
  setProvinceSelected,
  setCurrentStepIndex,
  setDirection,
}) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      [titleRef.current, subtitleRef.current],
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out", stagger: 0 }
    );
  }, []);

  const handleClick = (province) => {
    setSelectedButton(province);
    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    existingData.province = province;

    localStorage.setItem("quote-data", JSON.stringify(existingData));
    setProvinceSelected(true);
    setDirection(1);
  };
  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <Image src={quoteForm3} alt="Teena" className="" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col mt-[20px]">
        <h2 ref={titleRef} className="font-semibold text-[30px]">
          Hey I'm Teena
        </h2>
        <div
          ref={subtitleRef}
          className="text-halfBlack font-normal text-[18px]"
        >
          Can you please tell me which province you’re in?
        </div>
      </div>
      <div className="flex justify-center items-center gap-[3rem] mt-[5rem]">
        <button
          className={`w-[8rem] h-[3.5rem] rounded-md text-[18px] border border-solid border-halfBlack ease-in-out transition-all duration-[300ms] hover:bg-grays/20 ${
            selectedButton === "Ontario" ? "bg-[#4949493e]" : "bg-transparent"
          }`}
          onClick={() => {
            handleClick("Ontario");
            setCurrentStepIndex(0);
          }}
        >
          Ontario
        </button>

        <button
          className={`w-[8rem] h-[3.5rem] rounded-md text-[18px] border border-solid border-halfBlack ease-in-out transition-all duration-[300ms] hover:bg-grays/20 ${
            selectedButton === "Other" ? "bg-[#4949493e]" : "bg-transparent"
          }`}
          onClick={() => {
            handleClick("other");
            setCurrentStepIndex(3);
          }}
        >
          Other
        </button>
      </div>
    </div>
  );
};

export default ChooseProvince;
