import React from "react";
import { Route, Redirect } from "react-router-dom";

// let auth = props.auth
// let Component = props.component => Component
// assignin rest then add the rest inside of the rest = props.x
// render, path
const GuardedRoute = ({ component: Component, auth, ...rest }) => {
  console.log("auth: " + auth);
  return (
    <Route {...rest} render={(props) => (
      auth === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
}

export default GuardedRoute;
