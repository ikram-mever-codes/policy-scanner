"use client";

import React, { useState, useRef, useEffect } from "react";
import { Toolbar, IconButton, Box, LinearProgress, Modal } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import { MessageCircle } from "lucide-react";
import { ArrowForwardIos, Phone, PhoneInTalk } from "@mui/icons-material";
import ScheduleACall from "./ScheduleACall";

const Header = () => {
  const [menuOpenIndex, setMenuOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openTtx, setOpenTtx] = useState(false);
  const [talked, setTalked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [schedule, setSchedule] = useState(false);

  const path = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: "Life Insurance",
      hasDoubleColumn: true,
      dropdown: {
        termLife: {
          title: "Term Life Insurance",
          items: [
            "What is Term Life Insurance",
            "T10 Term Insurance",
            "T20 Term Insurance",
            "T30 Term Insurance",
            "Term Insurance Calculator",
            "Non-Medical Term Insurance",
            "Compare Term Plans",
          ],
        },
        wholeLife: {
          title: "Whole Life Insurance",
          items: [
            "What is Whole Life Insurance",
            "Participating Whole Life",
            "Non-Participating Whole Life",
            "Universal Life Plans",
            "Investment Options",
            "Cash Value Calculator",
            "Estate Planning",
          ],
        },
      },
    },
    {
      name: "Mortgage Insurance",
      dropdown: [
        "What is Mortgage Insurance",
        "CMHC Insurance",
        "Private Mortgage Insurance",
        "Self-Employed Coverage",
        "First-Time Home Buyer",
        "Refinance Calculator",
        "Down Payment Calculator",
        "Provincial Programs",
      ],
    },
    {
      name: "Critical Illness",
      dropdown: [
        "What is Critical Illness",
        "Coverage Benefits",
        "25 Covered Conditions",
        "Return of Premium",
        "Child Critical Illness",
        "Critical Illness Calculator",
        "Compare Plans",
        "Claims Process",
      ],
    },
  ];
  const handleMenuClick = (index) => {
    setMenuOpenIndex(index === menuOpenIndex ? null : index);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest(".submenu-link")
    ) {
      setMenuOpenIndex(null);
    }
  };

  const isQForm = path === "/quote-form";
  const isQPage = path === "/final-quote";
  const toggleBurgerMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const tk = sessionStorage.getItem("talked");
    setTalked(tk);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        setIsOpen={setSidebarOpen}
      />

      <div className={`w-full h-[90px] relative z-[2]`}>
        <header className="">
          <div
            className={`px-[${
              isQForm ? "50px" : "20px"
            }] h-[90px] w-full  py-[15px] bg-white flex justify-center items-center fixed top-0 border-b-2 border-[#F5F5F5]`}
          >
            <Toolbar
              className={`w-${isQPage ? "main" : "full"} flex ${
                isQForm ? "justify-start gap-6" : "justify-between"
              } items-center  px-0`}
              bgColor="white"
            >
              {isQForm && (
                <IconButton onClick={toggleSidebar}>
                  <MenuIcon
                    fontSize="large"
                    sx={{ color: "black", ml: "30px" }}
                  />
                </IconButton>
              )}
              <Box className="w-[230px] sm:w-[300px]">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Policy Scanner"
                    height={30}
                    width={200}
                    className="object-contain"
                  />
                </Link>
              </Box>

              {!isQForm && !isQPage && (
                <nav className="hidden sm:flex items-center justify-end mx-[2rem] gap-8  w-full ">
                  <ul className="flex justify-end gap-[3rem] items-center w-full">
                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        className="relative py-4 "
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button className="text-gray-700  hover:text-blue-600 font-medium">
                          {item.name}
                        </button>

                        {activeDropdown === index &&
                          (item.hasDoubleColumn ? (
                            <div className="absolute  left-[0px] mt-4 w-[500px] pl-[1rem] bg-white shadow-lg rounded-lg py-6 z-10">
                              <div className="flex">
                                <div className="flex-1 border-r border-gray-200">
                                  <h3 className="px-4 py-2 font-medium text-blue-600">
                                    {item.dropdown.termLife.title}
                                  </h3>
                                  <ul>
                                    {item.dropdown.termLife.items.map(
                                      (subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <a
                                            href={`/insurance/${subItem
                                              .toLowerCase()
                                              .replace(/ /g, "-")}`}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                          >
                                            {subItem}
                                          </a>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                                <div className="flex-1">
                                  <h3 className="px-4 py-2 font-medium text-blue-600">
                                    {item.dropdown.wholeLife.title}
                                  </h3>
                                  <ul>
                                    {item.dropdown.wholeLife.items.map(
                                      (subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <a
                                            href={`/insurance/${subItem
                                              .toLowerCase()
                                              .replace(/ /g, "-")}`}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                          >
                                            {subItem}
                                          </a>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <ul className="absolute left-0 mt-4 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                              {item.dropdown.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    href={`/insurance/${subItem
                                      .toLowerCase()
                                      .replace(/ /g, "-")}`}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                  >
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ))}
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              {isQPage ? (
                <div className="w-[268px] h-[60px] flex justify-start items-center flex-col overflow-hidden rounded-lg shadow-sidebar ">
                  <button
                    onClick={() => {
                      setSchedule(true);
                    }}
                    className=" cursor-pointer group w-full h-full relative flex items-center justify-center gap-2 rounded-lg  bg-white px-6 py-3  transition-all duration-300   hover:shadow-lg active:scale-95"
                  >
                    <Phone className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 text-opposite" />
                    <span className="font-medium text-primary2 text-lg">
                      Schedule a Call
                    </span>
                    <ArrowForwardIos className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 text-halfBlack" />
                  </button>
                </div>
              ) : (
                !isQForm && (
                  <button className="w-max h-[2.8rem] flex justify-center items-center text-black bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg hover-effect">
                    Get Quotes
                  </button>
                )
              )}
              {path !== "/quote-form" && (
                <Box className="flex items-center sm:hidden gap-4">
                  <button className="w-max h-[2.8rem] flex justify-center items-center text-black bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg hover-effect">
                    Get Quotes
                  </button>

                  <IconButton onClick={toggleBurgerMenu}>
                    <MenuIcon />
                  </IconButton>
                </Box>
              )}
            </Toolbar>
            {/* Mobile Menu */}
            {menuOpen && (
              <div className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4">
                <ul className="flex flex-col gap-4 px-6">
                  <li>
                    <Link
                      href="/"
                      className="text-black hover:text-primary font-medium"
                    >
                      Home
                    </Link>
                  </li>
                  {menuItems.map((item, index) => (
                    <li key={index} className="font-medium">
                      <Link href="#">{item.label}</Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="#get-quotes"
                      className="text-black hover:text-primary font-medium"
                    >
                      Get Quotes
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        {/* <Modal
          open={openTtx}
          onClose={() => {
            setOpenTtx(false);
          }}
          className="flex justify-center items-center"
          aria-labelledby="choose-smoker-title"
          aria-describedby="choose-smoker-description"
        >
          <div className="relative" onClick={() => setOpenTtx(false)}>
            <div
              className="border-none outline-none bg-white rounded-lg p-6 pt-0 px-0 shadow-lg max-w-md w-full z-10"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              <TalkToExpert
                onClose={() => {
                  setOpenTtx(false);
                }}
              />
            </div>
          </div>
        </Modal> */}

        <Modal
          open={schedule}
          onClose={() => {
            setSchedule(false);
          }}
          className="flex justify-center items-center"
          aria-labelledby="choose-smoker-title"
          aria-describedby="choose-smoker-description"
        >
          <div className="relative" onClick={() => setSchedule(false)}>
            <div
              className="border-none outline-none rounded-lg p-6 pt-0 px-0 shadow-lg max-w-md w-full z-10"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              <ScheduleACall
                onClose={() => {
                  setSchedule(false);
                }}
              />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Header;
