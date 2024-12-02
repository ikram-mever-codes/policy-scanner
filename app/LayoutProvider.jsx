"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { usePathname } from "next/navigation";
import React from "react";

const LayoutProvider = ({ children }) => {
  const path = usePathname();

  return (
    <>
      <Header />
      <main className="min-h-[40vh]">{children}</main>
      {path !== "/quote-form" && <Footer />}
    </>
  );
};

export default LayoutProvider;
