import { Switch, Route} from "react-router-dom";
import PageAbout from "../pages/PageAbout";
import Home from "../pages/Home";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <PageAbout/>
      </Route>
    </Switch>
  );
};

export default Routes;
