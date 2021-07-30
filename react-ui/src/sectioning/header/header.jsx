import { Navlink} from 'react-router-dom';
import Greeting from "../../components/greeting"
const Header = () => {

    return (
        
        <header>
            <div>
            <Navlink to="/">Home</Navlink>
            </div>
            <ul>
                <li>
                   <Navlink to="/menu">Menu</Navlink>
                </li>
                <li>
                    <Navlink to="/order">Order</Navlink>
                </li>
                <li>
                    <Navlink to="/about">About</Navlink>
                </li>
            </ul>
            <Greeting />
        </header>
    );
};

export default Header;