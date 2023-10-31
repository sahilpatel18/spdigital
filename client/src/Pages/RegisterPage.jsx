import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerValidationSchema } from "../validation/registerValidationSchema";
import { useNavigate } from "react-router-dom";
import GradientBackground from "../Styles/GradientBackground";

const RegisterPage = () => {
  const navigate = useNavigate();

  const registerUser = async (userData) => {
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/register`,
        config
      );
      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white min-h-screen px-6 py-24 lg:px-8">
      <GradientBackground />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-3xl font-bold leading-9 text-center tracking-tight text-gray-900">
          Register Your Account
        </h2>
      </div>
      {/* registration form */}
      <div className="mx-auto mt-8 max-w-md bg-white p-6 pb-10 rounded-lg shadow-2xl transition-transform hover:-translate-y-1 hover:scale-105 form-container">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            company: "",
            solutionsPurchased: [],
          }}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {
            registerUser(values);
          }}
        >
          {(formik) => (
            <Form className="space-y-6">
              {/* name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <Field
                    id="name"
                    name="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />

                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>

              {/* email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <Field
                    id="email"
                    name="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              {/* password input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              {/* company input */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2">
                  <Field
                    id="company"
                    name="company"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="company"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
