import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import logo from "../../assets/canada-life.png";
import { CSSTransition } from "react-transition-group";
import "./Head.css";

const PlanDetailsSidebar = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("Plan Summary");

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <div className="fixed top-0 right-0 h-[100vh] w-[40vmax] overflow-y-scroll scrollbar-hidden z-30 overflow-x-hidden bg-white shadow-lg p-5 flex flex-col">
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
            className="mx-auto object-cover object-center relative left-[-180px]"
            width={100}
            height={100}
          />
        </div>

        <div className="flex gap-3  pb-2 my-5 text-center ">
          <button
            onClick={() => setActiveTab("Plan Summary")}
            className={`w-[10rem] h-[2.8rem] px-3 py-1 rounded-[5px] font-normal bg-[#f4f4f4] ${
              activeTab === "Plan Summary" &&
              "border-solid border-b-[3px] font-semibold text-opposite border-opposite"
            } `}
          >
            Plan Summary
          </button>
          <button
            onClick={() => setActiveTab("Riders")}
            className={` w-[10rem] h-[2.8rem] px-3 py-1 rounded-[5px] font-normal bg-[#f4f4f4]  ${
              activeTab === "Riders" &&
              "border-solid border-b-[3px] font-semibold text-opposite border-opposite"
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
          <div className="w-full h-max flex justify-start items-center gap-6 flex-col px-4 py-2">
            <div className="w-full flex h-max justify-start items-center gap-6 flex-col">
              <div className="w-full h-max p-4 flex justify-start items-start  gap-2 rounded-lg shadow-sidebar flex-col">
                <h2 className="font-semibold text-primary text-[18px]">
                  Know Your Plan
                </h2>
                <p className="text-[14px] text-black">
                  In the event of your death during the policy term, your
                  nominee will receive the sum assured amount, free from taxes.
                </p>
              </div>
              <div className="w-full flex h-full justify-between items-center gap-6">
                <div className="w-full h-[9rem] p-4 flex justify-start items-start  gap-2 rounded-lg shadow-sidebar flex-col">
                  <h2 className="font-medium text-black text-[18px]">
                    Policy Benefits
                  </h2>
                  <p className="text-[14px] text-black">
                    Covers death from any cause, including natural events,
                    accidents, and illnesses.
                  </p>
                </div>
                <div className="w-full min-h-[9rem] p-4 flex justify-start items-start  gap-2 rounded-lg shadow-sidebar flex-col">
                  <h2 className="font-semibold text-black text-[18px]">
                    Exclusions{" "}
                  </h2>
                  <p className="text-[14px] text-black">
                    Suicide is excluded during the first two years of the
                    policy.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-white shadow-sidebar rounded-xl p-4 flex  justify-start items-center flex-col gap-3 w-full">
                <div className="font-semibold text-[25px] text-opposite">
                  99.99%
                </div>
                <p className="text-gray text-center text-[14px]">
                  of all claims filed last year were settled by HDFC Life
                </p>
              </div>

              <div className="bg-white shadow-sidebar rounded-xl p-4 flex  justify-start items-center flex-col gap-3 w-full">
                <div className="font-semibold text-[25px] text-[#0066FF]">
                  99.99%
                </div>
                <p className="text-gray text-center text-[14px]">
                  of all claims filed last year were settled by HDFC Life
                </p>
              </div>
              <div className="bg-white shadow-sidebar rounded-xl p-4 flex  justify-start items-center flex-col gap-3 w-full">
                <div className="font-semibold text-[25px] text-[#FF8913]">
                  99.99%
                </div>
                <p className="text-gray text-center text-[14px]">
                  of all claims filed last year were settled by HDFC Life
                </p>
              </div>
            </div>
            <div className="w-[60vw] my-[20px] h-[1px] bg-gradient-to-r from-transparent via-halfBlack to-transparent"></div>
            <div className="w-full flex justify-center items-center gap-4">
              <div className="font-semibold text-center text-[20px] text-halfBlack">
                $250.00 <span className="text-[16px] font-medium">/Month</span>
              </div>{" "}
              <button className="w-[8rem] h-[3rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
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
          <div className="flex justify-start items-center flex-col gap-[3rem] px-4">
            <div className="flex justify-start items-center gap-5 flex-col">
              <h2 className="w-full text-left font-medium text-[20px] text-halfBlack">
                Free Riders
              </h2>
              <div className="w-full h-max grid grid-cols-2 gap-4">
                <div className="flex justify-start items-center ">
                  <div className="relative w-full shadow-sidebar h-[12rem]   flex justify-start flex-col  rounded-lg overflow-hidden items-start gap-0 pb-5">
                    <div className="self-start px-4 py-1 rounded-br-lg text-gray top-0 left-0 font-medium bg-selected2">
                      Free
                    </div>
                    <div className="p-3 flex gap-3 flex-col justify-start items-start">
                      <div className="font-semibold text-halfBlack text-[18px]">
                        Wavier of Premium Cover
                      </div>
                      <p className=" text-[14px] text-halfBlack">
                        In case of a permanent disability to the life insured
                        all future premiums will be paid by the insurance
                        company.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex justify-start items-center ">
                  <div className="relative w-full shadow-sidebar   h-[12rem] flex justify-start flex-col  rounded-lg overflow-hidden items-start gap-0 pb-5">
                    <div className="self-start px-4 py-1 rounded-br-lg text-gray top-0 left-0 font-medium bg-selected2">
                      Free
                    </div>
                    <div className="p-3 flex gap-3 flex-col justify-start items-start">
                      <div className="font-semibold text-halfBlack text-[18px]">
                        Wavier of Premium Cover
                      </div>
                      <p className=" text-[14px] text-halfBlack">
                        In case the policyholder is diagnosed with a terminal
                        illness, 100% of life cover will be paid out immediately
                        instead of being paid on death.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex justify-start items-center ">
                  <div className="relative w-full shadow-sidebar   h-[12rem]  flex justify-start flex-col  rounded-lg overflow-hidden items-start gap-0 pb-5">
                    <div className="self-start px-4 py-1 rounded-br-lg text-gray top-0 left-0 font-medium bg-selected2">
                      Free
                    </div>
                    <div className="p-3 flex gap-3 flex-col justify-start items-start">
                      <div className="font-semibold text-halfBlack text-[18px]">
                        Wavier of Premium Cover
                      </div>
                      <p className=" text-[14px] text-halfBlack">
                        As per your age you can exit the policy during the age
                        of 63 years. All premiums paid(excluding GST) shall
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-5 flex-col">
              <h2 className="w-full text-left font-medium text-[20px] text-halfBlack">
                Paid Riders
              </h2>
              <div className="w-full h-max grid grid-cols-2 gap-4">
                <div className="flex justify-start items-center ">
                  <div className="relative w-full shadow-sidebar h-[12rem]   flex justify-start flex-col  rounded-lg overflow-hidden items-start gap-0 pb-5">
                    <div className="self-start px-4 py-1 rounded-br-lg text-gray top-0 left-0 font-medium bg-[#efc93daf]">
                      $25/m
                    </div>
                    <div className="p-3 flex gap-3 flex-col justify-start items-start">
                      <div className="font-semibold text-halfBlack text-[16px]">
                        Extra Payout on Accidental death{" "}
                      </div>
                      <p className=" text-[14px] text-halfBlack">
                        Incase of accidental death an additional amount of Rs.10
                        Lac will be paid out to the nominee
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex justify-start items-center ">
                  <div className="relative w-full shadow-sidebar   h-[12rem] flex justify-start flex-col  rounded-lg overflow-hidden items-start gap-0 pb-5">
                    <div className="self-start px-4 py-1 rounded-br-lg text-gray top-0 left-0 font-medium bg-[#efc93daf]">
                      $25/m
                    </div>
                    <div className="p-3 flex gap-3 flex-col justify-start items-start">
                      <div className="font-semibold text-halfBlack text-[16px]">
                        Extra Payout on Accidental death{" "}
                      </div>
                      <p className=" text-[14px] text-halfBlack">
                        Incase of accidental death an additional amount of Rs.10
                        Lac will be paid out to the nominee
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </Slide>
  );
};

export default PlanDetailsSidebar;
