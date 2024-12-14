"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import CanadaLife from "../../assets/canada-life.png";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import {
  ArrowForwardIos,
  ExpandMore,
  Close,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { CSSTransition } from "react-transition-group";
import Star from "../../assets/star.svg";
import "./Head.css";
import PlanDetailsSidebar from "./PlanDetailsSidebar";
import Link from "next/link";
import WholeLifeConvertible from "./WholeLifeConvertible";
import AccidentalDeath from "./AccidentalDeath";
import CriticalIllness from "./CriticalIllnessRider";
import ChildrenRider from "./ChildrenRider";
import Premiums from "./Premiums";
import WholeLifeSidebar from "./WholeLifeSidebar";
import SavePaySideBar from "./SavePaySideBar";
import MortgageExp from "./MortgageExp";
import CiSidebar from "./CiSidebar";
import EnhancedCi from "./EnhancedCi";

const Quotes = ({
  insurance,
  decreasingTerm,
  yearly,
  mortgageSidebar,
  setMortgageSidebar,
  enhancedCi,
  setEnhancedCi,
  payTermLength,
  sidebarOpen,
  setSidebarOpen,
  enhanced,
  wlcOpen,
  setWlcOpen,
  accidentalDeath,
  criticalIllness,
  effSaving,
  setCriticalIllness,
  setAccidentalDeath,
  childrenRider,
  setChildrenRider,
  rtPremiums,
  setRtPremiums,
  ciSidebar,
  setCiSidebar,
  setEffSaving,
  wholeSidebar,
  setWholeSidebar,
  SpaySidebar,
  setSpaySidebar,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [paidAddons, setPaidAddons] = useState([]);
  const infoIconStyle = useMemo(
    () => ({
      fontSize: 16,
      color: "#BDBDBD",
      margin: "0px 4px",
    }),
    []
  );

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const toggleSidebar = useCallback(() => {
    const ins = localStorage.getItem("ins");
    if (ins === "whole-life") {
      setWholeSidebar(true);
      return;
    }
    if (ins === "critical-illness") {
      if (enhanced) {
        setEnhancedCi(true);
      } else {
        setCiSidebar(true);
      }
      return;
    }
    if (ins === "mortgage-insurance") {
      setMortgageSidebar(true);
      return;
    }
    setSidebarOpen((prev) => !prev);
    return;
  }, [setSidebarOpen, setCiSidebar, setEnhancedCi, enhanced]);

  const toggleWlc = useCallback(() => {
    setWlcOpen((prev) => !prev);
  }, [setWlcOpen]);

  const handleCheckboxChange = useCallback((isChecked, value) => {
    setPaidAddons((prev) =>
      isChecked ? [...prev, value] : prev.filter((addon) => addon !== value)
    );
  }, []);

  const insuranceDetails = useMemo(() => {
    const detailsMap = {
      "term-life": {
        label: "Max Coverage",
        value: "85 Years",
      },
      "whole-life": {
        label: "Pay Term",
        value: `${payTermLength}`,
      },
      "critical-illness": {
        label: "Plan Type",
        value: enhanced ? "Enhanced" : "Basic",
      },
      "mortgage-insurance": {
        label: "Plan type",
        value: !decreasingTerm ? "Decreasing Term" : "Level Term",
      },
      "level-term": {
        label: "Plan type",
        value: "Level Term",
      },
    };
    return detailsMap[insurance] || {};
  }, [insurance, payTermLength, enhanced, decreasingTerm]);

  const isOverlayOpen = useMemo(
    () =>
      sidebarOpen ||
      wlcOpen ||
      accidentalDeath ||
      criticalIllness ||
      childrenRider ||
      wholeSidebar ||
      sidebarOpen ||
      rtPremiums ||
      ciSidebar ||
      enhancedCi ||
      mortgageSidebar ||
      SpaySidebar,
    [
      sidebarOpen,
      wlcOpen,
      enhancedCi,
      mortgageSidebar,
      accidentalDeath,
      criticalIllness,
      childrenRider,
      ciSidebar,
      rtPremiums,
      wholeSidebar,
      SpaySidebar,
    ]
  );
  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOverlayOpen]);

  return (
    <div className="w-[845px] h-max mt-[0rem]  pb-[1rem]">
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10 pointer-events-none overflow-hidden"></div>
      )}
      <div className="w-full h-max flex justify-between items-center gap-[1rem] flex-col relative z-0">
        <div className="w-full rounded-lg h-max bg-white shadow-sidebar min-h-[190px] flex relative justify-between pb-[15px] items-center gap-[0px] flex-col">
          {useMemo(() => {
            switch (insurance) {
              case "term-life":
              case "level-term":
                return (
                  <div
                    onClick={toggleWlc}
                    className="w-max h-[30px] cursor-pointer self-start px-[1rem] py-[7px] mb-[12px] rounded-tl-[10px] rounded-br-[10px] bg-[#596B8A] text-white text-[12px] font-normal flex justify-center items-center gap-[3px]"
                  >
                    $ Whole life convertible - See How
                    <KeyboardArrowDownOutlined sx={{ fontSize: 16 }} />
                  </div>
                );
              case "whole-life":
                return payTermLength !== "Life 100 Pay" ? (
                  <div
                    onClick={() => {
                      setSpaySidebar(true);
                    }}
                    className="w-max cursor-pointer h-[30px] px-[1rem] self-start py-[7px] mb-[12px] rounded-tl-[10px] rounded-br-[10px] bg-[#AF7AB3] text-white text-[12px] font-normal flex justify-center items-center gap-[3px]"
                  >
                    $ Effective saving 40% - See How
                    <KeyboardArrowDownOutlined sx={{ fontSize: 16 }} />
                  </div>
                ) : (
                  <div className="w-max cursor-pointer h-[30px] px-[1rem] self-start py-[7px] mb-[12px] rounded-tl-[10px] rounded-br-[10px] text-white text-[12px] font-normal flex justify-center items-center gap-[3px]"></div>
                );
              case "critical-illness":
              case "mortgage-insurance":
              default:
                return <div className="h-[30px]"></div>;
            }
          }, [insurance, toggleWlc, payTermLength])}

          <div className="w-full h-max px-[2rem]  flex justify-between gap-[4rem] items-center">
            <div className="w-full h-full flex justify-between items-center ">
              <div className="flex  text-left justify-center gap-[3px] flex-col items-center w-[5rem]  h-[30px]">
                <Image
                  alt="insurance Provider"
                  width={100}
                  height={40}
                  className="object-cover object-center"
                  src={CanadaLife}
                />
              </div>
              <div className="flex text-left justify-center  px-[0px] gap-[5px] items-center w-max h-[30px]">
                <div className="text-grays w-full text-left text-[14px] text-nowrap font-normal leading-l1">
                  {insurance === "critical-illness" ||
                  insurance === "mortgage-insurance"
                    ? "Term Length"
                    : "Covered till"}
                </div>
                <div className="text-black  w-full text-left flex items-center text-nowrap text-sm font-medium leading-l1">
                  {insurance === "critical-illness" ||
                  insurance === "mortgage-insurance"
                    ? "20 Yrs"
                    : "100 Yrs"}
                  <InfoIcon sx={infoIconStyle} />
                </div>
              </div>
              {insuranceDetails.label && (
                <div className="flex text-left justify-center  px-[0px] gap-[5px] items-center w-max h-[30px]">
                  <div className="text-grays w-full text-left text-[14px] text-nowrap font-normal leading-l1">
                    {insuranceDetails.label}
                  </div>
                  <div className="text-black  w-full text-left flex items-center text-nowrap text-sm font-medium leading-l1">
                    {insuranceDetails.value}
                    <InfoIcon sx={infoIconStyle} />
                  </div>
                </div>
              )}
            </div>

            <div className="w-max flex justify-center items-center h-[30px] gap-[2rem] flex-row">
              <div className="font-semibold flex justify-center gap-1 items-center h-full flex-col text-center text-[20px] text-halfBlack">
                <div className="flex justify-center text-[18px] leading-[27px] items-center w-max gap-1">
                  $250.00{" "}
                  <span className="text-[14px]">{yearly ? "p/y" : "p/m"}</span>
                </div>
                <span className="text-text2 leading-l2 text-grays font-light w-max">
                  Incl. ${yearly ? "60" : "5"} policy fee
                </span>
              </div>
              <button className="w-full h-[45px] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] text-[14px] font-medium flex-col rounded-lg">
                Get this Rate
              </button>
            </div>
          </div>

          <div className="w-full my-[1rem]  h-[2px] bg-gradient-to-r from-transparent via-gray3 to-transparent"></div>

          <div className="w-full px-[2rem]  flex justify-between items-center flex-row-reverse">
            <button
              className="w-max px-[7px] flex justify-center items-center gap-[10px] font-normal text-[14px] h-[2.2rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition"
              onClick={toggleSidebar}
            >
              Plan info <ArrowForwardIos className="text-[14px]" />
            </button>
            <div className="w-max flex justify-center  items-center gap-[1rem]">
              {insurance !== "whole-life" &&
                insurance !== "mortgage-insurance" &&
                insurance !== "critical-illness" && (
                  <button
                    className="w-max px-[10px] flex justify-center items-center gap-[5px] font-normal text-[14px] h-[2.2rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition"
                    onClick={toggleExpanded}
                  >
                    2 Free Benefits{" "}
                    {expanded ? (
                      <Close className="text-[16px]" />
                    ) : (
                      <ExpandMore className="text-[16px]" />
                    )}
                  </button>
                )}

              {insurance !== "critical-illness" && (
                <button
                  onClick={toggleExpanded}
                  className="w-max px-[10px] flex justify-center items-center gap-[5px] font-normal text-[14px] h-[2.2rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition"
                >
                  2 Paid Benefits
                  <ExpandMore className="text-[16px]" />
                </button>
              )}

              {insurance === "critical-illness" && (
                <button
                  onClick={toggleExpanded}
                  className="w-max px-[7px] flex justify-center items-center gap-[10px] font-normal text-[14px] h-[2.2rem] border-solid border border-opposite text-halfBlack rounded-md hover:bg-gray-200 transition"
                >
                  Return of premium
                  <ExpandMore className="text-[16px]" />
                </button>
              )}
              <div className="flex justify-center items-center text-[14px] text-grays">
                <Star className="mx-2 text-[18px]" />
                Insurer Rating:
                <span className="font-semibold mx-1 text-black">A+</span>
              </div>
            </div>
          </div>
          <CSSTransition
            in={expanded}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="overflow-hidden mt-[10px] h-max flex flex-col items-start w-full">
              {paidAddons.length > 0 && (
                <div className="w- flex justify-start items-center gap-3 px-[2rem] py-2">
                  {paidAddons.map((addon) => (
                    <div key={addon} className="text-text1 leading-l1">
                      <input
                        type="checkbox"
                        checked
                        className="text-[20px] mx-[5px]"
                        onChange={() => handleCheckboxChange(false, addon)}
                      />
                      {addon}
                    </div>
                  ))}
                </div>
              )}
              <div className="py-5 pb-2 pt-1 px-[2rem] w-full flex justify-start items-center gap-[1.5rem]">
                {insurance !== "whole-life" &&
                  insurance !== "critical-illness" && (
                    <div className="w-[23rem] shadow-sidebar p-[1rem] pb-[10px] rounded-lg flex flex-col gap-[1rem]">
                      <div className="w-full flex justify-between items-center">
                        <div className="text-text1 leading-l1 font-medium text-halfBlack">
                          4 Free Benefits
                        </div>
                        <button
                          className=" w-[20px] flex items-center justify-center h-[20px] rounded-full bg-selected text-halfBlack"
                          onClick={toggleExpanded}
                        >
                          {expanded ? (
                            <Close className="text-[16px]" />
                          ) : (
                            <ExpandMore className="text-[16px]" />
                          )}
                        </button>
                      </div>
                      <div className="w-full h-[75px] flex flex-col gap-[10px] text-text1 leading-l1">
                        <div>
                          <CheckCircleOutlineOutlinedIcon className="text-[16px] mr-1" />
                          Waiver Of Premium Cover
                          <span className="text-primary2 mx-[5px]">free</span>
                        </div>
                        <div>
                          <CheckCircleOutlineOutlinedIcon className="text-[16px]" />{" "}
                          100% payout on Terminal illness
                          <span className="text-primary2 mx-[5px]">free</span>
                        </div>
                      </div>
                    </div>
                  )}
                {insurance !== "critical-illness" && (
                  <div className="w-[23rem]  shadow-sidebar p-[1rem] pb-[10px] rounded-lg flex flex-col gap-[1rem]">
                    <div className="w-full flex justify-between items-center">
                      <div className="text-text1 leading-l1 font-medium text-halfBlack">
                        4 Paid Benefits
                      </div>
                      <button
                        className="w-[20px] flex items-center justify-center h-[20px] rounded-full bg-selected text-halfBlack"
                        onClick={toggleExpanded}
                      >
                        {expanded ? (
                          <Close className="text-[16px]" />
                        ) : (
                          <ExpandMore className="text-[16px]" />
                        )}
                      </button>
                    </div>

                    <div className="w-full h-[75px] flex flex-col gap-[10px] text-text1 leading-l1">
                      <div
                        onClick={() => setAccidentalDeath(true)}
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          className="text-[20px] mx-[5px]"
                          checked={paidAddons.includes("accidental death $45")}
                          onChange={(e) =>
                            handleCheckboxChange(
                              e.target.checked,
                              "accidental death $45"
                            )
                          }
                        />
                        Extra Payout on
                        <Link
                          href="#"
                          className="text-[#0066FF] underline mx-1"
                        >
                          accidental death $45
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="text-[20px] mx-[5px]"
                          checked={paidAddons.includes(
                            "critical illnesses $65"
                          )}
                          onChange={(e) =>
                            handleCheckboxChange(
                              e.target.checked,
                              "critical illnesses $65"
                            )
                          }
                        />
                        Cover against 34
                        <Link
                          href="#"
                          className="text-[#0066FF] underline mx-2"
                          onClick={() => {
                            setCriticalIllness(true);
                          }}
                        >
                          critical illnesses $65
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="text-[20px] mx-[5px]"
                          checked={paidAddons.includes("Children Rider")}
                          onChange={(e) =>
                            handleCheckboxChange(
                              e.target.checked,
                              "Children Rider"
                            )
                          }
                        />
                        Children Rider
                        <Link
                          href="#"
                          className="text-[#0066FF] underline mx-2"
                          onClick={() => {
                            setChildrenRider(true);
                          }}
                        >
                          Children Rider
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {insurance === "critical-illness" && (
                  <div className="w-[23rem] shadow-sidebar p-[1rem] pb-[10px] pt-0 rounded-lg flex flex-col gap-[1rem]">
                    <div className="w-full relative flex justify-between items-center">
                      <button
                        className="w-[20px] flex  absolute right-0 top-[10px] items-center justify-center h-[20px] rounded-full bg-selected text-halfBlack"
                        onClick={toggleExpanded}
                      >
                        {expanded ? (
                          <Close className="text-[16px]" />
                        ) : (
                          <ExpandMore className="text-[16px]" />
                        )}
                      </button>
                    </div>

                    <div className="w-full h-[50px] flex flex-col gap-[10px] text-text1 leading-l1">
                      <div>
                        <input
                          type="checkbox"
                          checked={paidAddons.includes(
                            "Return of premium on death"
                          )}
                          className="text-[20px] mx-[5px]"
                          onChange={(e) =>
                            handleCheckboxChange(
                              e.target.checked,
                              "Return of premium on death"
                            )
                          }
                        />
                        Return of
                        <Link
                          onClick={() => {
                            setRtPremiums(true);
                          }}
                          href="#"
                          className="text-[#0066FF] underline mx-1"
                        >
                          premium on death
                        </Link>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          checked={paidAddons.includes(
                            "Return of premium on expiry"
                          )}
                          className="text-[20px] mx-[5px]"
                          onChange={(e) =>
                            handleCheckboxChange(
                              e.target.checked,
                              "Return of premium on expiry"
                            )
                          }
                        />
                        Return of
                        <Link
                          onClick={() => {
                            setRtPremiums(true);
                          }}
                          href="#"
                          className="text-[#0066FF] underline mx-2"
                        >
                          premium on expiry
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
      <CriticalIllness
        open={criticalIllness}
        onClose={() => setCriticalIllness(false)}
      />
      <PlanDetailsSidebar
        open={sidebarOpen}
        onClose={toggleSidebar}
        insurance={insurance}
        decreasingTerm={decreasingTerm}
      />
      <WholeLifeConvertible
        open={wlcOpen}
        onClose={toggleWlc}
        insurance={insurance}
        decreasingTerm={decreasingTerm}
      />
      <AccidentalDeath
        open={accidentalDeath}
        onClose={() => setAccidentalDeath(false)}
      />

      <ChildrenRider
        open={childrenRider}
        onClose={() => setChildrenRider(false)}
      />

      <WholeLifeSidebar
        open={wholeSidebar}
        onClose={() => setWholeSidebar(false)}
      />
      <SavePaySideBar
        payTermLength={payTermLength}
        open={SpaySidebar}
        onClose={() => {
          setSpaySidebar(false);
        }}
      />
      <MortgageExp
        open={mortgageSidebar}
        onClose={() => {
          setMortgageSidebar(false);
        }}
      />
      <EnhancedCi
        open={enhancedCi}
        onClose={() => {
          setEnhancedCi(false);
        }}
      />
      <CiSidebar
        open={ciSidebar}
        onClose={() => {
          setCiSidebar(false);
        }}
      />
      <Premiums open={rtPremiums} onClose={() => setRtPremiums(false)} />
    </div>
  );
};

export default Quotes;
