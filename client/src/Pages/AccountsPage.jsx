import { CpuChipIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Modal from "../Components/Modal";
import Loader from "../Components/Loader";

const AccountsPage = () => {
  const { user } = useAuth();
  const [account, setAccount] = useState({});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        if (user && user.id) {
          const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/user/${user.id}`
          );

          const data = await response.json();
          setAccount(data);
          setLoading(false);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAccount();
  }, [user]);

  const handleEdit = () => {
    setIsModalOpen(!isModalOpen);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-white min-h-screen px-6 py-24 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Account Information
            </h1>
            <p className="mt-2 text-gray-500">
              Personal details and application.
            </p>
          </div>
          {isModalOpen ? (
            <Modal
              isOpen={isModalOpen}
              toggleModal={handleEdit}
              user={account}
            />
          ) : (
            <button
              type="button"
              onClick={handleEdit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition duration-300"
            >
              Edit
            </button>
          )}
        </header>

        <section className="bg-white shadow rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Basic Information</h2>
            <p>
              <strong>Name:</strong> {account.name}
            </p>
            <p className="mt-2">
              <strong>Email:</strong> {account.email}
            </p>
            <p className="mt-2">
              <strong>Company:</strong> {account.company}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-5">Solutions Purchased</h2>

            {account?.solutionsPurchased?.length < 1 ? (
              <div className="flex items-center justify-between bg-gray-100 p-5 rounded-md">
                <div className="flex items-center">
                  <CpuChipIcon
                    className="h-5 w-5 text-gray-400 mr-3"
                    aria-hidden="true"
                  />
                  <span className="text-gray-600">No solutions purchased</span>
                </div>
                <Link
                  to="/solutions"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  Browse
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {account?.solutionsPurchased?.map((solution, index) => (
                  <div
                    className="rounded-md shadow-md p-5 bg-white hover:shadow-lg transition-shadow duration-200"
                    key={index}
                  >
                    <div className="flex items-center">
                      <CpuChipIcon
                        className="h-5 w-5 text-gray-400 mr-3"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700 font-medium">
                        {solution.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountsPage;
