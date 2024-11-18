import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo-footer.png";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { EmailOutlined, Facebook, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="w-full bg-[#002625] py-[40px] px-[20px] sm:px-[40px] md:px-[60px] flex flex-col gap-[30px] text-white overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[30px]">
        <div className="flex flex-col gap-[15px] sm:w-1/3">
          <Image
            src={logo}
            alt="Policy Scanner"
            height={30}
            width={200}
            className="object-cover"
          />
          <p className="text-sm sm:text-[15px] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-[30px] sm:gap-[50px]">
          <ul className="flex flex-col gap-[10px] sm:gap-[20px]">
            {[
              "Home",
              "Term Life Insurance",
              "Whole Life Insurance",
              "Mortgage Insurance",
              "Critical Illness Insurance",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={"#"}
                  className="hover:underline text-sm sm:text-[15px]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-[10px] sm:gap-[20px]">
            {["News", "Blog", "Career", "About Us", "Contact Us"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={"#"}
                    className="hover:underline text-sm sm:text-[15px]"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-[15px] sm:gap-[25px] sm:w-1/3 h-full">
          <p className="text-sm sm:text-[15px]">
            6 Urbane Blvd, Kitchener Ontario N2E0J6
          </p>
          <p className="flex items-center gap-[5px] text-sm sm:text-[15px]">
            <EmailOutlined />
            info@policyscanner.ca
          </p>
          <p className="flex items-center gap-[5px] text-sm sm:text-[15px]">
            <Phone />
            +1 437 422 8353
          </p>
          <div className="flex gap-[10px]">
            {[
              { icon: <Facebook />, link: "#" },
              { icon: <XIcon />, link: "#" },
              { icon: <LinkedInIcon />, link: "#" },
              { icon: <InstagramIcon />, link: "#" },
            ].map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className="p-[8px] bg-white text-primary rounded-md hover:scale-110 transition-transform"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-gradient-line" />

      <p className="text-center text-xs sm:text-sm font-light leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type.
      </p>
    </footer>
  );
};

export default Footer;
