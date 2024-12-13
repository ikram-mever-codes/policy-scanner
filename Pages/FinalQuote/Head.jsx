"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Button,
  Tooltip,
  Grid,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditInfoSidebar from "./EditInfoSidebar";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonIcon from "@mui/icons-material/Person";

// Utility function moved outside to prevent re-creation on every render
const formatInsuranceHeading = (insurance) => {
  if (!insurance) return null;
  const formattedMap = {
    "term-life": "Term Life",
    "whole-life": "Whole Life",
    "critical-illness": "Critical Illness",
    "mortgage-insurance": "Mortgage Insurance",
    "level-term": "Mortgage Insurance",
  };
  return formattedMap[insurance] || insurance;
};

// Consolidated coverage options mapping
const coverageOptionsMap = {
  "term-life": [
    "50,000",
    "100,000",
    "250,000",
    "500,000",
    "1M",
    "1.5M",
    "2M",
    "2.5M",
  ],
  "level-term": [
    "50,000",
    "100,000",
    "250,000",
    "500,000",
    "1M",
    "1.5M",
    "2M",
    "2.5M",
  ],
  "whole-life": [
    "25,000",
    "50,000",
    "100,000",
    "150,000",
    "250,000",
    "400,000",
    "500,000",
    "750,000",
    "1M",
  ],
  "mortgage-insurance": [
    "50,000",
    "100,000",
    "250,000",
    "500,000",
    "1M",
    "1.5M",
    "2M",
    "2.5M",
  ],
  "critical-illness": [
    "10,000",
    "50,000",
    "100,000",
    "200,000",
    "250,000",
    "500,000",
  ],
};

// Consolidated term options mapping
const termOptionsMap = {
  "term-life": [
    "10 years",
    "20 years",
    "25 years",
    "30 years",
    "35 years",
    "40 years",
  ],
  "level-term": ["Life 100 Pay", "Life 20 Pay", "Life 10 Pay"],
  "whole-life": ["Life 100 Pay", "Life 20 Pay", "Life 10 Pay"],
  "mortgage-insurance": ["Life 100 Pay", "Life 20 Pay", "Life 10 Pay"],
  "critical-illness": ["10 Years", "20 Years", "Age 75 Pay", "Life pay 100"],
};

// Reusable Switch Component with Tooltip
const InsuranceSwitch = ({ checked, onChange, label, tooltip }) => (
  <Tooltip title={tooltip} arrow>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Switch
        checked={checked}
        onChange={onChange}
        color="primary"
        inputProps={{ "aria-label": label }}
      />
      <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#374151" }}>
        {label}
      </span>
    </div>
  </Tooltip>
);

