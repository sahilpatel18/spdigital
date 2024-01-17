import React from "react";

import { Link, useParams } from "react-router-dom";

const JobListCard = ({ id, title, experience }) => {
  return (
    <Link to={`/careers/${id}`}>
      <div
        key={id}
        className="bg-white rounded-lg overflow-hidden shadow-2xl transform-gpu transition-transform hover:-translate-y-1 hover:scale-105 my-4"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500">Experience Level: {experience}</p>
        </div>
      </div>
    </Link>
  );
};

export default JobListCard;
