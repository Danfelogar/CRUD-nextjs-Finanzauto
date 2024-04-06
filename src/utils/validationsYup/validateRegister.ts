import * as yup from "yup";

export const validateRegister = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Enter a valid email."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters."),
  emailConfirm: yup
    .string()
    .required("Email confirmation is required.")
    .test("emailConfirm", "Emails must match", function (value) {
      return this.parent.email === value;
    }),
  passwordConfirm: yup
    .string()
    .required("Password confirmation is required.")
    .test("passwordConfirm", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
