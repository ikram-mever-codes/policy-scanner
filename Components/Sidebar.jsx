"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookOutlined,
  Twitter,
  LinkedIn,
  Instagram,
  Close,
} from "@mui/icons-material";
import logo from "../assets/logo.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-primary text-white z-[999] shadow-lg transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Policy Scanner"
              height={30}
              width={200}
              className="object-contain"
            />
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-secondary transition duration-300"
          >
            <Close fontSize="large" />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 px-6 mt-10">
          <li>
            <Link
              href="/"
              className="block text-lg font-medium hover:text-secondary transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block text-lg font-medium hover:text-secondary transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-lg font-medium hover:text-secondary transition duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block text-lg font-medium hover:text-secondary transition duration-300"
            >
              Services
            </Link>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="absolute bottom-6 left-0 w-full flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition duration-300"
            >
              <FacebookOutlined fontSize="large" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition duration-300"
            >
              <Twitter fontSize="large" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition duration-300"
            >
              <LinkedIn fontSize="large" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition duration-300"
            >
              <Instagram fontSize="large" />
            </a>
          </div>
          <p className="text-sm text-gray-300 font-light">
            © 2024-25 Policy Scanner
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998] transition-opacity duration-500"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
