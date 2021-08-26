// import Food from "./food-wooden.jpeg";
import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import './home.css';
import { Link } from 'react-router-dom';

const Landing = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    setIsAuthenticated(true);
    console.log("loggedInUser:" + isAuthenticated);
  }

  function logout() {
    setIsAuthenticated(false);
    console.log("loggedInUser:" + isAuthenticated);
  }

  return (
    <>
      <h1>Welcome to Our Eagleton Food Truck</h1>
      <Link to="/auth/github" target="_self"><Button>Github Login</Button></Link>
      <br />
      <button onClick={login}>Login</button>
      <br />
      <button onClick={logout}>Logout</button>
    </>
  )
};

export default Landing;