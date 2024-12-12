"use client";
import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import logo from "../../assets/canada-life.png";
import "./Head.css";
import { XCircle } from "lucide-react";
import {
  Heart,
  Brain,
  Activity,
  AlertCircle,
  Clock,
  Shield,
  DollarSign,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const EnhancedCi = ({ open, onClose }) => {
  const [isClient, setIsClient] = useState(false);
  const [coverage, setCoverage] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllConditions, setShowAllConditions] = useState(false);

  const categories = {
    heart: "Heart & Circulatory",
    cancer: "Cancer & Organ Failure",
    neuro: "Neurological",
    organ: "Major Organ",
    accidents: "Accidents & Others",
  };

  const illnesses = [
    {
      name: "Heart Attack",
      icon: Heart,
      category: "heart",
      description: "Blood flow blockage causing heart muscle damage",
    },
    {
      name: "Stroke",
      icon: Brain,
      category: "heart",
      description: "Interrupted blood flow to brain causing damage",
    },
    {
      name: "Coronary Artery Bypass",
      icon: Heart,
      category: "heart",
      description: "Surgery for blocked heart arteries",
    },
    {
      name: "Heart Valve Surgery",
      icon: Heart,
      category: "heart",
      description: "Repair or replacement of heart valves",
    },
    {
      name: "Aorta Surgery",
      icon: Heart,
      category: "heart",
      description: "Surgery to repair the main artery",
    },
    {
      name: "Cancer",
      icon: AlertCircle,
      category: "cancer",
      description: "Life-threatening cancers requiring treatment",
    },
    {
      name: "Benign Brain Tumor",
      icon: Brain,
      category: "cancer",
      description: "Non-cancerous brain growth requiring surgery",
    },
    {
      name: "Aplastic Anemia",
      icon: Activity,
      category: "cancer",
      description: "Bone marrow failure affecting blood production",
    },
    {
      name: "Multiple Sclerosis",
      icon: Brain,
      category: "neuro",
      description: "Disease affecting brain and spinal cord",
    },
    {
      name: "Parkinson's Disease",
      icon: Brain,
      category: "neuro",
      description: "Progressive nervous system disorder",
    },
    {
      name: "Alzheimer's Disease",
      icon: Brain,
      category: "neuro",
      description: "Early-onset cognitive decline before 65",
    },
    {
      name: "Motor Neuron Disease",
      icon: Brain,
      category: "neuro",
      description: "Progressive neurological condition",
    },
    {
      name: "Muscular Dystrophy",
      icon: Activity,
      category: "neuro",
      description: "Genetic disease causing muscle weakness",
    },
    {
      name: "Kidney Failure",
      icon: Activity,
      category: "organ",
      description: "Complete kidney failure requiring dialysis",
    },
    {
      name: "Major Organ Transplant",
      icon: Activity,
      category: "organ",
      description: "Transplantation of major organs",
    },
    {
      name: "Liver Failure",
      icon: Activity,
      category: "organ",
      description: "End-stage liver failure",
    },
    {
      name: "Lung Disease",
      icon: Activity,
      category: "organ",
      description: "Severe lung disease requiring oxygen",
    },
    {
      name: "Major Burns",
      icon: AlertCircle,
      category: "accidents",
      description: "Third-degree burns covering large area",
    },
    {
      name: "Coma",
      icon: Brain,
      category: "accidents",
      description: "State of unconsciousness lasting 96+ hours",
    },
    {
      name: "Blindness",
      icon: AlertCircle,
      category: "accidents",
      description: "Complete and permanent loss of vision",
    },
    {
      name: "Deafness",
      icon: AlertCircle,
      category: "accidents",
      description: "Complete and permanent loss of hearing",
    },
    {
      name: "Loss of Speech",
      icon: Activity,
      category: "accidents",
      description: "Total and permanent loss of speech",
    },
    {
      name: "Major Head Trauma",
      icon: Brain,
      category: "accidents",
      description: "Severe head injury with permanent deficit",
    },
    {
      name: "Paralysis",
      icon: Activity,
      category: "accidents",
      description: "Complete loss of use of two or more limbs",
    },
    {
      name: "Loss of Independence",
      icon: Activity,
      category: "accidents",
      description: "Unable to perform daily activities",
    },
  ];

  const filteredIllnesses =
    activeCategory === "all"
      ? illnesses
      : illnesses.filter((illness) => illness.category === activeCategory);

  const displayedIllnesses = showAllConditions
    ? filteredIllnesses
    : filteredIllnesses.slice(0, 8);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <div className="fixed top-0 right-0 h-screen w-[720px] z-[10000] bg-gray-50 shadow-2xl overflow-y-auto">
        <div className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <XCircle size={24} />
          </button>
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
          <div className="w-[24px]" />
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Critical Illness Coverage
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm leading-relaxed">
                A Critical Illness Rider provides an additional lump-sum payment
                if you're diagnosed with specific serious illnesses. This money
                can be used for medical expenses, lifestyle changes, or any
                other purpose while you're still alive.
              </p>
            </div>
          </div>

          {/* New Premium Information Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Enhanced Plan Coverage
                  </h3>
                  <p className="text-sm text-gray-600">
                    Comprehensive protection against 25 critical illnesses
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    $45/month
                  </div>
                  <p className="text-sm text-gray-600">
                    Up to $250,000 coverage
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="text-blue-500 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-sm">
                      15-Day Waiting Period
                    </h4>
                    <p className="text-xs text-gray-600">
                      Coverage activates after initial waiting period
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-blue-500 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-sm">
                      Coverage Until Age 70
                    </h4>
                    <p className="text-xs text-gray-600">
                      Extended protection for your peace of mind
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign
                    className="text-blue-500 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      Additional Recovery Benefits
                    </h4>
                    <p className="text-xs text-gray-600">
                      Support during your recovery journey
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="text-blue-500 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-sm">
                      No Medical Test Required
                    </h4>
                    <p className="text-xs text-gray-600">
                      Simple application process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conditions Section */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">
                Covered Critical Illnesses
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive coverage for 25 serious medical conditions
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeCategory === "all"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All Conditions
              </button>
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeCategory === key
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Conditions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {displayedIllnesses.map(({ name, icon: Icon, description }) => (
                <div
                  key={name}
                  className="bg-white border rounded-lg p-3 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-2 items-center mb-2">
                    <Icon size={16} className="text-blue-500 flex-shrink-0" />
                    <h3 className="font-medium text-sm text-gray-900 leading-tight">
                      {name}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-tight">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Show More/Less Button */}
            <div className="text-center">
              <button
                onClick={() => setShowAllConditions(!showAllConditions)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
              >
                {showAllConditions ? (
                  <>
                    Show Less <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Show All 25 Conditions <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>

            {/* Enhanced Disclaimer */}
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle
                  className="text-orange-500 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="font-medium text-sm text-orange-800 mb-1">
                    Important Information
                  </h4>
                  <p className="text-sm text-orange-700">
                    This list is for informational purposes only. The coverage
                    of specific conditions may vary based on your policy. Some
                    conditions may have waiting periods or specific criteria for
                    qualification. Please carefully review your policy documents
                    or speak with your insurance advisor for complete coverage
                    details, terms, conditions, and exclusions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <DollarSign className="text-green-500 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-medium text-sm">Tax-Free Payment</h4>
                <p className="text-xs text-gray-600">
                  Full amount tax-free upon approval
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <Shield className="text-green-500 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-medium text-sm">Worldwide Coverage</h4>
                <p className="text-xs text-gray-600">Protection until age 75</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-medium text-sm">Flexible Usage</h4>
                <p className="text-xs text-gray-600">
                  No restrictions on fund usage
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
          <div className="text-gray-900 font-semibold text-xl">
            ${coverage}
            <span className="text-gray-500 text-base font-normal">/month</span>
          </div>
          <button className="bg-secondary text-black  px-6 py-2 rounded-lg font-medium transition-colors">
            Add to Policy
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default EnhancedCi;
