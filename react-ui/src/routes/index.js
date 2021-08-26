import { Route } from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Menu from "./menu/menu";
import Cart from "./cart/cart";
import InputProduct from "./product/InputProduct";
import GuardedRoute from "../components/GuardedRoute";

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/menu" render={() => <Menu />} />
      <Route exact path="/cart" render={() => <Cart />} />
      <Route exact path="/about" render={() => <About />} />
      <GuardedRoute exact path="/product" component={InputProduct} auth={true} />
    </>
  );
};

export default Routes;
