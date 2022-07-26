import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import PageNotFound from "./components/pages/PageNotFound";
import Signup from "./components/pages/Signup";
import { Global } from "./components/styled/form.styled";

const App = () => {
  return (
    <div>
      <Global />

      <Router>
        <Routes>
          <Route
            index
            element={
              <>
                <h1>User Registeration Form</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button>
                    <Link to="/signup"> Signup</Link>
                  </button>
                  <button>
                    <Link to="/login"> Login</Link>
                  </button>
                </div>
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
