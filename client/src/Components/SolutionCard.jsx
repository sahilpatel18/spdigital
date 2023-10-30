import { Link } from "react-router-dom";

const SolutionCard = ({ id, title, price }) => {
  return (
    <div className="max-w-lg my-5 bg-white rounded-lg shadow-xl p-6 flex justify-between items-center transform hover:-translate-y-1 transition-transform overflow-hidden">
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-gray-600 whitespace-nowrap overflow-hidden overflow-ellipsis">
          Starting at ${price}
        </p>
      </div>
      <div className="ml-4">
        <Link to={`/solutions/${id}`}>
          <button className="bg-transparent border border-indigo-500 text-indigo-500 py-2 px-4 rounded hover:bg-indigo-100 transition-colors">
            View
          </button>
        </Link>

        <button className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded">
          Buy
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;
