// const PlanDetailsSidebar = ({ open, onClose, insurance, decreasingTerm }) => {
//   const [activeTab, setActiveTab] = useState("Plan Summary");

//   return (
//     <Slide direction="left" in={open} mountOnEnter unmountOnExit>
//       <div className="fixed top-0 right-0 h-[100vh] w-[600px] select-none overflow-y-scroll z-[30] overflow-x-hidden bg-white shadow-lg p-5 flex flex-col">
//         <div className="flex justify-between items-center mb-4">
//           <button
//             onClick={onClose}
//             className="self-start text-halfBlack hover:text-black transition"
//           >
//             <Close />
//           </button>
//           <Image
//             src={logo}
//             alt="Logo"
//             className="mx-auto object-cover object-center relative left-[-150px]"
//             width={100}
//             height={100}
//           />
//         </div>

//         <div className="flex gap-3 pb-2 my-5 text-center">
//           <button
//             onClick={() => setActiveTab("Plan Summary")}
//             className={`w-[10rem] h-[2.8rem] px-3 py-1 rounded-[5px] font-normal bg-[#f4f4f4] ${
//               activeTab === "Plan Summary"
//                 ? "border-solid border-b-[3px] font-semibold text-opposite border-opposite"
//                 : ""
//             }`}
//           >
//             {insurance === "mortgage-insurance"
//               ? decreasingTerm
//                 ? "Decreasing Term"
//                 : "Level Term"
//               : "Plan Summary"}
//           </button>
//           <button
//             onClick={() => setActiveTab("Riders")}
//             className={` w-[10rem] h-[2.8rem] px-3 py-1 rounded-[5px] font-normal bg-[#f4f4f4]  ${
//               activeTab === "Riders"
//                 ? "border-solid border-b-[3px] font-semibold text-opposite border-opposite"
//                 : ""
//             } `}
//           >
//             Riders
//           </button>
//         </div>

//         <CSSTransition
//           in={activeTab === "Plan Summary"}
//           timeout={270}
//           classNames="fade"
//           unmountOnExit
//         >
//           <div className="w-full h-max flex flex-col py-2 gap-6">
//             {/* Top Plan Details */}
//             <div className="w-full flex h-max justify-start items-center gap-[1.5rem] flex-col">
//               <div className="w-full h-max p-4 py-3 bg-primary2/10 flex flex-col gap-1 rounded-lg shadow-sidebar">
//                 <h2 className="font-semibold text-halfBlack text-[15px]">
//                   Plan Details
//                 </h2>
//                 <p className="text-text1 leading-[24px] text-halfBlack">
//                   In the event of your death during the policy term, your
//                   nominee will receive the sum assured amount, free from taxes.
//                 </p>
//               </div>

//               {insurance === "term-life" && (
//                 <>
//                   <div className="w-full bg-opposite/10 h-max p-4 py-3 flex flex-col gap-1 rounded-lg shadow-sidebar">
//                     <h2 className="font-medium text-black text-[15px]">
//                       Policy Benefits
//                     </h2>
//                     <p className="text-text1 leading-[24px] text-halfBlack">
//                       Covers death from any cause, including natural events,
//                       accidents, and illnesses.
//                     </p>
//                   </div>
//                   <div className="w-full h-max p-4 py-3 bg-secondary/10 flex flex-col gap-1 rounded-lg shadow-sidebar">
//                     <h2 className="font-semibold text-black text-[16px]">
//                       Exclusions
//                     </h2>
//                     <p className="text-text1 leading-[24px] text-halfBlack">
//                       Suicide is excluded during the first two years of the
//                       policy.
//                     </p>
//                   </div>
//                 </>
//               )}

//               {insurance === "mortgage-insurance" && (
//                 <>
//                   <div className="w-full bg-opposite/10 h-max p-4 py-3 flex flex-col gap-1 rounded-lg shadow-sidebar">
//                     <h2 className="font-semibold text-halfBlack text-[15px]">
//                       Renewability
//                     </h2>
//                     <p className="text-text1 leading-[24px] text-halfBlack">
//                       The policy auto-renews at the end of each term without a
//                       medical exam, with premiums increasing by age, until 85.
//                     </p>
//                   </div>
//                   <div className="w-full h-max p-4 py-3 bg-secondary/10 flex flex-col gap-1 rounded-lg shadow-sidebar">
//                     <h2 className="font-semibold text-black text-[16px]">
//                       Exclusions
//                     </h2>
//                     <p className="text-text1 leading-[24px] text-halfBlack">
//                       Suicide is excluded during the first two years of the
//                       policy.
//                     </p>
//                   </div>
//                 </>
//               )}

