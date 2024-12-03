"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ChooseProvince from "@/Pages/Quote-form/ChooseProvince";
import ChooseGender from "@/Pages/Quote-form/ChooseGender";
import quoteForm1 from "../../assets/quote-form-1.png";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import quoteForm2 from "../../assets/quote-form-2.png";
import Image from "next/image";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  WhatsApp,
} from "@mui/icons-material";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { LinearProgress, Box, Switch } from "@mui/material";
import CoveragePicker from "@/Pages/Quote-form/CoveragePicker";
import ContactInformation from "@/Pages/Quote-form/ContactInformation";
import { usePathname, useRouter } from "next/navigation";
import Loading from "../loading";
import ProvinceAlt from "@/Pages/Quote-form/ProvinceAlt";
import { gsap } from "gsap";

const Page = () => {
  const steps = ["choose-gender", "coverage", "contact-info", "province-alt"];
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [provinceSelected, setProvinceSelected] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const [years, setYears] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);
  const [ContactInfo, setContactInfo] = useState(null);
  const totalSteps = steps.length;
  const [containerWidth, setContainerWidth] = useState(0);

  const progressWidth = containerWidth
    ? ((currentStepIndex + 2) / totalSteps) * containerWidth
    : 0;

  const contentRef = useRef(null);
  const prevStepIndexRef = useRef(currentStepIndex);
  const isInitialMount = useRef(true);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    if (currentStepIndex === -1) {
      setProvinceSelected(true);
      setCurrentStepIndex(0);
      return;
    }

    if (steps[currentStepIndex] === "contact-info") {
      const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
      existingData.contactInfo = ContactInfo;
      localStorage.setItem("quote-data", JSON.stringify(existingData));
      router.push("/final-quote");

      return;
    }

    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleBack = () => {
    setDirection(-1);
    if (currentStepIndex === 3) {
      setProvinceSelected(false);
      return setCurrentStepIndex(-1);
    }
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    } else if (currentStepIndex === 0) {
      setProvinceSelected(false);
      setCurrentStepIndex(-1);
    }
  };

  const renderStepContent = () => {
    if (!provinceSelected) {
      return (
        <ChooseProvince
          setProvinceSelected={setProvinceSelected}
          setDirection={setDirection}
          setCurrentStepIndex={setCurrentStepIndex}
        />
      );
    }

    switch (steps[currentStepIndex]) {
      case "choose-gender":
        return (
          <ChooseGender
            onSelection={setSelectedGender}
            handleNext={handleNext}
          />
        );
      case "coverage":
        return (
          <CoveragePicker
            setAge={setAge}
            setYears={setYears}
            setDob={setDob}
            age={age}
            dob={dob}
            years={years}
            handleNext={handleNext}
          />
        );
      case "contact-info":
        return (
          <ContactInformation
            setContactInfo={setContactInfo}
            handleNext={handleNext}
          />
        );
      case "province-alt":
        return <ProvinceAlt setCurrentStepIndex={setCurrentStepIndex} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const updateWidth = () => {
      setContainerWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  useLayoutEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    prevStepIndexRef.current = currentStepIndex;
    const el = contentRef.current;

    gsap.fromTo(
      el,
      {
        x: direction * 500,
        // x: (direction * window.innerWidth) / 3,
        autoAlpha: 0,
        scale: 0.98,
      },
      {
        x: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power3.inOut",
      }
    );
  }, [currentStepIndex]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full  min-h-[100vh] h-max flex justify-center items-start py-[3rem]">
      <div className="w-full min-h-[70vh] h-max flex justify-start items-center flex-col">
        <div>
          <div className="text-center text-[18px] absolute text-halfBlack top-[34px] right-[40px] pr-[50px] z-[10000]">
            Step{" "}
            <strong className="font-semibold text-black">
              {currentStepIndex + 1}
            </strong>{" "}
            of {totalSteps - 1}
          </div>
        </div>
        <div
          className="w-[700px] min-h-[400px]"
          style={{ overflow: "hidden", position: "relative" }}
        >
          <div ref={contentRef} style={{ position: "absolute", width: "100%" }}>
            {loading ? (
              <div className="w-full h-[40vh] flex justify-center items-center">
                <Loading />
              </div>
            ) : (
              renderStepContent()
            )}
          </div>
        </div>
        <div
          className={`flex justify-start items-center flex-col gap-[14px] ${
            currentStepIndex === 2 ? "mt-[3rem]" : "mt-[0rem]"
          }`}
        >
          <div className="flex justify-center items-center gap-[1rem]">
            <button
              className="w-max h-[2.8rem] flex justify-center cursor-pointer items-center bg-transparent border-[2px] border-solid border-opposite text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg"
              onClick={handleBack}
              disabled={currentStepIndex === -1}
            >
              <ArrowBackIosNew className="rounded-full w-[20px] h-[20px] text-[20px] bg-halfBlack text-white p-[2px]" />
              Back
            </button>
            <button
              className={`w-max h-[2.8rem]  ${
                currentStepIndex > 0 ? "visible" : "invisible"
              } justify-center items-center flex  bg-secondary text-nowrap cursor-pointer px-[15px] py-[5px] gap-[10px] rounded-lg`}
              onClick={handleNext}
              disabled={
                (currentStepIndex === -1 && !provinceSelected) ||
                (currentStepIndex === 0 && selectedGender === null) ||
                (currentStepIndex === 1 && age === null)
              }
            >
              {currentStepIndex === 3 || currentStepIndex === 2
                ? "Submit"
                : "Continue"}
              <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[20px] bg-white text-black p-[2px]" />
            </button>
          </div>
          {steps[currentStepIndex] === "contact-info" ? (
            <>
              <p className="text-[14px] flex justify-center items-center gap-[5px] text-halfBlack">
                <WhatsApp />
                Get Updated on Whatsapp
                <Switch checked={true} />
              </p>
            </>
          ) : (
            <p className="text-[14px] flex justify-center items-center gap-[5px] text-halfBlack">
              <HttpsOutlinedIcon className="text-[18px]" /> Your personal
              information is secure with us
            </p>
          )}
          <div className="w-max flex justify-center items-center flex-col gap-4">
            <Image
              src={quoteForm1}
              alt="Norton"
              className="object-cover object-center h-[30px] w-max"
            />
            <div className="w-max h-max flex justify-center items-center gap-2">
              {["Safe |", "Secure   |", "Privacy Protected"].map((t, i) => {
                return (
                  <div className="text-[13px] text-grays" key={i}>
                    {t}&nbsp;
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <LinearProgress
        variant="determinate"
        sx={{
          position: "fixed",
          left: 0,
          top: "90px",
          backgroundColor: "#00615F",
          width: `${progressWidth}px`,
          height: "10px",
          "& .MuiLinearProgress-bar": {
            transition: "width 0.5s ease-in-out",
            background: "#00615F",
          },
        }}
      />
    </div>
  );
};

export default Page;
