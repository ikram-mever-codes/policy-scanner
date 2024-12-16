import React, { useState } from "react";
import {
  Shield,
  Heart,
  Home,
  GraduationCap,
  Wallet,
  Users,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TermInfo = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const lifeScenarios = [
    {
      title: "Just Got Married",
      coverage: "CAD 250,000",
      explanation:
        "Enough to cover joint debts and give your spouse time to adjust",
    },
    {
      title: "New Parent",
      coverage: "CAD 500,000",
      explanation:
        "Covers childcare, education, and family expenses for your growing family",
    },
    {
      title: "Homeowner",
      coverage: "CAD 400,000",
      explanation: "Helps pay off the mortgage and maintain the family home",
    },
  ];

  const costExamples = [
    { age: "30 years old", cost: 25, health: "Good health, non-smoker" },
    { age: "35 years old", cost: 30, health: "Good health, non-smoker" },
    { age: "40 years old", cost: 40, health: "Good health, non-smoker" },
  ];

  const faqs = [
    {
      q: "Do I really need life insurance?",
      a: "If your family depends on your income, then yes. Think of it like this: if you weren't there tomorrow, would your family struggle to pay bills or maintain their lifestyle? Life insurance helps make sure they're taken care of financially.",
    },
    {
      q: "Isn't life insurance expensive?",
      a: "Not as much as you might think. Many people can get coverage for less than their monthly streaming services. For example, a healthy 30-year-old might pay just CAD 25 per month for CAD 500,000 of coverage.",
    },
    {
      q: "How do I know how much coverage I need?",
      a: "A simple way is to think about your family's needs: How much do you spend monthly? Do you have a mortgage? What about future college costs? Our calculator helps add these up, but many experts suggest 10 times your yearly income as a starting point.",
    },
    {
      q: "What if I already have insurance through work?",
      a: "That's a great start, but employer coverage usually isn't enough. It's typically 1-2 times your salary and ends if you leave your job. Having your own policy ensures your family is always protected.",
    },
  ];

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Real Life Examples Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Coverage That Makes Sense
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {lifeScenarios.map((scenario, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{scenario.title}</h3>
              <div className="text-2xl text-teal-600 font-bold mb-2">
                {scenario.coverage}
              </div>
              <p className="text-gray-600">{scenario.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Cost Breakdown */}
      <section className="bg-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            See How Affordable Protection Can Be
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="h-64 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={costExamples}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" />
                  <YAxis prefix="CAD " />
                  <Tooltip formatter={(value) => `CAD ${value}`} />
                  <Bar dataKey="cost" fill="#0D9488" name="Monthly Cost" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-gray-600 mb-6">
              Example monthly costs for CAD 500,000 coverage (20-year term)
            </p>
            <div className="text-center">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Check Your Rate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Life Insurance Matters
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Home className="text-teal-500" />
              Keep Your Home
            </h3>
            <p className="text-gray-600">
              Your family can stay in their home without worrying about mortgage
              payments or having to move during a difficult time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="text-teal-500" />
              Education Goals
            </h3>
            <p className="text-gray-600">
              Your kids' education plans stay on track, from elementary school
              through college graduation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wallet className="text-teal-500" />
              Daily Needs
            </h3>
            <p className="text-gray-600">
              Cover everyday expenses like groceries, utilities, and car
              payments so your family maintains their standard of living.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Heart className="text-teal-500" />
              Peace of Mind
            </h3>
            <p className="text-gray-600">
              Sleep better knowing your family will be financially secure, no
              matter what tomorrow brings.
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-teal-500" />
                  ) : (
                    <ChevronDown className="text-teal-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Protect Your Family?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Get covered in minutes for less than CAD 1 a day
          </p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center">
            Coverage amounts and prices shown are examples only. Your actual
            cost will depend on your age, health, and coverage needs. All
            amounts in Canadian Dollars (CAD).
          </p>
        </div>
      </footer>
    </article>
  );
};

export default TermInfo;
