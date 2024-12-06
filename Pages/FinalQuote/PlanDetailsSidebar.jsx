import React, { useState } from "react";
import Bracket from "../../assets/bracket.svg";
import {
  AddCard,
  AlarmAddOutlined,
  Close,
  PropaneOutlined,
  SecurityRounded,
} from "@mui/icons-material";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import logo from "../../assets/canada-life.png";
import Rip from "../../assets/rip.svg";
import { CSSTransition } from "react-transition-group";
import "./Head.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineOppositeContent,
  TimelineContent,
} from "@mui/lab";

// Icons (no changes to imports)
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import SentimentSatisfiedOutlined from "@mui/icons-material/SentimentSatisfiedOutlined";
import CreditCardOutlined from "@mui/icons-material/CreditCardOutlined";
import AutorenewOutlined from "@mui/icons-material/AutorenewOutlined";

const PlanDetailsSidebar = ({ open, onClose, insurance, decreasingTerm }) => {
  const [activeTab, setActiveTab] = useState("Plan Summary");

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <div className="fixed top-0 right-0 h-[100vh] w-[550px] overflow-y-scroll z-[30] overflow-x-hidden bg-white shadow-lg p-5 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onClose}
            className="self-start text-halfBlack hover:text-black transition"
          >
            <Close />
          </button>
          <Image
            src={logo}
            alt="Logo"
            className="mx-auto object-cover object-center relative left-[-150px]"
            width={100}
            height={100}
          />
        </div>

        <div className="flex gap-3 pb-2 my-5 text-center">
          <button
            onClick={() => setActiveTab("Plan Summary")}
            className={`w-[10rem] h-[2.8rem] px-3 py-1 rounded-[5px] font-normal bg-[#f4f4f4] ${
              activeTab === "Plan Summary"
                ? "border-solid border-b-[3px] font-semibold text-opposite border-opposite"
                : ""
            }`}
          >
            {insurance === "mortgage-insurance"
              ? decreasingTerm
                ? "Decreasing Term"
                : "Level Term"
              : "Plan Summary"}
          </button>
          <button
            onClick={() => setActiveTab("Riders")}
            className={` w-[10rem] h-[2.8rem] px-3 py-1 rounded-[5px] font-normal bg-[#f4f4f4]  ${
              activeTab === "Riders"
                ? "border-solid border-b-[3px] font-semibold text-opposite border-opposite"
                : ""
            } `}
          >
            Riders
          </button>
        </div>

        <CSSTransition
          in={activeTab === "Plan Summary"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="w-full h-max flex flex-col py-2 gap-6">
            {/* Top Plan Details */}
            <div className="w-full flex h-max justify-start items-center gap-4 flex-col">
              <div className="w-full h-max p-4 py-3 bg-primary2/10 flex flex-col gap-1 rounded-lg shadow-sidebar">
                <h2 className="font-semibold text-halfBlack text-[15px]">
                  Plan Details
                </h2>
                <p className="text-text1 leading-[24px] text-halfBlack">
                  In the event of your death during the policy term, your
                  nominee will receive the sum assured amount, free from taxes.
                </p>
              </div>

              {insurance === "term-life" && (
                <>
                  <div className="w-full bg-opposite/10 h-max p-4 py-3 flex flex-col gap-1 rounded-lg shadow-sidebar">
                    <h2 className="font-semibold text-halfBlack text-[15px]">
                      Renewability
                    </h2>
                    <p className="text-text1 leading-[24px] text-halfBlack">
                      The policy auto-renews at the end of each term without a
                      medical exam, with premiums increasing by age, until 85.
                    </p>
                  </div>
                  <div className="w-full h-max p-4 py-3 bg-secondary/10 flex flex-col gap-1 rounded-lg shadow-sidebar">
                    <h2 className="font-semibold text-halfBlack text-[15px]">
                      Convertibility
                    </h2>
                    <p className="text-text1 leading-[24px] text-halfBlack">
                      The policy can be converted to permanent life insurance
                      before age 70.
                    </p>
                  </div>
                </>
              )}

              {insurance === "mortgage-insurance" && (
                <>
                  <div className="w-full bg-opposite/10 h-max p-4 py-3 flex flex-col gap-1 rounded-lg shadow-sidebar">
                    <h2 className="font-semibold text-halfBlack text-[15px]">
                      Renewability
                    </h2>
                    <p className="text-text1 leading-[24px] text-halfBlack">
                      The policy auto-renews at the end of each term without a
                      medical exam, with premiums increasing by age, until 85.
                    </p>
                  </div>
                  <div className="w-full h-max p-4 py-3 bg-secondary/10 flex flex-col gap-1 rounded-lg shadow-sidebar">
                    <h2 className="font-semibold text-halfBlack text-[15px]">
                      Convertibility
                    </h2>
                    <p className="text-text1 leading-[24px] text-halfBlack">
                      The policy can be converted to permanent life insurance
                      before age 70.
                    </p>
                  </div>
                </>
              )}

              <div className="w-full flex h-full justify-between items-center gap-4">
                <div className="w-full h-[8rem] p-4 py-3 flex flex-col gap-1 rounded-lg shadow-sidebar">
                  <h2 className="font-medium text-black text-[15px]">
                    Policy Benefits
                  </h2>
                  <p className="text-text1 leading-[24px] text-halfBlack">
                    Covers death from any cause, including natural events,
                    accidents, and illnesses.
                  </p>
                </div>
                <div className="w-full min-h-[8rem] p-4 py-3 flex flex-col gap-1 rounded-lg shadow-sidebar">
                  <h2 className="font-semibold text-black text-[16px]">
                    Exclusions
                  </h2>
                  <p className="text-text1 leading-[24px] text-halfBlack">
                    Suicide is excluded during the first two years of the
                    policy.
                  </p>
                </div>
              </div>
            </div>

            {/* How Does it Work Section */}
            <div className="w-full relative ">
              <h3 className="font-semibold text-primary text-[20px] mt-4 w-full text-left">
                How Does it Work?
              </h3>

              <div className="mt-[2rem] relative">
                {/* <Bracket className="text-[240px] absolute  top-[10px] left-[80px]" /> */}
                <Timeline position="left" className="w-full py-10 px-0 pt-0">
                  <TimelineItem className="py-0 relative   ">
                    <TimelineContent className="flex items-center">
                      <div className="pb-[1.5rem] relative top-[-30px]">
                        <div className="mr-2 p-3 w-[240px] bg-white shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
                          <p className="text-halfBlack w-full text-left text-[13px] font-medium">
                            You begin paying the monthly premiums
                          </p>
                        </div>
                      </div>
                    </TimelineContent>
                    <TimelineSeparator>
                      <TimelineDot className="bg-halfBlack ">
                        <DescriptionOutlined />
                      </TimelineDot>
                      <TimelineConnector className="bg-halfBlack  " />
                    </TimelineSeparator>
                    <TimelineOppositeContent className="flex items-center justify-start">
                      <span className="text-opposite font-semibold text-right w-full text-[16px] relative top-[-35px]">
                        Age 37 yrs
                      </span>
                    </TimelineOppositeContent>
                  </TimelineItem>

                  {/* 2nd Event */}
                  <TimelineItem className="py-0">
                    <TimelineContent className="flex items-center">
                      <div className="pb-[1.5rem] relative top-[-30px]">
                        <div className="mr-2 p-3 w-[240px] bg-white shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
                          <p className="text-halfBlack w-full text-left text-[13px] font-medium">
                            If you pass away during the term, your family will
                            receive the full sum assured, tax-free.
                          </p>
                        </div>
                      </div>
                    </TimelineContent>
                    <TimelineSeparator>
                      <TimelineDot className="bg-halfBlack ">
                        <AddCard />
                      </TimelineDot>{" "}
                      <TimelineConnector className="bg-halfBlack" />
                    </TimelineSeparator>
                    <TimelineOppositeContent className="flex items-center justify-start">
                      <span className="relative top-[-34px] text-halfBlack text-[13px]">
                        Convert to permanent life insurance, fully or partially.
                      </span>
                    </TimelineOppositeContent>
                  </TimelineItem>

                  <TimelineItem className="py-0">
                    <TimelineContent className="flex items-center">
                      <div className="pb-[1.5rem] relative top-[-30px]">
                        <div className="mr-2 p-3 w-[240px] bg-white shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
                          <p className="text-halfBlack w-full text-left text-[13px] font-medium">
                            Coverage ends with no cash value after the term.
                          </p>
                        </div>
                      </div>
                    </TimelineContent>
                    <TimelineSeparator>
                      <TimelineDot className="bg-halfBlack ">
                        <PropaneOutlined />
                      </TimelineDot>
                      <TimelineConnector className="bg-halfBlack" />
                    </TimelineSeparator>
                    <TimelineOppositeContent className="flex items-center justify-start">
                      <span className="text-blue-500 font-semibold text-[16px] w-full text-right relative top-[-35px]">
                        Age 57 yrs
                      </span>
                    </TimelineOppositeContent>
                  </TimelineItem>

                  {/* 4th Event */}
                  <TimelineItem className="py-0">
                    <TimelineContent className="flex items-center">
                      <div className="pb-[1.5rem] relative top-[-30px]">
                        <div className="mr-2 p-3 w-[240px] bg-white shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
                          <p className="text-halfBlack w-full text-left text-[13px] font-medium">
                            Coverage continues, building cash value.
                          </p>
                        </div>
                      </div>
                    </TimelineContent>
                    <TimelineSeparator>
                      <TimelineDot className="bg-halfBlack">
                        <SecurityRounded />
                      </TimelineDot>
                      <TimelineConnector className="bg-halfBlack" />
                    </TimelineSeparator>
                    <TimelineOppositeContent className="flex items-center justify-start">
                      <span className="text-halfBlack text-[13px] relative top-[-25px]">
                        If converted to permanent insurance, you get coverage
                        until age 100 or death, plus cash value.
                      </span>
                    </TimelineOppositeContent>
                  </TimelineItem>

                  {/* 5th Event - Age 100 yrs */}
                  <TimelineItem className="py-0">
                    <TimelineContent className="flex items-center">
                      <div className="pb-[1.5rem] relative top-[-30px]">
                        <div className="mr-2 p-3 w-[240px] bg-white shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
                          <p className="text-halfBlack w-full text-left text-[13px] font-medium">
                            At age 100, coverage remains in force if converted,
                            ensuring long-term protection and cash value.
                          </p>
                        </div>
                      </div>
                    </TimelineContent>
                    <TimelineSeparator>
                      <TimelineDot className="bg-halfBlack">
                        <AlarmAddOutlined />
                      </TimelineDot>
                      {/* No connector on the final item */}
                    </TimelineSeparator>
                    <TimelineOppositeContent className="flex items-center justify-start">
                      <span className="text-halfBlack font-semibold text-[16px] w-full text-right relative top-[-40px]">
                        Age 100 yrs
                      </span>
                    </TimelineOppositeContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>

            <div className="w-[60vw] my-[20px] h-[1px] bg-gradient-to-r from-transparent via-halfBlack to-transparent"></div>
            <div className="w-full flex justify-center items-center gap-4">
              <div className="font-semibold text-center text-[20px] text-halfBlack">
                $250.00 <span className="text-[16px] font-medium">/Month</span>
              </div>
              <button className="w-[8rem] h-[3rem] flex justify-center items-center bg-secondary text-white px-[15px] py-[5px] gap-[10px] rounded-lg">
                Get this Rate
              </button>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeTab === "Riders"}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="flex flex-col gap-[1rem]">
            <div className="flex flex-col gap-5">
              <h2 className="w-full text-left font-medium text-[20px] text-halfBlack">
                Paid Riders
              </h2>
              <div className="w-full h-max grid grid-cols-1 gap-4">
                <div className="w-full bg-primary2/10 rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
                  <h3 className="font-semibold text-halfBlack text-[16px]">
                    Extra Payout on Accidental death
                  </h3>
                  <p className="text-[14px] text-halfBlack">
                    In case of accidental death an additional amount of Rs.10
                    Lac will be paid out to the nominee.
                  </p>
                </div>
                <div className="w-full bg-opposite/10 rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
                  <h3 className="font-semibold text-halfBlack text-[16px]">
                    Extra Payout on Accidental death
                  </h3>
                  <p className="text-[14px] text-halfBlack">
                    In case of accidental death an additional amount of Rs.10
                    Lac will be paid out to the nominee.
                  </p>
                </div>
              </div>

              <div className="w-full bg-secondary/10 rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
                <h3 className="font-semibold text-halfBlack text-[18px]">
                  Waiver of Premium Cover
                </h3>
                <p className="text-[14px] text-halfBlack">
                  As per your age you can exit the policy during the age of 63
                  years. All premiums paid (excluding GST) shall...
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="w-full text-left font-medium text-[20px] text-halfBlack">
                Free Riders
              </h2>
              <div className="w-full h-max grid grid-cols-1 gap-4">
                <div className="w-full rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
                  <h3 className="font-semibold text-halfBlack text-[18px]">
                    Waiver of Premium Cover
                  </h3>
                  <p className="text-[14px] text-halfBlack">
                    In case of a permanent disability to the life insured all
                    future premiums will be paid by the insurance company.
                  </p>
                </div>
                <div className="w-full rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
                  <h3 className="font-semibold text-halfBlack text-[18px]">
                    Terminal Illness Benefit
                  </h3>
                  <p className="text-[14px] text-halfBlack">
                    If the policyholder is diagnosed with a terminal illness,
                    100% of life cover will be paid out immediately instead of
                    being paid on death.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </Slide>
  );
};

export default PlanDetailsSidebar;
