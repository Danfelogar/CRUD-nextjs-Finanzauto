import * as yup from "yup";

export const validateLogin = yup.object().shape({
  email: yup
    .string()
    .required("Field is required.")
    .email("Enter a valid email."),
  password: yup.string().required("Field is required."),
});
