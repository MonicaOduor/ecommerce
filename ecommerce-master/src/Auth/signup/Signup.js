import { Formik, Form, ErrorMessage } from "formik";
import SignupInput from "./SignupInput";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function SignUp() {
  const validate = Yup.object({
    userName: Yup.string().required("Username Required!"),
    email: Yup.string().email("Email is invalid!").required("Email Required!"),
    password: Yup.string()
      .min(4, "Password must be minimum 4 digits!")
      .required("Password Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match!")
      .required("Confirm password is required!"),
  });

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="card rounded-0 w-100">
          <div className="card-body"></div>
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {/* this alert is unnecessary, demo purposes only, remove this comment and it too */}

            {(formik) => (
              <div>
                <h2 className="text-center mb-4">
                  <strong>Sign Up</strong>
                </h2>
                <Form className="form p-3">
                  <SignupInput type="text" label="Username" name="userName" />
                  <SignupInput type="email" name="email" label="Email" />
                  <SignupInput
                    type="password"
                    name="password"
                    label="Password"
                  />
                  <div className="mb-2">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <SignupInput
                      id="confirmPassword"
                      className={`form-control shadow-none ${
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword &&
                        "is-invalid"
                      }`}
                      type="password"
                      name="confirmPassword"
                      {...formik.getFieldProps("confirmPassword")}
                    />
                  </div>
                  <button type="submit" className="w-100 mt-3 btn-dark btn">
                    Sign Up
                  </button>
                </Form>
                <div className="w-100 text-center mt-2 mb-4">
                  Already have an account? <Link to="/login"> Log In</Link>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

const initialValues = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
