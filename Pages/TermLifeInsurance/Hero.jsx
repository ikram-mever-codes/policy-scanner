import Image from "next/image";
import React from "react";
import termLifeHero from "../../assets/term-life-hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        {/* Mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 150%, rgba(45, 212, 191, 0.7) 0%, transparent 50%),
                             radial-gradient(circle at 80% -50%, rgba(45, 212, 191, 0.5) 0%, transparent 50%)`,
          }}
        />

        {/* Animated rings */}
        <div className="absolute top-[-30%] right-[-10%] w-[800px] h-[800px] animate-slow-spin">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(45, 212, 191, 0.1)"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="rgba(45, 212, 191, 0.08)"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="rgba(45, 212, 191, 0.06)"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Abstract shapes */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="url(#grad1)"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#2DD4BF", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#115E59", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto pl-[10rem] flex justify-start  h-full items-center py-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl leading-[64px]  font-bold text-white mb-6">
            Protect your family's future
            <br />
            with Term Life Insurance
          </h1>
          <p className="text-[20px] text-white/90 mb-8">
            Get coverage from $100,000 to $5M with rates starting at $15/month
          </p>

          {/* Single CTA button */}
          <div className="max-w-md">
            <button
              className="group relative w-full overflow-hidden bg-white text-teal-700 rounded-xl py-4 px-8 text-lg font-medium
                        transform transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Get Your Free Quote
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </button>

            {/* Sub-text */}
            <p className="text-center text-white/80 text-sm mt-4">
              Takes only 1 minute • No obligation
            </p>
          </div>
        </div>
        {/* 
        <div className="absolute bottom-4 left-[9rem] w-full">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-start space-x-8 text-white/90 text-sm">
              {[
                "Licensed Providers",
                "No Medical Option",
                "Price Match Guarantee",
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center">
                    <span className="text-teal-300">✓</span>
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* Trust indicators */}
    </div>
  );
};

export default Hero;
