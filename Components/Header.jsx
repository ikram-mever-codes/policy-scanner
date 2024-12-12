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
import Sidebar from "./Sidebar"; // Import Sidebar
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import { MessageCircle } from "lucide-react";
import TalkToExpert from "@/Pages/FinalQuote/TalkToExpert";

const Header = () => {
  const [menuOpenIndex, setMenuOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openTtx, setOpenTtx] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const path = usePathname();
  const menuItems = [
    {
      label: "Life Insurance",
      dropdown: ["Term Life", "Whole Life", "Universal Life"],
    },
    {
      label: "Mortgage Insurance",
      dropdown: ["Coverage Options", "Premiums", "Claims"],
    },
    {
      label: "Critical Illness",
      dropdown: ["Conditions Covered", "Policy Details", "Payout Options"],
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

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
                  <MenuIcon fontSize="large" sx={{ color: "black" }} />
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
                  <ul className="flex items-center gap-8">
                    {menuItems.map((item, index) => (
                      <li key={index} className="relative" ref={dropdownRef}>
                        <button
                          className="flex items-center gap-1 text-black text-nowrap hover:text-primary font-medium"
                          onClick={() => handleMenuClick(index)}
                          aria-expanded={menuOpenIndex === index}
                        >
                          {item.label}
                          {menuOpenIndex === index ? (
                            <ExpandLessIcon fontSize="small" />
                          ) : (
                            <ExpandMoreIcon fontSize="small" />
                          )}
                        </button>
                        {menuOpenIndex === index && (
                          <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                            {item.dropdown.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={`/insurance/${subItem
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                  className="block px-4 py-2 hover:bg-gray-100 submenu-link"
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              {isQPage ? (
                <button
                  onClick={() => {
                    setOpenTtx(true);
                  }}
                  className="group relative flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-6 py-3 text-white transition-all duration-300 hover:bg-teal-800 hover:shadow-lg active:scale-95"
                >
                  <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium">Talk to Expert</span>
                  <span className="absolute -right-1 -top-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-500"></span>
                  </span>
                </button>
              ) : (
                !isQForm && (
                  <button className="w-max h-[2.8rem] flex justify-center items-center text-black bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
                    Get Quotes
                  </button>
                )
              )}
              {path !== "/quote-form" && (
                <Box className="flex items-center sm:hidden gap-4">
                  <button className="bg-secondary text-white px-4 py-2 text-sm rounded-lg">
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
        <Modal
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
        </Modal>
      </div>
    </>
  );
};

export default Header;
