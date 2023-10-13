
import * as Yup from "yup";

export const contactFormValidationSchema  = Yup.object().shape({
    name: Yup.string().required("Required").trim(),
    company: Yup.string().required("Required").trim(),
    email: Yup.string().email("Invalid Format").required("Required"),
    phone: Yup.string()
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid Phone Number")
      .required("Required"),
    message: Yup.string().required("Required").trim(),
  });