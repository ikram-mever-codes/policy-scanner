import Image from "next/image";
import React from "react";
import termLife2 from "../../assets/term-life-2.png";
import termLife4 from "../../assets/term-life-4.png";
import termLife3 from "../../assets/term-life-3.png";

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
    <section className="w-full min-h-[80vh] px-6 sm:px-12 lg:px-20 py-12 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-12">
        <h2 className="w-full font-bold text-2xl sm:text-3xl md:text-4xl text-center text-gray-800">
          Explore Our Guides
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="min-h-[300px] bg-white shadow-lg flex flex-col rounded-xl border border-gray-200 overflow-hidden"
            >
              {/* Image */}
              <Image
                src={blog.image}
                className="w-full h-[180px] object-cover"
                alt={blog.title}
              />
              {/* Content */}
              <div className="flex flex-col justify-between h-full p-4">
                <h3 className="text-lg font-medium text-gray-800">
                  {blog.title}
                </h3>
                <h4 className="text-sm text-gray-600 mt-2">
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
