"use client";
import Head from "@/Pages/FinalQuote/Head";
import Quotes from "@/Pages/FinalQuote/Quotes";
import Sidebar from "@/Pages/FinalQuote/Sidebar";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import ChooseSmoker from "@/Pages/Quote-form/ChooseSomker";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/navigation";
import { uploadPostData } from "../api";

const FinalQuote = () => {
  const [openPopup, setOpenPopup] = useState(true);
  const [selected, setSelected] = useState(null);
  const [insurance, setInsurance] = useState("term-life");
  const [quoteData, setQuoteData] = useState({});
  const [isWholeLife, setIsWholeType] = useState(false);
  const router = useRouter();

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleSelection = (choice) => {
    setSelected(choice);
    handleClosePopup();
  };

  useEffect(() => {
    const sendDatatoOdoo = async () => {
      const existingData = JSON.parse(localStorage.getItem("quote-data"));
      if (!existingData || existingData === null) {
        return router.push("/quote-form");
      }

      if (existingData?.smoker) {
        setOpenPopup(false);
      }

      setQuoteData(existingData);
    };
    sendDatatoOdoo();
  }, []);
  return (
    <div className="py-[60px] ">
      <Modal
        open={openPopup}
        onClose={handleClosePopup}
        className="flex justify-center items-center"
        disableScrollLock={true}
      >
        <div className="border-none outline-none bg-white rounded-lg p-6 shadow-lg max-w-md w-full z-10">
          <ChooseSmoker
            onClose={handleSelection}
            existingData={quoteData}
            uploadPostData={uploadPostData}
          />
        </div>
      </Modal>
      <div className="flex justify-start items-center w-full h-max flex-col gap-[10rem]">
        <div className=" w-main relative overflow-hidden h-max">
          <div
            className="gap-[15px]"
            style={{ display: "grid", gridTemplateColumns: "75% auto" }}
          >
            <div className="flex justify-start items-center gap-[2rem] flex-col w-[850px] h-max  overflow-hidden">
              <Head
                insurance={insurance}
                setInsurance={setInsurance}
                quoteData={quoteData}
                setIsWholeType={setIsWholeType}
                isWholeLife={isWholeLife}
              />
              <CSSTransition
                in={isWholeLife}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <Quotes insurance={insurance} />
              </CSSTransition>
              <CSSTransition
                in={!isWholeLife}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <Quotes type="term" />
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
