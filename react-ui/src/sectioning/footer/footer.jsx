
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>Copyright 2021</li>
        <li><a href="#">GitHub</a></li>
        <li>
          <NavLink to="/credits">Credits</NavLink>
          </li>
      </ul>
    </footer>
  );
};

export default Footer;