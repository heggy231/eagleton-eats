// import Food from "./food-wooden.jpeg";
import React, {useState, useEffect} from 'react';
import { Button } from "react-bootstrap";
import './home.css';
import { Link } from 'react-router-dom';

const Landing = () => {

  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    try {
      fetch("/auth/userinfo")
        .then((res) => res.json())
        .then((userData) => {
          console.log("user login?", userData);
          setUserLogin(true)
        });
    } catch (error) {
      console.error("user data request error ====>", error.message)
    }
  }, [])

  return (
    <>
      <h1>Welcome to Our Eagleton Food Truck</h1>
      {
        // if user is logged in, only show Logout button
        userLogin ? <a href="/auth/logout">Logout</a> : <a href="/auth/github">Login with Github</a>
      }
    </>
  )
};

export default Landing;