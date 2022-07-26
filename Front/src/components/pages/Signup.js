import React from "react";
import { RegisterContainer, Global } from "../styled/form.styled";
import { Formik } from "formik";
import TextField from "../TextField";
import { RegisterValidationSchema } from "../../validation-schema/UserRegisterSchema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  document.title = "User Registeration ";
  let navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Global />
      <RegisterContainer>
        <h1>Sign Up </h1>
        <hr />
        <Formik
          onReset={console.log("Form is being reset")}
          initialValues={{ email: "", password: "", username: "", address: "" }}
          onSubmit={(data, { resetForm }) => {
            axios
              .post("http://localhost:3001/user/register", data)
              .then((response) => {
                alert(
                  `${response.data.message}  "you will be redirected to login page after 3 seconds"`
                );
                resetForm({});

                setTimeout(() => {
                  navigate("/login", { replace: true });
                }, 3000);
              })
              .catch(function (error) {
                alert(error.response.data.message);
              });
          }}
          validationSchema={RegisterValidationSchema}
        >
          {({ errors, handleChange, handleSubmit, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <label>Username</label>
                <TextField name="username" type="text" />
                <label>Email</label>
                <TextField name="email" type="email" />
                <label>Password</label>
                <TextField name="password" type="password" />
                <label>Address</label>
                <TextField name="address" type="text" />
                <input
                  type="submit"
                  value="Register"
                  style={{
                    backgroundColor: "#F19333",
                    color: "white",
                    marginTop: "0.5rem",
                    padding: "0.4rem",
                    border: "none",
                    borderRadius: "0.5rem",
                    width: "7rem",
                  }}
                />
                <br />
            
                <Link to="/login">
                  <button
                    style={{
                      cursor: "pointer",
                      marginTop: "0.5rem",
                      padding: "0.4rem",
                      border: "none",
                      borderRadius: "0.5rem",
                      width: "10rem",
                    }}
                  >
                   Have an account!!
                  </button>
                </Link>
              </form>
            );
          }}
        </Formik>
      </RegisterContainer>
    </div>
  );
};

export default Signup;
