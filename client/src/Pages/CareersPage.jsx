import React, { useState, useEffect } from "react";
import GradientBackground from "../Styles/GradientBackground"; // Assuming similar styling as SolutionDetailsPage
import JobListCard from "../Components/JobListCard";



const CareersPage = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/job-listing`
        );
        if (response.ok) {
          const data = await response.json();
          setJobListings(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchListings();
  }, []);

  return (
    <div className="bg-white min-h-screen p-8 relative">
      <div className="absolute inset-0 z-0">
        <GradientBackground />
      </div>

      <div className="max-w-2xl mx-auto z-10 relative mt-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Career Opportunities
        </h1>

        <div className="mt-8">
          {jobListings.map((job) => {
            return (
              <JobListCard
                id={job._id}
                title={job.title}
                experience={job.experience}
                key={job._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
