import { NavLink } from 'react-router-dom';

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
        </header>
    );
};

export default Header;