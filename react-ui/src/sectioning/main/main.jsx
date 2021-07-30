import { Switch, Route } from "react-router-dom";
import Routes from "../..routes";

const Main = () => {
  return (
    <main>
      <Switch>
        <Routes />
      </Switch>
    </main>
  );
};

export default Main;