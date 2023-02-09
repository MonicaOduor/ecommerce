import { Formik, Form, ErrorMessage } from "formik";
import LoginInput from "./LoginInput";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function Login() {
  const validate = Yup.object({
    userName: Yup.string().required("Username Required!"),
    password: Yup.string()
      .min(4, "Password must be minimum 4 digits!")
      .required("Password Required!")
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
                  <strong>Log In</strong>
                </h2>
                <Form className="form p-3">
                  <LoginInput type="text" label="Username" name="userName" />
                  <LoginInput
                    type="password"
                    name="password"
                    label="Password"
                  />
                  <button type="submit" className="w-100 mt-3 btn-dark btn">
                    Log In
                  </button>
                </Form>
                <div className="w-100 text-center mt-3">
                  <Link to='/forgotpassword'>Forgot Password</Link>
                </div>
                <div className="w-100 text-center mt-2 mb-4">
                  Need an account?
                  <Link to='/signup'>Sign up</Link>
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
