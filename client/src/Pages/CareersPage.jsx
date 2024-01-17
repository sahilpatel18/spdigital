import React, { useState, useEffect } from "react";
import GradientBackground from "../Styles/GradientBackground"; // Assuming similar styling as SolutionDetailsPage
import JobListCard from "../Components/JobListCard";

const dummyJobListings = [
  { id: 1, title: "Frontend Developer", experience: "Junior" },
  { id: 2, title: "Backend Developer", experience: "Mid-level" },
  { id: 3, title: "Full Stack Developer", experience: "Senior" },
];

const CareersPage = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    setJobListings(dummyJobListings);
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
                id={job.id}
                title={job.title}
                experience={job.experience}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
