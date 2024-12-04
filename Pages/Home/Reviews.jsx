"use client";
import React, { useEffect, useRef } from "react";
import { Star } from "@mui/icons-material";
import Image from "next/image";
import { gsap } from "gsap";
import avatar from "../../assets/avatar.png";

const reviews = [
  {
    name: "Alex Dork",
    avatar: avatar,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
  },
  {
    name: "Peter Winters",
    avatar: avatar,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rating: 5,
  },
  {
    name: "Sarah Parker",
    avatar: avatar,
    content:
      "This service was a lifesaver! The team went above and beyond to ensure my satisfaction. Highly recommend!",
    rating: 5,
  },
  // Add more reviews as needed
];

const Reviews = () => {
  const marqueeRef = useRef(null);
  const marqueeContainerRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeContainer = marqueeContainerRef.current;

    // Duplicate the content to achieve seamless scrolling
    marqueeContainer.innerHTML += marqueeContainer.innerHTML;

    const totalWidth = marquee.scrollWidth;

    gsap.to(marquee, {
      x: -totalWidth / 2,
      duration: 20, // Adjust the duration for speed
      ease: "linear",
      repeat: -1,
    });

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf(marquee);
    };
  }, []);

  return (
    <section className="py-[60px] bg-foreground2 flex flex-col justify-center items-center w-full">
      <div className="w-full overflow-hidden">
        <div ref={marqueeRef} className="flex">
          <div
            ref={marqueeContainerRef}
            className="flex gap-6 items-center w-max whitespace-nowrap"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-[400px] p-6 h-[12rem] overflow-hidden bg-white rounded-lg shadow-xl flex flex-col items-start gap-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={review.avatar}
                    alt={`${review.name}'s avatar`}
                    width={60}
                    height={60}
                    className="rounded-full object-cover w-[60px] h-[60px]"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-halfBlack">
                      {review.name}
                    </h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          sx={{ color: "#FFD700" }}
                          fontSize="small"
                          aria-label="Star rating"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-halfBlack text-[16px]   text-wrap">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