//               <div className="w-full flex h-full justify-between items-center gap-4">
//                 <div className="w-full h-[8rem] p-4 py-3 flex flex-col gap-1 rounded-lg shadow-sidebar">
//                   <h2 className="font-semibold text-halfBlack text-[15px]">
//                     Renewability
//                   </h2>
//                   <p className="text-text1 leading-[24px] text-halfBlack">
//                     The policy auto-renews at the end of each term without a
//                     medical exam until 85 years.
//                   </p>
//                 </div>
//                 <div className="w-full min-h-[8rem] p-4 py-3 flex flex-col gap-1 rounded-lg shadow-sidebar">
//                   <h2 className="font-semibold text-halfBlack text-[15px]">
//                     Convertibility
//                   </h2>
//                   <p className="text-text1 leading-[24px] text-halfBlack">
//                     The policy can be converted to whole life insurance before
//                     age 70.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* How Does it Work Section */}
//             <div className="w-full relative mt-[1.5rem] border-solid border border-halfBlack/30 rounded-lg">
//               <h3 className="font-semibold text-primary text-[20px] mt-4 w-max left-[20px] text-left px-2 relative top-[-33px] bg-white">
//                 How Does it Work?
//               </h3>

//               <div className="mt-[0rem] relative  pr-[20px]">
//                 {/* <Bracket className="text-[350px] absolute  top-[10px] left-[80px]" /> */}
//                 <Timeline position="left" className="w-full py-10 px-0 pt-0">
//                   <TimelineItem className="py-0 relative   ">
//                     <TimelineContent className="flex items-center">
//                       <div className="pb-[3rem] relative top-[0px]">
//                         <div className="mr-2 p-3 w-[350px]  bg-secondary/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
//                           <p className="text-black w-full text-left text-[13px] font-medium">
//                             You begin paying the monthly premiums
//                           </p>
//                         </div>
//                       </div>
//                     </TimelineContent>
//                     <TimelineSeparator>
//                       <TimelineDot className="bg-halfBlack ">
//                         <MonetizationOnIcon />
//                       </TimelineDot>
//                       <TimelineConnector className="bg-halfBlack  " />
//                     </TimelineSeparator>
//                     <TimelineOppositeContent className="flex items-center justify-start">
//                       <span className="text-opposite font-semibold text-right w-full text-[16px] relative top-[-20px]">
//                         Age 37
//                       </span>
//                     </TimelineOppositeContent>
//                   </TimelineItem>

//                   {/* 2nd Event */}
//                   <TimelineItem className="py-0">
//                     <TimelineContent className="flex items-center">
//                       <div className="pb-[1.5rem] relative top-[-20px]">
//                         <div className="mr-2 p-3 w-[350px] bg-secondary/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
//                           <p className="text-black w-full text-left text-[13px] font-medium">
//                             If you pass away during the term, your family will
//                             receive the full sum assured, tax-free.
//                           </p>
//                         </div>
//                       </div>
//                     </TimelineContent>
//                     <TimelineSeparator>
//                       <TimelineDot className="bg-halfBlack ">
//                         <Rip className="text-[24px]" />
//                       </TimelineDot>{" "}
//                       <TimelineConnector className="bg-halfBlack" />
//                     </TimelineSeparator>
//                     <TimelineOppositeContent className="flex items-center justify-start">
//                       <span className="relative top-[-30px] text-halfBlack text-[13px]"></span>
//                     </TimelineOppositeContent>
//                   </TimelineItem>

