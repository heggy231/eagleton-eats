// import Food from "./food-wooden.jpeg";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";

const Landing = () => {
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    try {
      fetch("/auth/userinfo")
        .then((res) => res.json())
        .then((userData) => {
          console.log("user login?", userData);
          setUserLogin(true);
        });
    } catch (error) {
      console.error("user data request error ====>", error.message);
    }
  }, []);

  const jumboStyle = {
    backgroundColor: "#ebf0f573",
    marginTop: "-1rem",
  };

  return (
    <>
      <div className="jumbotron" style={jumboStyle}>
        <h1>Welcome to Our Eagleton Food Truck</h1>
        <p>A Place where heart opens up and stronger relationship is forged!</p>
        {
          // if user is logged in, only show Logout button
          userLogin ? (
            <a href="/auth/logout" className="btn btn-primary">
              Logout
            </a>
          ) : (
            <a href="/auth/github" className="btn btn-primary">
              Login with Github
            </a>
          )
        }
      </div>
    </>
  );
};

export default Landing;
