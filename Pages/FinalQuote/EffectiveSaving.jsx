import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import {
  X,
  Percent,
  Clock,
  Check,
  ChevronDown,
  Info,
  ArrowRight,
} from "lucide-react";

const EffectiveSaving = ({ setEffSaving, setPayTermLength, payTermLength }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const paymentPlans = [
    {
      years: 10,
      coverage: 100,
      savings: 40,
      monthlyPayment: 250,
      totalSavings: 15000,
      features: [
        {
          title: "Lower total premium outlay",
          detail: "Save $15,000 over the life of the policy",
        },
        {
          title: "Faster cash value accumulation",
          detail: "Build cash value 40% faster than traditional plans",
        },
        {
          title: "Earlier premium freedom",
          detail: "Complete payments in just 10 years",
        },
      ],
    },
    {
      years: 20,
      coverage: 100,
      savings: 40,
      monthlyPayment: 150,
      totalSavings: 12000,
      features: [
        {
          title: "More affordable payments",
          detail: "Lower monthly payments spread over 20 years",
        },
        {
          title: "Extended payment flexibility",
          detail: "Option to pay more when it suits your budget",
        },
        {
          title: "Balanced cash value growth",
          detail: "Steady accumulation over a longer period",
        },
      ],
    },
  ];

  const handlePlanClick = (years) => {
    setSelectedPlan(years);
  };
  return (
    <div className="w-full verflow-hidden relative h-max  p-2 flex justify-between items-center flex-col gap-[2rem] ">
      {" "}
      <button
        className="absolute top-0 right-0"
        onClick={() => {
          setEffSaving(false);
        }}
      >
        <Close sx={{ fontSize: "20px" }} />
      </button>
      <div className="w-full h-full flex justify-between items-center flex-col">
        <h2
          // style={{ borderBottom: "1px solid #ccc" }}
          className="text-[20px] px-6 pb-1 mb-2  pt-0  font-semibold text-center text-halfBlack w-full"
        >
          Save money with limited Pay
        </h2>

        <div className="p-6 pt-4">
          <div className="grid grid-cols-2 gap-6">
            {paymentPlans.map((plan) => (
              <div
                key={plan.years}
                className={`border rounded-lg overflow-hidden bg-white transition-all duration-300 ${
                  selectedPlan === plan.years
                    ? "border-teal-500 shadow-lg scale-[1.02]"
                    : "border-teal-100 hover:shadow-md"
                }`}
              >
                <div
                  className={`bg-teal-600 text-white p-4 text-center transition-colors duration-300 ${
                    selectedPlan === plan.years ? "bg-teal-700" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold">
                    Pay for {plan.years} years
                  </h3>
                  <p className="text-sm opacity-90">
                    Covered till {plan.coverage} years
                  </p>
                </div>

                {/* Savings Badge */}
                <div className="flex items-center justify-center gap-2 py-4 bg-yellow-50">
                  <Percent className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">
                    Save Up to {plan.savings}%
                  </span>
                </div>

                {/* Monthly Payment */}
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Monthly Payment
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${plan.monthlyPayment}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="group relative"
                        onMouseEnter={() =>
                          setHoveredFeature(`${plan.years}-${index}`)
                        }
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-teal-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {feature.title}
                          </span>
                          <Info className="w-4 h-4 text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        {hoveredFeature === `${plan.years}-${index}` && (
                          <div className="absolute z-10 left-0 right-0 mt-2 p-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg">
                            {feature.detail}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 ">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Savings</span>
                      <span className="font-semibold text-teal-600">
                        ${plan.totalSavings}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-4 border-t border-gray-100">
                  <button
                    onClick={() => handlePlanClick(plan.years)}
                    className="w-full group relative bg-secondary hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Save Money Now</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectiveSaving;
