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
  {
    name: "John Doe",
    avatar: avatar,
    content:
      "Fantastic experience from start to finish. The support team was incredibly helpful and responsive.",
    rating: 5,
  },
  {
    name: "Emma Stone",
    avatar: avatar,
    content:
      "I couldn't be happier with the service provided. Everything was handled professionally and efficiently.",
    rating: 5,
  },
];

const Reviews = () => {
  const marqueeRef = useRef(null);
  const marqueeContainerRef = useRef(null);
  const marqueeTween = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeContainer = marqueeContainerRef.current;

    const duplicatedReviews = [...reviews, ...reviews];

    const handleResize = () => {
      if (marquee) {
        const totalWidth = marqueeContainer.scrollWidth / 2;
        if (marqueeTween.current) {
          marqueeTween.current.kill();
        }
        marqueeTween.current = gsap.to(marquee, {
          x: -totalWidth,
          duration: 25,
          ease: "linear",
          repeat: -1,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      if (marqueeTween.current) {
        marqueeTween.current.kill();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (marqueeTween.current) {
      marqueeTween.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeTween.current) {
      marqueeTween.current.resume();
    }
  };

  return (
    <section className="py-[0px] bg-foreground2 flex flex-col justify-center items-center w-full">
      <div className="w-full overflow-hidden">
        <div ref={marqueeRef} className="flex">
          <div
            ref={marqueeContainerRef}
            className="flex gap-6 items-center w-max whitespace-nowrap  h-[312px] "
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-[400px] p-6  h-[12rem] overflow-hidden  bg-white rounded-lg shadow-xl flex flex-col items-start gap-4 transform transition-transform duration-300  hover:shadow-2xl cursor-pointer"
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
                          aria-label={`Rating ${review.rating} out of 5`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-halfBlack text-[16px] text-wrap">
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
