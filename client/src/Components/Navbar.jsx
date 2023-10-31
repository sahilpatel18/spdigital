import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const activeLinkClass =
    "text-indigo-600 font-semibold leading-6 border-indigo-600 ";
  const defaultLinkClass =
    " font-semibold leading-6 hover:text-indigo-500 text-gray-900 ";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav
        className="z-20 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${activeLinkClass}` : `${defaultLinkClass}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? `${activeLinkClass}` : `${defaultLinkClass}`
            }
          >
            Solutions
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? `${activeLinkClass}` : `${defaultLinkClass}`
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? `${activeLinkClass}` : `${defaultLinkClass}`
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive ? `${activeLinkClass}` : `${defaultLinkClass}`
            }
          >
            Technology
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${activeLinkClass}` : `${defaultLinkClass}`
            }
          >
            Contact
          </NavLink>
        </Popover.Group>

        {user ? (
          <>
            <div className="mx-9 hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  isActive ? `${activeLinkClass}` : `${defaultLinkClass}`
                }
              >
                {user.email} <span aria-hidden="true"></span>
              </NavLink>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink
                to="/"
                className="font-semibold leading-6 text-gray-900 hover:text-red-600 "
                onClick={() => {
                  Cookies.remove("authToken");
                  setUser(null);
                  toast.success("Successfully Logged Out", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Logout <span aria-hidden="true"></span>
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? `${activeLinkClass}` : `${defaultLinkClass}`
                }
              >
                Log in <span aria-hidden="true"></span>
              </NavLink>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? `${activeLinkClass}` : `${defaultLinkClass}`
                }
              >
                Register <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          </>
        )}
      </nav>

      {/* Nav for mobile */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </NavLink>
                <NavLink
                  to="/solutions"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Solutions
                </NavLink>
                <NavLink
                  to="/work"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Work
                </NavLink>
                <NavLink
                  to="/careers"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Careers
                </NavLink>
                <NavLink
                  to="/technology"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Technology
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </NavLink>
              </div>

              {user ? (
                <>
                  <div className="py-6">
                    <NavLink
                      onClick={() => setMobileMenuOpen(false)}
                      to="/account"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {user.email}
                    </NavLink>
                  </div>

                  <div className="py-6">
                    <NavLink
                      to="/"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => {
                        Cookies.remove("authToken");
                        setUser(null);
                        setMobileMenuOpen(false);
                        toast.success("Successfully Logged Out", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                      }}
                    >
                      Logout
                    </NavLink>
                  </div>
                </>
              ) : (
                <>
                  <div className="py-6">
                    <NavLink
                      onClick={() => setMobileMenuOpen(false)}
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Login
                    </NavLink>
                  </div>

                  <div className="py-6">
                    <NavLink
                      onClick={() => setMobileMenuOpen(false)}
                      to="/register"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Register
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <Outlet />
    </header>
  );
};

export default Navbar;
