import { Route } from "react-router-dom"
import Landing from "./landing/landing"
import About from "./about/about"
import home from "./home/home"
import Menu from "./menu/menu"
import Order from "./order/order"

const Routes = () => {

    return (
        <>
                <Routes 
        exact={true}
        path="/"
        render={() => <p><Landing /></p> }
        />
        <Routes 
        exact={true}
        path="/menu"
        render={() => <p><Menu /></p> }
        />
        <Routes 
        exact={true}
        path="/order"
        render={() => <p><Order /></p> }
        />
        <Routes 
        exact={true}
        path="/about"
        render={() => <p><About /></p> }
        />
        </>
    )

    };

    export default Routes;