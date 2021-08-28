import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Menu from "./menu/menu";
import Cart from "./cart/cart";
import InputProduct from "./product/InputProduct";
import GuardedRoute from "../components/GuardedRoute";
import NotFoundPage from "../components/NotFoundPage";

const Routes = () => {
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

  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/menu" render={() => <Menu />} />
      <Route exact path="/cart" render={() => <Cart />} />
      <Redirect from="/cart-page" to="cart" />
      <Route exact path="/about" render={() => <About />} />
      <GuardedRoute
        exact
        path="/product"
        component={InputProduct}
        auth={userLogin}
      />
      {/* Route with no path will match all routes */}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
