"use client";

import React, { useState, useRef, useEffect } from "react";
import { Toolbar, IconButton, Box, LinearProgress } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar"; // Import Sidebar
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";

const Header = () => {
  const [menuOpenIndex, setMenuOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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

      <div className="w-full h-[90px] relative z-[2]">
        <header className="">
          <div
            className={`px-[${
              isQForm ? "50px" : "50px"
            }] h-[90px] w-full  py-[15px] bg-white flex justify-center items-center fixed top-0 border-b-2 border-[#F5F5F5]`}
          >
            <Toolbar
              className={`w-${isQForm ? "full" : "full"} flex ${
                isQForm ? "justify-start gap-6" : "justify-between"
              } items-center`}
              bgColor="white"
            >
              {isQForm && (
                <IconButton onClick={toggleSidebar}>
                  <MenuIcon fontSize="large" sx={{ color: "black" }} />
                </IconButton>
              )}
              <Box className="w-[200px] sm:w-[300px]">
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

              {path !== "/quote-form" && (
                <nav className="hidden sm:flex items-center gap-8">
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
                  {path === "/final-quote" ? (
                    <button className="w-max h-[2.8rem] px-[1rem]  flex justify-center items-center gap-[6px]  bg-primary rounded-[10px] text-white">
                      <AddIcCallOutlinedIcon sx={{ fontSize: "18px" }} /> Talk
                      to Expert
                    </button>
                  ) : (
                    <button className="w-max h-[2.8rem] flex justify-center items-center text-black bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
                      Get Quotes
                    </button>
                  )}
                </nav>
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
      </div>
    </>
  );
};

export default Header;
