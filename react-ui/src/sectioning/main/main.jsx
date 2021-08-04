import { Switch } from "react-router-dom";
import Routes from "../../routes";

const Main = () => {
  return (
    <main style={{marginTop: '60px'}}>
      <Switch>
        <Routes />
      </Switch>
    </main>
  );
};

export default Main;