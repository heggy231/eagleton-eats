// import Food from "./food-wooden.jpeg";
import React, {useState, useEffect} from 'react';
import { Button } from "react-bootstrap";
import './home.css';
import { Link } from 'react-router-dom';

const Landing = ({ ...rest }) => {

  // function login() {
  //   setIsAuthenticated(true);
  //   console.log("loggedInUser:" + isAuthenticated);
  // }

  // function logout() {
  //   setIsAuthenticated(false);
  //   console.log("loggedInUser:" + isAuthenticated);
  // }
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
        userLogin ? <a href="/auth/logout">LogOUT</a> : <a href="/auth/github">Login with Github</a>
      }
{/*       
      <Link to="/auth/github" target="_self"><Button>Github Login</Button></Link> */}
      {/* <br />
      <button >Login</button>
      <br />
      <button >Logout</button> */}
    </>
  )
};

export default Landing;