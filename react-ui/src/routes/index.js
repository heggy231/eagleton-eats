import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Menu from "./menu/menu";
import Cart from "./cart/cart";
import InputProduct from "./product/InputProduct";
import GuardedRoute from "../components/GuardedRoute";

const Routes = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  // function login() {
  //   setIsAuthenticated(true);
  //   console.log("loggedInUser:" + isAuthenticated);
  // }

  // function logout() {
  //   setUserLogin(false);
  //   console.log("loggedInUser:" + userLogin);
  // }

  return (
    <>
      {/* <button onClick={logout}>Logout</button> */}
      
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/menu" render={() => <Menu />} />
      <Route exact path="/cart" render={() => <Cart />} />
      <Route exact path="/about" render={() => <About />} />
      <GuardedRoute
        exact
        path="/product"
        component={InputProduct}
        auth={userLogin}
      />
    </>
  );
};

export default Routes;
