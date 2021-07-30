import { Route } from "react-router-dom"
import About from "./about/about"
import Home from "./home/home"
import Menu from "./menu/menu"
import Order from "./order/order"

const Routes = () => {

    return (
        <>
        <Route 
        exact={true}
        path="/"
        render={() => <Home /> }
        />
        <Route 
        exact={true}
        path="/menu"
        render={() => <Menu /> }
        />
        <Route 
        exact={true}
        path="/order"
        render={() => <Order /> }
        />
        <Route 
        exact={true}
        path="/about"
        render={() => <About /> }
        />
        </>
    )

    };

    export default Routes;