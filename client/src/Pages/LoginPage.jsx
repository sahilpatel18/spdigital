import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { loginPageValidationSchema } from "../validation/loginPageValidationSchema";
import { useAuth } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import GradientBackground from "../Styles/GradientBackground";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const loginUser = async (userData) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/login`,
      config
    );

    if (response.ok) {
      const token = await response.json();

      Cookies.set("authToken", token, { expires: 1 / 24 });
      const decoded = jwtDecode(token);
      setUser(decoded);
      navigate("/");
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 lg:px-8">
      <GradientBackground />
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mx-auto mt-8 max-w-md bg-white p-6 pb-10 rounded-lg shadow-2xl transition-transform hover:-translate-y-1 hover:scale-105 form-container">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginPageValidationSchema}
          onSubmit={(values) => {
            loginUser(values);
          }}
        >
          {(formik) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2.5">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2.5">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
