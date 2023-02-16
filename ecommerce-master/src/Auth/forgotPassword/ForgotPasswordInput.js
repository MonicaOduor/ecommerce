import React from "react";
import { ErrorMessage, useField } from "formik";

const ForgotPasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      {label ? <label htmlFor={field.name}>{label}</label> : <></>}
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="on"
      />
      <ErrorMessage
        component="p"
        name={field.name}
        className="error test-danger"
        style={{ fontSize: "12px", color: "red" }}
      />
    </div>
  );
};

export default ForgotPasswordInput;
