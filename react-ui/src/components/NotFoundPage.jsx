import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <p>
        <Link to="/">Go to Home Page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
