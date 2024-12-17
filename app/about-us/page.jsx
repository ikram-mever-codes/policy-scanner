"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const AboutUs = () => {
  const [filledStars, setFilledStars] = useState(0);

  useEffect(() => {
    const fillStars = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      for (let i = 1; i <= 5; i++) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setFilledStars(i);
      }
    };
    fillStars();
  }, []);

  const stats = [
    {
      id: 1,
      content: (
        <div>
          <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Expert reviewed articles
          </a>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-xl font-medium">Google</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 transition-colors duration-500 ease-out
                    ${
                      index < filledStars
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                />
              ))}
            </div>
          </div>
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            4.9 out of 5 Excellent rating
          </a>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div>
          <div className="flex items-center justify-center mb-2">
            <span className="text-red-600 text-2xl mr-2">🍁</span>
            <span className="text-4xl font-bold text-teal-600">100%</span>
          </div>
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Canadian company
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            About PolicyScanner
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Your Trusted Canadian Insurance Resource
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              {stat.content}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-6">
            PolicyScanner is a proudly Canadian company dedicated to simplifying
            insurance decisions for Canadians. Founded on the principles of
            transparency and expertise, we help thousands of people across the
            country understand and choose the right insurance coverage.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-600 mb-6">
            With over 150 expert-reviewed articles and a stellar 4.9/5 Google
            rating, we've established ourselves as a leading voice in Canadian
            insurance information. Our team of insurance experts ensures every
            piece of content meets the highest standards of accuracy and
            relevance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            The PolicyScanner Difference
          </h2>
          <p className="text-gray-600 mb-6">
            Unlike other insurance resources, we focus exclusively on the
            Canadian market. Our deep understanding of provincial regulations
            and local insurance needs allows us to provide targeted, relevant
            information that matters to Canadians.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-600 mb-4">
            As a 100% Canadian company, we're committed to:
          </p>
          <ul className="li-disc pl-6 text-gray-600 space-y-2">
            <li>Providing unbiased, expert-reviewed insurance information</li>
            <li>
              Maintaining the highest standards of accuracy and transparency
            </li>
            <li>Offering provincially-specific insurance insights</li>
            <li>Supporting Canadians in making informed insurance decisions</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
