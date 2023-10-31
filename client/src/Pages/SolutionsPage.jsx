import { useEffect, useState } from "react";
import SolutionCard from "../Components/SolutionCard";
import GradientBackground from "../Styles/GradientBackground";

const SolutionsPage = () => {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/solutions`
        );

        if (response.ok) {
          const data = await response.json();
          setSolutions(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSolutions();
  }, []);

  return (
    <div className="bg-white min-h-screen p-8">
      <GradientBackground />
      <h1 className="text-3xl font-bold text-indigo-500 mb-6">Our Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <SolutionCard
            id={solution._id}
            title={solution.title}
            price={solution.price}
            key={solution._id}
          />
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;