//                   <TimelineItem className="py-0">
//                     <TimelineContent className="flex items-center">
//                       <div className="pb-[1.5rem] relative top-[-10px]">
//                         <div className="mr-2 p-3 w-[350px] bg-secondary/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
//                           <p className="text-black w-full text-left text-[13px] font-medium">
//                             Convert to a whole life policy before this period,
//                             or the coverage will end with no cash value.{" "}
//                           </p>
//                         </div>
//                       </div>
//                     </TimelineContent>
//                     <TimelineSeparator>
//                       <TimelineDot className="bg-halfBlack ">
//                         <HourglassBottom />
//                       </TimelineDot>
//                       <TimelineConnector className="bg-halfBlack" />
//                     </TimelineSeparator>
//                     <TimelineOppositeContent className="flex items-center justify-start">
//                       <span className="text-blue-500 font-semibold text-[16px] w-full text-right relative top-[-25px]">
//                         Age 57
//                       </span>
//                     </TimelineOppositeContent>
//                   </TimelineItem>

//                   {/* 4th Event */}
//                   <TimelineItem className="py-0">
//                     <TimelineContent className="flex items-center">
//                       <div className="pb-[3rem] relative top-[-0px]">
//                         <div className="mr-2 p-3 w-[350px] bg-primary2/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
//                           <p className="text-black w-full text-left text-[13px] font-medium">
//                             If converted to a whole life policy, coverage
//                             continues and builds cash value.{" "}
//                           </p>
//                         </div>
//                       </div>
//                     </TimelineContent>
//                     <TimelineSeparator>
//                       <TimelineDot className="bg-halfBlack">
//                         <Savings />
//                       </TimelineDot>
//                       <TimelineConnector className="bg-halfBlack" />
//                     </TimelineSeparator>
//                     <TimelineOppositeContent className="flex items-center justify-start">
//                       <span className="text-halfBlack text-[13px] relative top-[-10px]"></span>
//                     </TimelineOppositeContent>
//                   </TimelineItem>

//                   {/* 5th Event - Age 100 yrs */}
//                   <TimelineItem className="py-0 ">
//                     <TimelineContent className="flex items-center">
//                       <div className=" pb-0 relative top-[-10px]">
//                         <div className="mr-2 p-3 w-[350px] bg-primary2/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
//                           <p className="text-black w-full text-left text-[13px] font-medium">
//                             The policy ends at age 100 or when you pass away
//                             (whichever comes first) and your family gets the
//                             death benefit and cash value.
//                           </p>
//                         </div>
//                       </div>
//                     </TimelineContent>
//                     <TimelineSeparator>
//                       <TimelineDot className="bg-halfBlack">
//                         <Security />
//                       </TimelineDot>
//                       {/* No connector on the final item */}
//                     </TimelineSeparator>
//                     <TimelineOppositeContent className="flex items-center justify-start">
//                       <span className="text-halfBlack font-semibold text-[16px] text-wrap w-full text-right relative top-[-25px]">
//                         Age 100
//                       </span>
//                     </TimelineOppositeContent>
//                   </TimelineItem>
//                 </Timeline>
//               </div>
//             </div>

//             {/* <div className="w-[60vw] my-[20px] mt-0 h-[1px] bg-gradient-to-r from-transparent via-halfBlack to-transparent"></div> */}
//             <div className="w-full flex justify-start px-[20px] items-center gap-4">
//               <div className="font-semibold text-center text-[20px] text-halfBlack">
//                 $270.00 <span className="text-[16px] font-medium">/Month</span>
//               </div>
//               <button className="w-[8rem] h-[3rem] flex justify-center items-center bg-secondary text-black px-[15px] py-[5px] gap-[10px] rounded-lg">
//                 Get this Rate
//               </button>
//             </div>
//           </div>
//         </CSSTransition>

//         <CSSTransition
//           in={activeTab === "Riders"}
//           timeout={270}
//           classNames="fade"
//           unmountOnExit
//         >
//           <div className="flex flex-col gap-[2rem]">
//             <div className="flex flex-col gap-[1.5rem]">
//               <h2 className="w-full text-left font-medium text-[20px] text-halfBlack">
//                 Paid Riders
//               </h2>
//               <div className="w-full h-max grid grid-cols-1 gap-4">
//                 <div className="w-full bg-primary2/10 rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
//                   <h3 className="font-semibold text-halfBlack text-[16px]">
//                     Extra Payout on Accidental death
//                   </h3>
//                   <p className="text-[14px] text-halfBlack">
//                     In case of accidental death an additional amount of Rs.10
//                     Lac will be paid out to the nominee.
//                   </p>
//                 </div>
//                 <div className="w-full bg-opposite/10 rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
//                   <h3 className="font-semibold text-halfBlack text-[16px]">
//                     Extra Payout on Accidental death
//                   </h3>
//                   <p className="text-[14px] text-halfBlack">
//                     In case of accidental death an additional amount of Rs.10
//                     Lac will be paid out to the nominee.
//                   </p>
//                 </div>
//               </div>

