// import Food from "./food-wooden.jpeg";
import './home.css';
import { Link } from 'react-router-dom';

const Landing = () => {

  return (
    <>
      <h1>Welcome to Our Eagleton Food Truck</h1>
      <Link to="/auth/github" target="_self">Github Login</Link>
    </>
  )
};

export default Landing;