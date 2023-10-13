import * as Yup from "yup";
export const loginPageValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});