//               <div className="w-full bg-secondary/10 rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
//                 <h3 className="font-semibold text-halfBlack text-[18px]">
//                   Waiver of Premium Cover
//                 </h3>
//                 <p className="text-[14px] text-halfBlack">
//                   As per your age you can exit the policy during the age of 63
//                   years. All premiums paid (excluding GST) shall...
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col gap-5">
//               <h2 className="w-full text-left font-medium text-[20px] text-halfBlack">
//                 Free Riders
//               </h2>
//               <div className="w-full h-max grid grid-cols-1 gap-4">
//                 <div className="w-full rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
//                   <h3 className="font-semibold text-halfBlack text-[18px]">
//                     Waiver of Premium Cover
//                   </h3>
//                   <p className="text-[14px] text-halfBlack">
//                     In case of a permanent disability to the life insured all
//                     future premiums will be paid by the insurance company.
//                   </p>
//                 </div>
//                 <div className="w-full rounded-lg shadow-sidebar p-3 flex flex-col gap-2">
//                   <h3 className="font-semibold text-halfBlack text-[18px]">
//                     Terminal Illness Benefit
//                   </h3>
//                   <p className="text-[14px] text-halfBlack">
//                     If the policyholder is diagnosed with a terminal illness,
//                     100% of life cover will be paid out immediately instead of
//                     being paid on death.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </CSSTransition>
//       </div>
//     </Slide>
//   );
// };

// export default PlanDetailsSidebar;

// // <div>
// // <div className="w-full h-max p-4 py-3 bg-white flex flex-col gap-1 rounded-lg shadow-sidebar">
// //   <h2 className="font-semibold text-primary text-[15px]">
// //     What is a Whole life convertible Term plan{" "}
// //   </h2>
// //   <p className="text-text1 leading-[24px] text-halfBlack">
// //     A Whole Life Convertible Term Plan offers temporary coverage
// //     with the option to convert it into a permanent whole life policy
// //     later, without needing additional medical tests.
// //   </p>
// // </div>
// // </div>
// // <div className="w-full relative mt-[1.5rem] border-solid border border-halfBlack/30 rounded-lg">
// // <h3 className="font-semibold text-primary text-[20px] mt-4 w-max left-[20px] text-left px-2 relative top-[-33px] bg-white">
// //   How Does it Work?
// // </h3>

// // <div className="mt-[0rem] relative  pr-[20px]">
// //   {/* <Bracket className="text-[350px] absolute  top-[10px] left-[80px]" /> */}
// //   <Timeline position="left" className="w-full py-10 px-0 pt-0">
// //     <TimelineItem className="py-0 relative   ">
// //       <TimelineContent className="flex items-center">
// //         <div className="pb-[3rem] relative top-[0px]">
// //           <div className="mr-2 p-3 w-[350px]  bg-secondary/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
// //             <p className="text-black w-full text-left text-[13px] font-medium">
// //               You begin paying the monthly premiums
// //             </p>
// //           </div>
// //         </div>
// //       </TimelineContent>
// //       <TimelineSeparator>
// //         <TimelineDot className="bg-halfBlack ">
// //           <MonetizationOnIcon />
// //         </TimelineDot>
// //         <TimelineConnector className="bg-halfBlack  " />
// //       </TimelineSeparator>
// //       <TimelineOppositeContent className="flex items-center justify-start">
// //         <span className="text-opposite font-semibold text-right w-full text-[16px] relative top-[-20px]">
// //           Age 37
// //         </span>
// //       </TimelineOppositeContent>
// //     </TimelineItem>

// //     {/* 2nd Event */}
// //     <TimelineItem className="py-0">
// //       <TimelineContent className="flex items-center">
// //         <div className="pb-[1.5rem] relative top-[-20px]">
// //           <div className="mr-2 p-3 w-[350px] bg-secondary/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
// //             <p className="text-black w-full text-left text-[13px] font-medium">
// //               If you pass away during the term, your family will
// //               receive the full sum assured, tax-free.
// //             </p>
// //           </div>
// //         </div>
// //       </TimelineContent>
// //       <TimelineSeparator>
// //         <TimelineDot className="bg-halfBlack ">
// //           <Rip className="text-[24px]" />
// //         </TimelineDot>{" "}
// //         <TimelineConnector className="bg-halfBlack" />
// //       </TimelineSeparator>
// //       <TimelineOppositeContent className="flex items-center justify-start">
// //         <span className="relative top-[-30px] text-halfBlack text-[13px]"></span>
// //       </TimelineOppositeContent>
// //     </TimelineItem>

