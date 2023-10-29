import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GradientBackground from "./GradientBackground";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../data/reviews";
import carouselSettings from "../config/carouselSettings";
import { useAuth } from "../context/AuthContext";

const SolutionDetailsPage = () => {
  const { user } = useAuth();
  const [solution, setSolution] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSolution = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/solutions/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setSolution(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSolution();
  }, [id]);

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
                {solution.title}
              </h1>
              <p className="text-xl text-gray-500 mt-2">
                Price: ${solution.price}
              </p>
              <p className="mt-4 text-gray-600 whitespace-pre-line">
                {solution.description}
              </p>
              {user ? (
                <>
                  <button className="w-full bg-indigo-600 text-white mt-6 py-2 rounded-md hover:bg-indigo-500 transition-colors">
                    Purchase Now
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="w-full bg-indigo-600 text-white mt-6 py-2 rounded-md hover:bg-indigo-500 transition-colors">
                      Login To Purchase
                    </button>
                  </Link>
                </>
              )}
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
