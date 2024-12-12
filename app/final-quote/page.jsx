"use client";
import React, { useEffect, useState } from "react";
import Head from "@/Pages/FinalQuote/Head";
import Quotes from "@/Pages/FinalQuote/Quotes";
import Sidebar from "@/Pages/FinalQuote/Sidebar";
import Modal from "@mui/material/Modal";
import ChooseSmoker from "@/Pages/Quote-form/ChooseSomker";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/navigation";
import { uploadPostData } from "../api";
import ChooseCoverageType from "@/Pages/FinalQuote/ChangeCoverageType";
import EffectiveSaving from "@/Pages/FinalQuote/EffectiveSaving";
import TalkToExpert from "@/Pages/FinalQuote/TalkToExpert";

const FinalQuote = () => {
  const [effSaving, setEffSaving] = useState(false);
  const [showEFfSaving, setShowEffSaving] = useState(false);
  const [openPopup, setOpenPopup] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [decreasingTerm, setDecreasingTerm] = useState(false);
  const [insurance, setInsurance] = useState("term-life");
  const [quoteData, setQuoteData] = useState({});
  const [enhanced, setEnhanced] = useState(false);
  const [choosePopup, setChoosePopup] = useState(false);
  const [yearly, setYearly] = useState(false);
  const [payTermLength, setPayTermLength] = useState("Life 100 Pay");
  const [isWholeLife, setIsWholeType] = useState(false);
  const [wlcOpen, setWlcOpen] = useState(false);
  const [accidentalDeath, setAccidentalDeath] = useState(false);
  const [childrenRider, setChildrenRider] = useState(false);
  const [criticalIllness, setCriticalIllness] = useState(false);
  const [rtPremiums, setRtPremiums] = useState(false);
  const [mortgageSidebar, setMortgageSidebar] = useState(false);
  const [wholeSidebar, setWholeSidebar] = useState(false);
  const [SpaySidebar, setSpaySidebar] = useState(false);
  const [enhancedCi, setEnhancedCI] = useState(false);
  const [openTtx, setOpenTtx] = useState(true);
  const [ciSidebar, setCiSidebar] = useState(false);
  const router = useRouter();

  const handleModalClose = (event, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      return;
    }
    setOpenPopup(false);
  };

  const handleSelection = (choice) => {
    setSelected(choice);
    setOpenPopup(false);
  };

  useEffect(() => {
    const ins = localStorage.getItem("ins");
    if (!ins) {
      setInsurance("term-life");
      localStorage.setItem("ins", "term-life");
    }
    setInsurance(ins);

    const sendDatatoOdoo = async () => {
      const existingData = JSON.parse(localStorage.getItem("quote-data"));
      if (!existingData || existingData === null) {
        return router.push("/quote-form");
      }

      setQuoteData(existingData);
    };
    sendDatatoOdoo();
  }, [insurance, router]);

  return (
    <div className="py-[20px] ">
      <Modal
        open={openPopup}
        onClose={handleModalClose}
        className="flex justify-center items-center"
        disableScrollLock={true}
        aria-labelledby="choose-smoker-title"
        aria-describedby="choose-smoker-description"
      >
        <div
          className="border-none outline-none bg-white rounded-lg p-6 pt-0 px-0 shadow-lg max-w-md w-full z-10"
          role="dialog"
          aria-modal="true"
        >
          <ChooseSmoker
            onClose={handleSelection}
            existingData={quoteData}
            uploadPostData={uploadPostData}
          />
        </div>
      </Modal>

      {/* Second Modal: ChooseCoverageType */}
      <Modal
        open={choosePopup}
        onClose={() => setChoosePopup(false)} // Regular close handler
        className="flex justify-center items-center"
        disableScrollLock={true}
      >
        <div className="border-none outline-none bg-white rounded-lg py-2 px-4 shadow-lg w-[530px] z-10 relative ">
          <ChooseCoverageType
            setChoosePopup={setChoosePopup}
            insurance={insurance}
            setInsurance={setInsurance}
          />
        </div>
      </Modal>

      <Modal
        open={showEFfSaving}
        onClose={() => setShowEffSaving(false)}
        className="flex justify-center items-center"
        disableScrollLock={true}
      >
        <div className="border-none outline-none bg-white rounded-lg py-2 px-4 shadow-lg w-[684px] z-10 relative ">
          <EffectiveSaving
            setEffSaving={setShowEffSaving}
            effSaving={showEFfSaving}
            payTermLength={payTermLength}
            setPayTermLength={setPayTermLength}
          />
        </div>
      </Modal>

      <div className="flex justify-start items-center w-full h-max flex-col gap-[10rem]">
        <div className="w-main relative overflow-hidden h-max ">
          <div
            className="gap-[15px]"
            style={{ display: "grid", gridTemplateColumns: "75% auto" }}
          >
            <div className="flex justify-start items-center gap-[1rem] flex-col w-[850px] h-max overflow-hidden">
              <Head
                setSidebarOpenM={setSidebarOpen}
                insurance={insurance}
                yearly={yearly}
                setYearly={setYearly}
                setInsurance={setInsurance}
                quoteData={quoteData}
                setEffSaving={setEffSaving}
                setChoosePopup={setChoosePopup}
                setIsWholeType={setIsWholeType}
                isWholeLife={isWholeLife}
                decreasingTerm={decreasingTerm}
                setDecreasingTerm={setDecreasingTerm}
                setPayTermLength={setPayTermLength}
                payTermLength={payTermLength}
                enhanced={enhanced}
                setShowEffSaving={setShowEffSaving}
                setEnhanced={setEnhanced}
              />
              <CSSTransition
                in={true}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <Quotes
                  insurance={insurance}
                  decreasingTerm={decreasingTerm}
                  yearly={yearly}
                  SpaySidebar={SpaySidebar}
                  ciSidebar={ciSidebar}
                  setCiSidebar={setCiSidebar}
                  setSpaySidebar={setSpaySidebar}
                  setWlcOpen={setWlcOpen}
                  mortgageSidebar={mortgageSidebar}
                  setMortgageSidebar={setMortgageSidebar}
                  wlcOpen={wlcOpen}
                  setYearly={setYearly}
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                  payTermLength={payTermLength}
                  enhanced={enhanced}
                  setPayTermLength={setPayTermLength}
                  accidentalDeath={accidentalDeath}
                  setEffSaving={setEffSaving}
                  effSaving={effSaving}
                  setAccidentalDeath={setAccidentalDeath}
                  criticalIllness={criticalIllness}
                  setCriticalIllness={setCriticalIllness}
                  childrenRider={childrenRider}
                  setChildrenRider={setChildrenRider}
                  rtPremiums={rtPremiums}
                  setRtPremiums={setRtPremiums}
                  enhancedCi={enhancedCi}
                  setEnhancedCi={setEnhancedCI}
                  wholeSidebar={wholeSidebar}
                  setWholeSidebar={setWholeSidebar}
                />
              </CSSTransition>
            </div>
            <Sidebar />
          </div>
        </div>
        <div className="w-[1140px] quote-shadow py-[2rem] rounded-lg flex text-center justify-center items-center flex-col gap-[2rem]">
          <p>
            PolicyScanner Brokerage Incorporated (Registration No. 742, valid
            till 09/06/2027, License Category: Composite Broker) is acting
            solely as a facilitator and cannot impact the timing of payment
            releases or the claim processing timeline in any manner. Registered
            Office: 6 Urbane Blvd, Kitchener, Ontario N2E 0J2. CIN: xxxxxxxxxx.
          </p>
          <p>
            PolicyScanner Brokerage Incorporated (Registration No. 742, valid
            till 09/06/2027, License Category: Composite Broker) is acting
            solely as a facilitator and cannot impact the timing of payment
            releases or the claim processing timeline in any manner. Registered
            Office: 6 Urbane Blvd, Kitchener, Ontario N2E 0J2. CIN: xxxxxxxxxx.
          </p>
          <p>
            PolicyScanner Brokerage Incorporated (Registration No. 742, valid
            till 09/06/2027, License Category: Composite Broker) is acting
            solely as a facilitator and cannot impact the timing of payment
            releases or the claim processing timeline in any manner. Registered
            Office: 6 Urbane Blvd, Kitchener, Ontario N2E 0J2. CIN: xxxxxxxxxx.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalQuote;