// //     <TimelineItem className="py-0">
// //       <TimelineContent className="flex items-center">
// //         <div className="pb-[1.5rem] relative top-[-10px]">
// //           <div className="mr-2 p-3 w-[350px] bg-secondary/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
// //             <p className="text-black w-full text-left text-[13px] font-medium">
// //               Convert to a whole life policy before this period, or
// //               the coverage will end with no cash value.{" "}
// //             </p>
// //           </div>
// //         </div>
// //       </TimelineContent>
// //       <TimelineSeparator>
// //         <TimelineDot className="bg-halfBlack ">
// //           <HourglassBottom />
// //         </TimelineDot>
// //         <TimelineConnector className="bg-halfBlack" />
// //       </TimelineSeparator>
// //       <TimelineOppositeContent className="flex items-center justify-start">
// //         <span className="text-blue-500 font-semibold text-[16px] w-full text-right relative top-[-25px]">
// //           Age 57
// //         </span>
// //       </TimelineOppositeContent>
// //     </TimelineItem>

// //     {/* 4th Event */}
// //     <TimelineItem className="py-0">
// //       <TimelineContent className="flex items-center">
// //         <div className="pb-[3rem] relative top-[-0px]">
// //           <div className="mr-2 p-3 w-[350px] bg-primary2/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
// //             <p className="text-black w-full text-left text-[13px] font-medium">
// //               If converted to a whole life policy, coverage
// //               continues and builds cash value.{" "}
// //             </p>
// //           </div>
// //         </div>
// //       </TimelineContent>
// //       <TimelineSeparator>
// //         <TimelineDot className="bg-halfBlack">
// //           <Savings />
// //         </TimelineDot>
// //         <TimelineConnector className="bg-halfBlack" />
// //       </TimelineSeparator>
// //       <TimelineOppositeContent className="flex items-center justify-start">
// //         <span className="text-halfBlack text-[13px] relative top-[-10px]"></span>
// //       </TimelineOppositeContent>
// //     </TimelineItem>

// //     {/* 5th Event - Age 100 yrs */}
// //     <TimelineItem className="py-0 ">
// //       <TimelineContent className="flex items-center">
// //         <div className=" pb-0 relative top-[-10px]">
// //           <div className="mr-2 p-3 w-[350px] bg-primary2/10 shadow-xl border border-grays/20 border-solid rounded-lg flex items-center gap-2">
// //             <p className="text-black w-full text-left text-[13px] font-medium">
// //               The policy ends at age 100 or when you pass away
// //               (whichever comes first) and your family gets the death
// //               benefit and cash value.
// //             </p>
// //           </div>
// //         </div>
// //       </TimelineContent>
// //       <TimelineSeparator>
// //         <TimelineDot className="bg-halfBlack">
// //           <Security />
// //         </TimelineDot>
// //         {/* No connector on the final item */}
// //       </TimelineSeparator>
// //       <TimelineOppositeContent className="flex items-center justify-start">
// //         <span className="text-halfBlack font-semibold text-[16px] text-wrap w-full text-right relative top-[-25px]">
// //           Age 100
// //         </span>
// //       </TimelineOppositeContent>
// //     </TimelineItem>
// //   </Timeline>
// // </div>
// // </div>

import React, { useState } from "react";
import { Slide } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  RefreshCw,
  Shield,
} from "lucide-react";
import logo from "../../assets/canada-life.png";
import { CloseOutlined } from "@mui/icons-material";
import Image from "next/image";