const Head = ({
  quoteData,
  insurance,
  setInsurance,
  setIsWholeType,
  isWholeLife,
  setChoosePopup,
  decreasingTerm,
  setDecreasingTerm,
  yearly,
  setYearly,
  effSaving,
  setEffSaving,
  setShowEffSaving,
  payTermLength,
  setPayTermLength,
  setSidebarOpenM,
  enhanced,
  setEnhanced,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Memoize coverage options based on insurance type
  const coverageOptions = useMemo(
    () => coverageOptionsMap[insurance] || [],
    [insurance]
  );

  // Memoize term options based on insurance type
  const termOptions = useMemo(
    () => termOptionsMap[insurance] || [],
    [insurance]
  );

  // Handlers
  const handleEditClick = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const handleInsuranceSwitch = useCallback(() => {
    const newInsurance =
      insurance === "level-term" ? "mortgage-insurance" : "level-term";
    setInsurance(newInsurance);
    localStorage.setItem("ins", newInsurance);
  }, [insurance, setInsurance]);

  const handleCoverageChange = useCallback((event) => {
    // Implement coverage change logic if needed
    console.log(`Selected Coverage: ${event.target.value}`);
  }, []);

  const handleTermChange = useCallback(
    (event) => {
      if (insurance === "whole-life") {
        setPayTermLength(event.target.value);
      }
    },
    [insurance, setPayTermLength]
  );

  const handleYearlyToggle = useCallback(
    (isYearly) => {
      setYearly(isYearly);
    },
    [setYearly]
  );

  return (
    <div className="w-[845px] mx-auto">
      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}

      {/* Sidebar */}
      <EditInfoSidebar open={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Main Container */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        {/* Header Section */}
        <div
          style={{ padding: "24px", borderBottom: "1px solid rgba(0,0,0,0.1)" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Title and Profile Summary */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Title */}
              {/* Global Styles  */}
              <h1
                style={{
                  color: "rgba(17,24,39,1)",
                }}
                className="text-[18px] leading-[25px] font-semibold"
              >
                {formatInsuranceHeading(insurance)} Quote
              </h1>

              {/* Profile Summary */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "0px 16px",
                  borderRadius: "8px",
                }}
                className="bg-back w-max h-[35px]"
              >
                <PersonIcon style={{ fontSize: 20, color: "#6B7280" }} />
                <span
                  style={{
                    color: "#374151",
                  }}
                  className="text-[12px] font-normal leading-l2"
                >
                  {quoteData.gender === "male" ? "Male" : "Female"} |{" "}
                  {quoteData.smoker === "yes" ? "Smoker" : "Non-smoker"} | Age{" "}
                  {quoteData.years}
                </span>
                <Button
                  variant="text"
                  size="small"
                  onClick={handleEditClick}
                  sx={{
                    color: "#2563EB",
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: 300,
                    lineHeight: "12px",
                  }}
                >
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* Insurance Type Selection */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                borderRadius: "8px",
              }}
              className="bg-back"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#111827",
                    }}
                  >
                    Coverage Type:
                  </span>
                  <span style={{ fontSize: "14px", color: "#374151" }}>
                    {formatInsuranceHeading(insurance)}
                  </span>
                  <Tooltip title="Information about your coverage type" arrow>
                    <HelpOutlineIcon
                      style={{ fontSize: 16, color: "#9CA3AF" }}
                    />
                  </Tooltip>
                </div>
                <Button
                  variant="text"
                  onClick={() => setChoosePopup(true)}
                  sx={{
                    color: "#2563EB",
                    textTransform: "none",
                    fontSize: "14px",
                    padding: 0,
                  }}
                  endIcon={
                    <KeyboardArrowRightOutlinedIcon style={{ fontSize: 16 }} />
                  }
                >
                  Change type
                </Button>
              </div>

              {(insurance === "level-term" ||
                insurance === "mortgage-insurance") && (
                <InsuranceSwitch
                  checked={insurance === "level-term"}
                  onChange={handleInsuranceSwitch}
                  label="Level Term"
                  tooltip="Level Term keeps your premium payments the same throughout the policy duration"
                />
              )}
              {insurance === "critical-illness" && (
                <InsuranceSwitch
                  checked={enhanced}
                  onChange={(e) => {
                    setEnhanced(!enhanced);
                  }}
                  label="Enhanced ( 25 illness)"
                  tooltip="Level Term keeps your premium payments the same throughout the policy duration"
                />
              )}

              {insurance === "whole-life" && (
                <InsuranceSwitch
                  checked={effSaving}
                  onChange={(e) => {
                    setEffSaving(!effSaving);
                    if (e.target.checked === true) {
                      setShowEffSaving(true);
                      setPayTermLength("Life 20 Pay");
                    }
                  }}
                  label="Save upto 30%"
                  tooltip="Level Term keeps your premium payments the same throughout the policy duration"
                />
              )}
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div style={{ padding: "24px", paddingTop: "14px" }}>
          <Grid container spacing={3} alignItems="flex-end">
            {/* Coverage Amount */}
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <InputLabel
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#374151",
                      position: "relative",
                      transform: "none",
                    }}
                    htmlFor="coverage-amount"
                  >
                    Coverage Amount
                  </InputLabel>
                </div>
                <Select
                  native
                  value={coverageOptions[0]}
                  onChange={handleCoverageChange}
                  inputProps={{
                    name: "coverage",
                    id: "coverage-amount",
                  }}
                  sx={{
                    height: "40px",
                    fontSize: "16px",
                  }}
                >
                  {coverageOptions.map((option) => (
                    <option key={option} value={option}>
                      ${option}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Term Length */}
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <InputLabel
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#374151",
                      position: "relative",
                      transform: "none",
                    }}
                    htmlFor="term-length"
                  >
                    Term Length
                  </InputLabel>
                </div>
                <Select
                  native
                  value={payTermLength}
                  onChange={handleTermChange}
                  inputProps={{
                    name: "term-length",
                    id: "term-length",
                  }}
                  sx={{
                    height: "40px",
                    fontSize: "16px",
                  }}
                >
                  {termOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Payment Frequency */}
            <Grid item xs={12} sm={4}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#374151",
                    position: "relative",
                    transform: "none",
                  }}
                >
                  Payment Frequency
                </span>
                <div
                  style={{
                    display: "inline-flex",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    padding: "2px 4px",
                    width: "100%",
                  }}
                  className="flex justify-center items-center"
                >
                  <Button
                    variant={!yearly ? "contained" : "text"}
                    onClick={() => handleYearlyToggle(false)}
                    sx={{
                      flex: 1,
                      textTransform: "none",
                      height: "33px",
                      backgroundColor: !yearly ? "#EBF5FF" : "transparent",
                      color: !yearly ? "#1D4ED8" : "#4B5563",
                      borderRadius: "8px 0 0 8px",
                      boxShadow: !yearly
                        ? "0px 2px 4px rgba(0, 0, 0,0)"
                        : "none ",
                      "&:hover": {
                        backgroundColor: !yearly ? "#D1E9FF" : "transparent",
                        boxShadow: !yearly
                          ? "0px 2px 4px rgba(0, 0, 0, 0.15)"
                          : "none",
                      },
                    }}
                  >
                    Monthly ($89)
                  </Button>

                  <Button
                    variant={yearly ? "contained" : "text"}
                    onClick={() => handleYearlyToggle(true)}
                    sx={{
                      height: "33px",
                      flex: 1,
                      textTransform: "none",
                      backgroundColor: yearly ? "#EBF5FF" : "transparent",
                      color: yearly ? "#1D4ED8" : "#4B5563",
                      borderRadius: "0px 8px 8px 0px",
                      boxShadow: yearly
                        ? "0px 2px 4px rgba(0, 0, 0,0)"
                        : "none",
                      "&:hover": {
                        backgroundColor: yearly ? "#D1E9FF" : "transparent",
                        boxShadow: yearly
                          ? "0px 2px 4px rgba(0, 0, 0, 0.15)"
                          : "none",
                      },
                    }}
                  >
                    Yearly ($999)
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Head;
