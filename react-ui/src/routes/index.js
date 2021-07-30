import { Route } from "react-router-dom"
import Landing from "./landing/landing"
import About from "./about/about"
import home from "./home/home"
import Menu from "./menu/menu"
import Order from "./order/order"

const Routes = () => {

    return (
        <>
          <Route
            exact={true}
            path="/"
            render={() => <p><Landing /></p> }
          />
          <Route
            exact={true}
            path="/menu"
            render={() => <p><Menu /></p> }
          />
          <Route
            exact={true}
            path="/order"
            render={() => <p><Order /></p> }
          />
          <Route
            exact={true}
            path="/about"
            render={() => <p><About /></p> }
          />
        </>
    )

    };

    export default Routes;