export default function PlanDetailsSidebar({ open, onClose }) {
  // Added open and onClose props
  const [activeTab, setActiveTab] = useState("Plan Summary");
  const [activeStep, setActiveStep] = useState(null);

  const conversionSteps = [
    {
      icon: Shield,
      title: "Timeline",
      details: "Submit before age 65",
      subDetails: "Convert any time before maximum age limit",
    },
    {
      icon: Shield,
      title: "Plan Selection",
      details: "Choose Whole Life plan",
      subDetails: "Multiple premium payment options available",
    },
    {
      icon: CreditCard,
      title: "Premium Adjustment",
      details: "New premium calculation",
      subDetails: "Based on age at conversion",
    },
    {
      icon: CheckCircle2,
      title: "Policy Issuance",
      details: "New policy documentation",
      subDetails: "Previous years credited to new policy",
    },
  ];

  const premiumData = [
    { age: "25", premium: 650 },
    { age: "35", premium: 900 },
    { age: "45", premium: 1300 },
    { age: "55", premium: 2600 },
  ];

  const benefits = [
    {
      title: "Family Security",
      desc: "Protection for loved ones",
    },
    {
      title: "Low Cost",
      desc: "Affordable payments",
    },
    {
      title: "High Coverage",
      desc: "Large protection",
    },
  ];

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <div className="fixed top-0 right-0 h-[100vh] w-[720px] select-none overflow-y-scroll z-[30] overflow-x-hidden bg-white shadow-lg  flex flex-col">
        <div className="bg-[#F0F1F2] text-white p-4 px-5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
              }}
            >
              <CloseOutlined sx={{ fontSize: "20px", color: "black" }} />
            </button>
            <Image
              src={logo}
              alt="Logo"
              className="mx-auto object-cover object-center relative left-[-150px]"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="p-4">
          <div className="flex gap-3 mb-5">
            {["Plan Summary", "Riders"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded font-medium ${
                  activeTab === tab
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Plan Summary" && (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold mb-2">Plan Details</h3>
                <div className="text-sm font-normal">
                  In the event of the your death during the policy term, your
                  nominee will receive the sum assured amountl, fee from taxes
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold mb-2">Exclusions</h3>
                <div className="text-sm font-normal">
                  Suicide is excluded during the first two years of policy.{" "}
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold mb-3 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Plan Renewability
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-sm">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        Maximum Renewal Age: 80 years
                      </li>{" "}
                      <li className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        Grace Period: 30 days
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-sm">Terms</h4>
                    <ul className="space-y-2">
                      {" "}
                      <li className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        Medical Exam: Not Required
                      </li>{" "}
                      <li className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        Premium Changes: Yes, at renewal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" p-4 rounded-lg bg-purple-50">
                  <h3 className="text-md font-semibold mb-3 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5" />
                    Plan Convertibility
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-sm">
                        Conversion Options
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2  text-sm">
                          <ArrowRight className="w-4 h-4 text-purple-500" />
                          Maximum Age: 65 years
                        </li>
                        <li className="flex items-center gap-2  text-sm">
                          <ArrowRight className="w-4 h-4 text-purple-500" />
                          Available Plans: Whole Life, Universal Life
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-2  text-sm">Terms</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2  text-sm">
                          <ArrowRight className="w-4 h-4  text-sm text-purple-500" />
                          Medical Requirements: Not required
                        </li>
                        <li className="flex items-center gap-2  text-sm">
                          <ArrowRight className="w-4 h-4 text-purple-500" />
                          Policy Credit: All previous years credited
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Cost of delay</h3>
                <div className="bg-white p-4 rounded-lg h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={premiumData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="age" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="premium"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 6 }}
                        activeDot={{ r: 8, stroke: "#3b82f6", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className=" p-4 rounded-lg bg-purple-50">
                <h4 className="text-md font-semibold mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Whole Life Conversion Process
                </h4>

                <div className="grid grid-cols-4 gap-4">
                  {conversionSteps.map((step, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105"
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      <step.icon className="w-6 h-6 text-blue-600 mb-2" />
                      <h4 className="font-medium text-sm mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.details}</p>
                      {activeStep === index && (
                        <p className="text-xs text-blue-600 mt-2 transition-opacity duration-200">
                          {step.subDetails}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Riders" && (
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Available Riders</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-medium text-purple-600">
                    Accidental Death Benefit
                  </h4>
                  <p className="text-sm text-gray-600">
                    Additional payout for accidental death
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-medium text-purple-600">
                    Premium Waiver
                  </h4>
                  <p className="text-sm text-gray-600">
                    Waives premiums in case of disability
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Slide>
  );
}
