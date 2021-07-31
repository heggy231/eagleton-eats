import { NavLink } from "react-router-dom";
import Greeting from "../../components/greeting";



const Header = () => {

    return (
        
        <header>
            <div>
            <NavLink to="/">Home</NavLink>
            </div>
            <ul>
                <li>
                   <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/order">Order</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
            <Greeting />
        </header>
    );
};

export default Header; 