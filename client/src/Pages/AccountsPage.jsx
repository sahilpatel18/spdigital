import { CpuChipIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import Modal from "../Components/Modal";

const AccountsPage = () => {
  const { user } = useAuth();
  const [account, setAccount] = useState({});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAccount = async () => {
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
    };
    fetchAccount();
  }, [user]);

  const handleEdit = () => {
    setIsModalOpen(!isModalOpen);
  };

  //use for Spinning loader Testing
  // useEffect(() => {
  //   // Add a delay of 5 seconds before fetching the data
  //   const timer = setTimeout(async () => {
  //     if (user && user.id) {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_BASE_URL}/user/${user.id}`
  //       );
  //       const data = await response.json();
  //       setAccount(data);
  //       setLoading(false);
  //     } else {
  //       setLoading(false);
  //     }
  //   }, 5000); // 5000ms = 5s

  //   return () => clearTimeout(timer); // Cleanup timer when component is unmounted
  // }, [user?.id]);

  const loader = (
    <div className="flex items-center justify-center h-screen">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-t-4 border-indigo-600 border-r-transparent border-b-4 border-l-4 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );

  return loading ? (
    loader
  ) : (
    <div className="mx-12 my-10 sm:mx-10">
      <div className="px-4 sm:px-0 flex justify-between items-center">
        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Account Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        {isModalOpen ? (
          <Modal isOpen={isModalOpen} toggleModal={handleEdit} user={account} />
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            className="text-indigo-600 hover:text-white border border-indigo-600 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-indigo-600 dark:text-indigo-600 dark:hover:text-white dark:hover:bg-indigo-800"
          >
            Edit
          </button>
        )}
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {account.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {account.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Company
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {account.company}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Solutions Purchased
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
                {account?.solutionsPurchased?.length < 1 ? (
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <CpuChipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          No solutions purchased
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        to="/solutions"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Browse
                      </Link>
                    </div>
                  </li>
                ) : (
                  account?.solutionsPurchased?.map((solution, index) => {
                    return (
                      <li
                        className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                        key={index}
                      >
                        <div className="flex w-0 flex-1 items-center">
                          <CpuChipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              {solution.title}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default AccountsPage;
