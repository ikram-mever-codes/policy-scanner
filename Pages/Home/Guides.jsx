import Image from "next/image";
import React from "react";
import termLife2 from "../../assets/term-life-2.png";
import termLife3 from "../../assets/term-life-3.png";
import termLife4 from "../../assets/term-life-4.png";

const Guides = () => {
  const blogs = [
    {
      id: 1,
      title: "Term Life Insurance",
      description: "The primary benefit of life insurance is providing",
      image: termLife2,
    },
    {
      id: 2,
      title: "Whole Life Insurance",
      description: "The primary benefit of life insurance is providing",
      image: termLife3,
    },
    {
      id: 3,
      title: "Mortgage Insurance",
      description: "The primary benefit of life insurance is providing",
      image: termLife4,
    },
    {
      id: 4,
      title: "Critical Illness",
      description: "The primary benefit of life insurance is providing",
      image: termLife3,
    },
  ];

  return (
    <section className="w-full px-4  py-[60px]  flex flex-col items-center">
      <div className="w-[1140px] max-w-7xl flex flex-col items-center gap-[90px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-halfBlack">
          Explore Our Guides
        </h2>

        <div className="w-full h-max flex justify-center items-center gap-[25px]">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="min-h-[267px] bg-white shadow-lg flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={blog.image}
                  fill
                  className="object-cover object-center"
                  alt={blog.title}
                />
              </div>

              <div className="flex flex-col justify-between h-max py-[20px] px-[25px]">
                <h3 className="text-halfBlack text-[22px] font-semibold">
                  {blog.title}
                </h3>
                <h4 className="text-[16px] text-halfBlack mt-1">
                  {blog.description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guides;
