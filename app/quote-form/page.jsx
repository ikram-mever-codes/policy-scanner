"use client";
import React, { useEffect, useState } from "react";
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

  const handleNext = () => {
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

  return (
    <div className="w-full min-h-[100vh] h-max flex justify-center items-start py-[3rem]">
      <div className="w-full min-h-[70vh] h-max flex justify-between items-center flex-col">
        {/* {provinceSelected && ( */}
        <div>
          <div className=" text-center text-[18px] absolute  text-halfBlack top-[34px] right-[40px] pr-[50px] z-[10000]">
            Step{" "}
            <strong className="font-semibold text-black">
              {currentStepIndex + 1}
            </strong>{" "}
            of {totalSteps - 1}
          </div>
        </div>
        {/* )} */}
        {/* <div className="w-max flex absolute top-[32px] z-[10000] justify-start items-center gap-[15px] mb-4">
          <Image
            width={35}
            height={35}
            className="object-cover object-center"
            src={quoteForm2}
            alt="logo"
          />{" "}
          */
        /*{" "}
          <Box
            sx={{
              width: "35vw",
              borderRadius: "50px",
              padding: "6px",
            }}
            className="border-solid border border-[#494949]"
          >
            <LinearProgress
              variant="determinate"
              value={((currentStepIndex + 1) / totalSteps) * 100}
              sx={{
                height: "17px",
                borderRadius: "50px",
                background: "transparent",
                "& .MuiLinearProgress-bar": {
                  background:
                    "linear-gradient(to right, #00615F 0%, #FCC600 100%)",
                },
              }}
            />
          </Box>{" "} */}
        {/* </div> */}
        {/* {currentStepIndex !== -1 && (
          <div className="w-[60vw] my-[20px] h-[1px] bg-gradient-to-r from-transparent via-halfBlack to-transparent"></div>
        )} */}
        <div className="w-full min-h-[50vh]">
          {loading ? (
            <div className="w-full h-[40vh] flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            renderStepContent()
          )}
        </div>
        <div className="flex justify-start items-center flex-col gap-[14px] mt-[2rem]">
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
              Continue
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
