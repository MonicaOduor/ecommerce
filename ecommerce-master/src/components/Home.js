import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="text-center">
        <p>
          <Link to="/login"> Log In</Link>
        </p>
        <p>
          <Link to="/signup"> Sign Up</Link>
        </p>
        <p>
          <Link to="/forgotpassword"> Forgot Password</Link>
        </p>
      </div>
    </div>
  );
}
