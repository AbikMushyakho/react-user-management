import axios from "axios";
import { Formik } from "formik";
import React  from "react";
import {  Link, useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "../../validation-schema/UserRegisterSchema";
import { Global, RegisterContainer } from "../styled/form.styled";
import TextField from "../TextField";

const Login = () => {
  const navigate = useNavigate();
  document.title = "User Login";
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Global />
      <RegisterContainer>
        <h1>Login</h1>
        <br />
        <hr />
        <br/>
        <br/>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(data, { resetForm }) => {
            console.log(data);
            axios
              .post("http://localhost:3001/user/login", data)
              .then((response) => {
                alert(response.data.message);
                
                resetForm({});
                navigate('/home',{replace:true})
              })
              .catch((error) => {
                alert(error.response.data.message);
              });
          }}
          validationSchema={LoginValidationSchema}
        >
          {({ error, values, handleSubmit, handleChange }) => {
            return (
              <form onSubmit={handleSubmit}>
                <label>Email</label>
                <TextField name="email" type="email" />
                <label>Password</label>
                <TextField name="password" type="password" />
                <input
                  type="submit"
                  value="Login"
                  style={{
                    backgroundColor: "#F19333",
                    color: "white",
                    marginTop: "0.5rem",
                    padding: "0.4rem",
                    border: "none",
                    borderRadius: "0.5rem",
                    width: "7rem",
                    cursor:'pointer'
                  }}
                />
                      
                    <Link to="/signup"
                   >
                   <button  style={{
                      marginTop: "0.5rem",
                      marginLeft:'0.5rem',
                      padding: "0.4rem",
                      border: "none",
                      borderRadius: "0.5rem",
                      width: "7rem",
                      cursor:'pointer'
                    }}>Create One!!!</button> 
                    </Link>

        
              </form>
            );
          }}
        </Formik>
      </RegisterContainer>
    </div>
  );
};

export default Login;
