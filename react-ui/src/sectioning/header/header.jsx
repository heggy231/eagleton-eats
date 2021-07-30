import { Navlink} from 'react-router-dom';

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
        </header>
    );
};

export default Header;