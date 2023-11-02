import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AboutPage from "./Pages/AboutPage";
import HeroPage from "./Pages/HeroPage";
import ContactPage from "./Pages/ContactPage";
import SolutionsPage from "./Pages/SolutionsPage";
import TechnologyPage from "./Pages/TechnologyPage";
import Navbar from "./Components/Navbar";
import WorkPage from "./Pages/WorkPage";
import CareersPage from "./Pages/CareersPage";
import AccountsPage from "./Pages/AccountsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SolutionDetailPage from "./Pages/SolutionDetailPage";
import CheckoutPage from "./Pages/CheckoutPage";
import SuccessPage from "./Pages/SuccessPage";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <HeroPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/solutions",
          element: <SolutionsPage />,
        },
        {
          path: "/solutions/:id",
          element: <SolutionDetailPage />,
        },
        {
          path: "/checkout/:id",
          element: <CheckoutPage />,
        },
        {
          path: "/technology",
          element: <TechnologyPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/success",
          element: <SuccessPage />,
        },
        {
          path: "/error",
          element: <ErrorPage />,
        },
        {
          path: "/work",
          element: <WorkPage />,
        },
        {
          path: "/careers",
          element: <CareersPage />,
        },
        {
          path: "/account",
          element: <AccountsPage />,
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
