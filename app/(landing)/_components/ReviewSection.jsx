import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewSection = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      review:
        "The AI Mock Interview platform helped me practice and prepare thoroughly. I landed my dream job thanks to the personalized feedback!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      review:
        "An excellent tool for interview preparation! The questions were relevant and the feedback was constructive.",
    },
    {
      name: "Mark Johnson",
      rating: 5,
      review:
        "I love how intuitive the platform is. The AI-generated questions were spot on, and I felt well-prepared for my interview.",
    },
    {
      name: "Emily Davis",
      rating: 4,
      review:
        "A great way to practice! The feedback was insightful, and I appreciated the flexibility in scheduling sessions.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6" id="about">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          What Our <span className="text-blue-500">Users Say</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-300">{review.review}</p>
              <div className="flex items-center justify-center mt-2 mb-2">
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                  <FaStar key={i + review.rating} className="text-gray-600" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
