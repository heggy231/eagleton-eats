import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const jumboStyle = {
    backgroundColor: "rgb(229 75 182 / 38%)",
    marginTop: "-1rem",
    color: "#00ffc6",
  };
  return (
    <div className="jumbotron" style={jumboStyle}>
      <h2>404 Page Not Found</h2>
      <p>
        <Link className="btn btn-primary" to="/">
          Take me back to Home Page
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
