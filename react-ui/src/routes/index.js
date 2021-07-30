import { Route } from "react-router-dom"
import Landing from "./landing/landing"
import About from "./about/about"
import Home from "./home/home"
import Menu from "./menu/menu"
import Order from "./order/order"

const Routes = () => {

    return (
        <>
        <Routes 
        exact={true}
        path="/"
        render={() => <Home /> }
        />
        <Routes 
        exact={true}
        path="/menu"
        render={() => <Menu /> }
        />
        <Routes 
        exact={true}
        path="/order"
        render={() => <Order /> }
        />
        <Routes 
        exact={true}
        path="/about"
        render={() => <About /> }
        />
        </>
    )

    };

    export default Routes;