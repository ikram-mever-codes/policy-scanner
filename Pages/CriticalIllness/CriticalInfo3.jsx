import React from "react";

const CriticalInfo3 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[60px] pb-0 flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[1rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          What does Critical Insurance Cover?
        </h2>
        <div className="flex justify-start items-start flex-col gap-[1rem] ">
          <p className="text-dg text-halfBlack px-1">
            Critical illness insurance protects against loss from serious
            illnesses.
          </p>
          <div className="w-full h-max grid grid-cols-3 gap-[2rem]">
            {[
              {
                title: "Cancer",
                desc: "1 in 2 Canadians will be diagnosed with cancer in their lifetime.",
              },

              {
                title: "Heart Attack",
                desc: "1 in 4 Canadians will develop some form of heart disease.",
              },
              {
                title: "Stroke",
                desc: "50,000 Canadians suffer a stroke every year.",
              },
              {
                title: "Kidney Failure",
                desc: "1 in 10 Canadians have kidney disease.",
              },
              {
                title: "Multiple Sclerosis (MS)",
                desc: "Highest Canada has one of the highest rates of MS in the world.",
              },
              {
                title: "Alzheimer's Dementia",
                desc: "1.1 million Canadians are directly or indirectly affected by these conditions.",
              },
            ].map((c) => {
              return (
                <div
                  className="w-[340px] h-[220px] flex hover:shadow-xl hover:scale-105 justify-center items-center transition-all duration-[350ms] ease-in-out
   flex-col p-5 gap-7  border rounded-xl border-opposite border-solid"
                >
                  <div className="text-[20px] font-semibold text-halfBlack">
                    {c.title}
                  </div>
                  <div className="text-center text-halfBlack text-dg">
                    {c.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <ul className="custom-list-bullets flex flex-col gap-[30px] text-[16px] mt-5">
            <li className="w-full ">
              <div className="w-full">
                <p className="text-dg text-halfBlack">
                  In Canada, while hospital visits are covered by the
                  government, the cost of treatment and lost income can still be
                  overwhelming.C.I provides a tax-free lump sum payout during
                  this vulnerable time.
                </p>
              </div>
            </li>
            <li className="w-full">
              <div className="w-full h-max ">
                <p className="text-dg text-halfBlack">
                  Since the specific illnesses covered vary between insurance
                  providers, it's essential to compare policies if you need
                  coverage for a particular condition. Commonly covered
                  illnesses include brain tumors, blindness, cancer, coronary
                  artery bypass surgery, deafness, dementia, heart attacks,
                  kidney failure, limb loss, organ failures, multiple sclerosis,
                  and more.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CriticalInfo3;
