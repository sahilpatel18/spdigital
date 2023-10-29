import React from "react";
import { Link } from "react-router-dom";
import GradientBackground from "./GradientBackground";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../data/reviews";
import carouselSettings from "../config/carouselSettings";


const SolutionDetailsPage = ({ title, price, description }) => {
  return (
    <div className="bg-white min-h-screen p-8 relative">
      <div className="absolute inset-0 z-0">
        <GradientBackground />
      </div>

      <div className="max-w-2xl mx-auto z-10 relative mt-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl transform-gpu transition-transform hover:-translate-y-1 hover:scale-105">
          <div className="p-8">
            <Link
              to="/solutions"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Back
            </Link>
            <div className="mt-4">
              <h1 className="text-3xl font-bold text-gray-800 break-words">
                SEO OPTIMIZATION{title}
              </h1>
              <p className="text-xl text-gray-500 mt-2">Price: $300{price}</p>
              <p className="mt-4 text-gray-600 whitespace-pre-line">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                ad dignissimos reiciendis ipsam ex deleniti nemo, possimus culpa
                doloremque consequatur explicabo exercitationem magni quam
                soluta vero repellat provident molestias qui.{description}
              </p>
              <button className="w-full bg-indigo-600 text-white mt-6 py-2 rounded-md hover:bg-indigo-500 transition-colors">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-2xl mx-auto mt-40 z-10 relative">
        <Slider {...carouselSettings} className="mt-4">
          {reviews.map((review) => (
            <div key={review.id} className="px-2 rounded-lg">
              <div className="flex flex-col items-center p-4 bg-white scale-95 rounded-lg border border-indigo-100 shadow-md transform-gpu transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-indigo-700">
                  {review.name}
                </h3>
                <p className="text-gray-600 mt-1 text-center">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SolutionDetailsPage;
